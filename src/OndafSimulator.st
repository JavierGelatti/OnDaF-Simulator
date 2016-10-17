Smalltalk createPackage: 'OndafSimulator'!
(Smalltalk packageAt: 'OndafSimulator') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #CTestInterpreter
	instanceVariableNames: ''
	package: 'OndafSimulator'!

!CTestInterpreter methodsFor: 'operations'!

interpretText: aString
	| theTitle titleParser textStream contentParser theContent |
	textStream := aString trimBoth readStream.
	textStream isEmpty
		ifTrue: [ ^ CTestText empty ].
	
	titleParser := CTestParser forTitle.
	theTitle := titleParser consumeAllIn: textStream; contents.
	
	contentParser := CTestParser forContent.
	theContent := contentParser consumeAllIn: textStream; contents.
	
	^ CTestText withTitle: theTitle content: theContent
! !

Object subclass: #CTestParser
	instanceVariableNames: 'state content endState'
	package: 'OndafSimulator'!

!CTestParser methodsFor: 'accessing'!

contents
	^ content
!

endState
	^ endState
!

state
	^ state name
!

state: aState
	state := aState
! !

!CTestParser methodsFor: 'initialization'!

initialize
	super initialize.
	endState := CTestParserState newFor: self named: 'End'.
! !

!CTestParser methodsFor: 'operations'!

addToContents: anObject
	self subclassResponsibility
!

consume: aCharacter
	"self halt: 'consuming ', aCharacter."
	state consume: aCharacter
!

consumeAllIn: aReadStream 
	[state = self endState or: aReadStream atEnd] whileFalse: [ self consume: aReadStream next asString ].
	state finish
! !

!CTestParser class methodsFor: 'instance creation'!

forContent
	^ CTestContentParser new
!

forTitle
	^ CTestTitleParser new.
! !

CTestParser subclass: #CTestContentParser
	instanceVariableNames: 'currentWord currentSuffix waiting readingWord waitingForWord readingSuffixes words suffixes'
	package: 'OndafSimulator'!

!CTestContentParser methodsFor: 'initialization'!

initialize
	super initialize.
	
	currentWord := ''.
	currentSuffix := ''.
	words := OrderedCollection new.
	suffixes := OrderedCollection new.
	content := OrderedCollection new.
	
	self initializeStates.
	self bindStates.
	
	state := waiting
! !

!CTestContentParser methodsFor: 'operations'!

addToContents: anObject
	content add: anObject
! !

!CTestContentParser methodsFor: 'private-actions'!

addRemainingWords
	^ [
		self addWord value.
		self addWordsToContent value.
	]
!

addWord
	^ [ currentWord isEmpty ifFalse: [
			words add: self popCurrentWord
		]
	]
!

addWordToComplete
	^ [ self addToContents: self popWordToComplete ]
!

addWordsToContent
	^ [
		words ifNotEmpty: [ self addToContents: (CompletedText with: (' ' join: words)) ].
		words := OrderedCollection new
	]
!

appendToCurrentSuffix
	^ [ :aCharacter | currentSuffix := currentSuffix , aCharacter ]
!

appendToCurrentWord
	^ [ :aCharacter | currentWord := currentWord , aCharacter ]
! !

!CTestContentParser methodsFor: 'private-initialization'!

bindStates
	waiting whenLetterState: readingWord.
	waiting whenLetterAction: self appendToCurrentWord.
	
	readingWord whenSpaceState: waitingForWord.
	readingWord whenSpaceAction: self addWord.
	readingWord whenLetterAction: self appendToCurrentWord.
	readingWord whenFinishAction: self addRemainingWords.
	readingWord when: '{' thenState: readingSuffixes action: self addWordsToContent.
	
	waitingForWord whenLetterState: readingWord.
	waitingForWord whenLetterAction: self appendToCurrentWord.
	waitingForWord whenFinishAction: self addRemainingWords.
	
	readingSuffixes whenLetterAction: self appendToCurrentSuffix.
	readingSuffixes when: '}' thenState: readingWord action: self addWordToComplete.
	readingSuffixes when: ',' thenAction: self addSuffix.
!

initializeStates
	waiting := CTestParserState newFor: self named: 'Waiting'.
	readingWord := CTestParserState newFor: self named: 'ReadingWord'.
	waitingForWord := CTestParserState
		newFor: self
		named: 'WaitingForWord'.
	readingSuffixes := CTestParserState
		newFor: self
		named: 'ReadingSuffixes'
! !

!CTestContentParser methodsFor: 'private-popping'!

addSuffix
	^ [ suffixes add: self popCurrentSuffix ]
!

popCurrentSuffix
	| suffix |
	suffix := currentSuffix.
	currentSuffix := ''.
	^ suffix
!

popCurrentWord
	| word |
	word := currentWord.
	currentWord := ''.
	^ word
!

popWordToComplete
	| wordToComplete |
	self addSuffix value.
	wordToComplete := WordToComplete
		withPrefix: self popCurrentWord
		options: (Array newFrom: suffixes).
	suffixes := OrderedCollection new.
	^ wordToComplete
! !

CTestParser subclass: #CTestTitleParser
	instanceVariableNames: ''
	package: 'OndafSimulator'!

!CTestTitleParser methodsFor: 'initialization'!

initialize
	| waiting readingWord waitingForWord |
	super initialize.
	content := ''.
	
	waiting := CTestParserState newFor: self named: 'Waiting'.
	readingWord := CTestParserState newFor: self named: 'ReadingWord'.
	waitingForWord := CTestParserState newFor: self named: 'WaitingForWord'.
	
	waiting whenLetterState: readingWord.
	waiting whenLetterAction: [ :aCharacter | self addToContents: aCharacter ].
	
	readingWord whenSpaceState: waitingForWord.
	readingWord whenEnterState: endState.
	readingWord whenLetterAction: [ :aCharacter | self addToContents: aCharacter ].

	waitingForWord whenEnterState: endState.
	waitingForWord whenLetterState: readingWord.
	waitingForWord whenLetterAction: [ :aCharacter | self addToContents: ' ' , aCharacter ].
	
	state := waiting
! !

!CTestTitleParser methodsFor: 'operations'!

addToContents: aCharacter
	content := content, aCharacter
! !

Object subclass: #CTestParserState
	instanceVariableNames: 'parser whenSpaceState whenEnterState whenLetterState letterBlock spaceBlock name finishBlock specialChars'
	package: 'OndafSimulator'!

!CTestParserState methodsFor: 'accessing'!

name
	^ name
! !

!CTestParserState methodsFor: 'as yet unclassified'!

when: aCharacter thenAction: aBlock
	^ self when: aCharacter thenState: self action: aBlock
! !

!CTestParserState methodsFor: 'configuration'!

when: aCharacter thenState: aState
	specialChars add: aCharacter -> (Array with: aState with: [  ])
!

when: aCharacter thenState: aState action: aBlock
	specialChars add: aCharacter -> (Array with: aState with: aBlock)
!

whenEnterState: aState 
	self when: String cr thenState: aState.
!

whenFinishAction: aBlock
	finishBlock := aBlock
!

whenLetterAction: aBlock
	letterBlock := aBlock
!

whenLetterState: aState 
	whenLetterState := aState
!

whenSpaceAction: aBlock
	spaceBlock := aBlock
!

whenSpaceState: aState 
	whenSpaceState := aState
! !

!CTestParserState methodsFor: 'initialization'!

initializeWith: aParser name: aString 
	parser := aParser.
	name := aString.
	specialChars := Dictionary new.
	
	letterBlock := [ :aCharacter | ].
	spaceBlock := [ ].
	
	whenLetterState := self.
	whenEnterState := self.
	whenSpaceState := self.
! !

!CTestParserState methodsFor: 'operations'!

consume: aCharacter
	specialChars at: aCharacter ifPresent: [ :p |
		p second value.
		parser state: p first.
		^ nil ].
	(self isWhiteSpace: aCharacter)
		ifFalse: [ letterBlock value: aCharacter.
			parser state: whenLetterState.
			^ nil ].
	spaceBlock value.
	parser state: whenSpaceState.
	^ nil
!

finish
	^ finishBlock value
! !

!CTestParserState methodsFor: 'printing'!

printOn: aStream
	| title |
	title := self name, ' State'.
	aStream
		nextPutAll: (title first isVowel ifTrue: ['an '] ifFalse: ['a ']);
		nextPutAll: title
! !

!CTestParserState methodsFor: 'private-testing'!

isEnter: aCharacter
	^ aCharacter = String cr
!

isWhiteSpace: aCharacter
	^ (Array with: String cr with: String tab with: String space) includes: aCharacter
! !

!CTestParserState class methodsFor: 'instance creation'!

newFor: aParser named: aString
	^ self new
		initializeWith: aParser name: aString;
		yourself
! !

Object subclass: #CTestText
	instanceVariableNames: 'title content'
	package: 'OndafSimulator'!

!CTestText methodsFor: 'accessing'!

title
	^ title
! !

!CTestText methodsFor: 'conversion'!

contentAsString
	^ '' join: (content collect: [ :c |
		c asString
	])
! !

!CTestText methodsFor: 'initialization'!

initializeTitle: aTitle content: anObject
	title := aTitle.
	content := anObject
! !

!CTestText class methodsFor: 'instance creation'!

empty
	^ self withTitle: '' content: nil
!

withTitle: aString content: theContent
	^ self new
		initializeTitle: aString content: theContent;
		yourself
! !

Object subclass: #CompletedText
	instanceVariableNames: 'text'
	package: 'OndafSimulator'!

!CompletedText methodsFor: 'accessing'!

asString
	^ self text
!

text
	^ text
! !

!CompletedText methodsFor: 'as yet unclassified'!

= anotherObject
	^ anotherObject text = text.
! !

!CompletedText methodsFor: 'initialization'!

initializeWithText: aString
	text := aString
! !

!CompletedText methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	aStream nextPutAll: '(', text, ')'.
! !

!CompletedText class methodsFor: 'as yet unclassified'!

with: aText
	^ self new initializeWithText: aText
! !

Object subclass: #OndafSimulator
	instanceVariableNames: ''
	package: 'OndafSimulator'!

!OndafSimulator methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
!

doSilkTAG
	'#output-list' asSilk LI: 'Silk TAG: added me!!'
! !

!OndafSimulator methodsFor: 'starting'!

augmentPage
	| receptorTextos |
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
	
	TextFileTarget newIn: 'body'.
! !

!OndafSimulator class methodsFor: 'starting'!

start
	self new augmentPage
! !

Collection subclass: #ReadableCollection
	instanceVariableNames: 'source'
	package: 'OndafSimulator'!

!ReadableCollection methodsFor: 'as yet unclassified'!

add: anObject
	self onlyReadError
!

detect: aBlock ifNone: anotherBlock
	self do: [ :each | (aBlock value: each) ifTrue: [ ^each ] ].
		^ anotherBlock value
!

do: aBlock
	0 to: (self size - 1) do: [ :i |
		aBlock value: (source at: i)
	].
!

onlyReadError
	self error: 'This is a readable collection (you can only read)'
!

remove: anObject ifAbsent: aBlock
	self onlyReadError
!

removeAll
	self onlyReadError
!

select: selectBlock thenDo: doBlock
	(self select: selectBlock) do: doBlock
!

size
	^ source length
!

source
	^ source
!

source: anObject
	source := anObject
!

writeStream
	^ Array new writeStream
! !

!ReadableCollection class methodsFor: 'as yet unclassified'!

of: aSource
	^ self new source: aSource; yourself
! !

TestCase subclass: #TestInterpreter
	instanceVariableNames: ''
	package: 'OndafSimulator'!

!TestInterpreter methodsFor: 'tests'!

test1
	| anInterpreter aText |
	anInterpreter := CTestInterpreter new.
	aText := anInterpreter interpretText: ''.
	self assert: aText title equals: ''.
!

test2
	| anInterpreter aText |
	anInterpreter := CTestInterpreter new.
	aText := anInterpreter interpretText: 'The Title'.
	self assert: aText title equals: 'The Title'.
!

test3
	| anInterpreter aText |
	anInterpreter := CTestInterpreter new.
	aText := anInterpreter interpretText: '    The Title   '.
	self assert: aText title equals: 'The Title'.
!

test4
	| anInterpreter aText |
	anInterpreter := CTestInterpreter new.
	aText := anInterpreter interpretText: String cr, ' The Title ', String cr.
	self assert: aText title equals: 'The Title'.
!

test5
	| anInterpreter aText |
	anInterpreter := CTestInterpreter new.
	aText := anInterpreter interpretText: 'The Title', String cr, 'The content'.
	self assert: aText title equals: 'The Title'.
	self assert: aText contentAsString equals: 'The content'
!

test6
	| anInterpreter aText |
	anInterpreter := CTestInterpreter new.
	aText := anInterpreter interpretText: 'The Title', String cr, '   The content  '.
	self assert: aText title equals: 'The Title'.
	self assert: aText contentAsString equals: 'The content'
!

test7
	| anInterpreter aText stringText |
	anInterpreter := CTestInterpreter new.
	stringText := 'The Title' , String cr , 'The content' , String cr, 'More content'.
	aText := anInterpreter interpretText: stringText.
	self assert: aText title equals: 'The Title'.
	self assert: aText contentAsString equals: 	'The content More content'
!

test8
	| anInterpreter aText stringText |
	anInterpreter := CTestInterpreter new.
	stringText := 'The Title' , String cr , 'The cont{ent}' , String cr, 'More content'.
	aText := anInterpreter interpretText: stringText.
	self assert: aText title equals: 'The Title'.
	self assert: aText contentAsString equals: 'The cont{ent} More content'
! !

TestCase subclass: #TestParserForContent
	instanceVariableNames: 'aParser'
	package: 'OndafSimulator'!

!TestParserForContent methodsFor: 'assertions'!

assertState: stateName
	self assert: aParser state equals: stateName
! !

!TestParserForContent methodsFor: 'running'!

setUp
	^ aParser := CTestParser forContent
! !

!TestParserForContent methodsFor: 'tests'!

test01AParserStartsEmtpyAndWaiting
	self assert: aParser contents equals: OrderedCollection new.
	self assertState: 'Waiting'
!

test02ReadLetterWhenWaiting
	aParser consumeAllIn: 'a' readStream.
	self assert: aParser contents equals: (OrderedCollection
		with: (CompletedText with: 'a')
	).
	self assertState: 'ReadingWord'
!

test03ReadBlankWhenWaiting
	aParser consumeAllIn: (' ', String cr) readStream.
	self assert: aParser contents equals: OrderedCollection new.
	self assertState: 'Waiting'
!

test04ReadBlankWhenReading
	aParser consumeAllIn: 'a ' readStream.
	self assert: aParser contents equals: (OrderedCollection
		with: (CompletedText with: 'a')
	).
	self assertState: 'WaitingForWord'
!

test05ReadBlankWhenWaitingForWord
	aParser consumeAllIn: 'a b' readStream.
	self assert: aParser contents equals: (OrderedCollection
		with: (CompletedText with: 'a b')
	).
	self assertState: 'ReadingWord'
!

test06ParseTextWithSpaces
	| text |
	text := String cr, '   asd   qwerty  ', String tab.
	aParser consumeAllIn: text readStream.
	self assert: aParser contents equals: (OrderedCollection
		with: (CompletedText with: 'asd qwerty')
	).
	self assertState: 'WaitingForWord'
!

test07InitWordToComplete
	| text |
	text := 'he{'.
	text do: [ :c | aParser consume: c asString ].
	self assertState: 'ReadingSuffixes'.
!

test08ParseTextWithWordsToComplete
	| text |
	text := 'he{llo}'.
	aParser consumeAllIn: text readStream.
	self assert: aParser contents equals: (OrderedCollection
		with: (WordToComplete withPrefix: 'he' options: #('llo'))
	).
!

test09ParseTextWithWordsToCompleteBetweenText
	| text |
	text := 'pre text he{llo} post text'.
	aParser consumeAllIn: text readStream.
	self assert: aParser contents equals: (OrderedCollection
		with: (CompletedText with: 'pre text')
		with: (WordToComplete withPrefix: 'he' options: #('llo'))
		with: (CompletedText with: 'post text')).
!

test10ParseTextWithOneOptionWordsToComplete
	| text |
	text := String cr, '   pre  text  1 ', String tab, ' and   he{llo} post.  ', String cr, ' text  anot{her}    '.
	aParser consumeAllIn: text readStream.
	self assert: aParser contents equals: (OrderedCollection
		with: (CompletedText with: 'pre text 1 and')
		with: (WordToComplete withPrefix: 'he' options: #('llo'))
		with: (CompletedText with: 'post. text')
		with: (WordToComplete withPrefix: 'anot' options: #('her'))
	).
!

test11ParseTextWithMoreThenOneOptionWordToComplete
	| text |
	text := 'pre text he{llo,art} post.'.
	aParser consumeAllIn: text readStream.
	self assert: aParser contents equals: (OrderedCollection
		with: (CompletedText with: 'pre text')
		with: (WordToComplete withPrefix: 'he' options: #('llo' 'art'))
		with: (CompletedText with: 'post.')
	).
!

test12ParseTextWithSpaceInOptions
	| text |
	text := 'pre text he{  llo  ,  art  } post.'.
	aParser consumeAllIn: text readStream.
	self assert: aParser contents equals: (OrderedCollection
		with: (CompletedText with: 'pre text')
		with: (WordToComplete withPrefix: 'he' options: #('llo' 'art'))
		with: (CompletedText with: 'post.')
	).
!

test13ParseTextWithManyOptions
	| text |
	text := 'pre text he{llo, art, r} post.'.
	aParser consumeAllIn: text readStream.
	self assert: aParser contents equals: (OrderedCollection
		with: (CompletedText with: 'pre text')
		with: (WordToComplete withPrefix: 'he' options: #('llo' 'art' 'r'))
		with: (CompletedText with: 'post.')
	).
!

test14ParseTextWithLineBreaks
	| text |
	text := 'some text.', String cr, 'more text'.
	aParser consumeAllIn: text readStream.
	self assert: aParser contents equals: (OrderedCollection
		with: (CompletedText with: 'some text. more text')
	).
! !

TestCase subclass: #TestParserForTitle
	instanceVariableNames: 'aParser'
	package: 'OndafSimulator'!

!TestParserForTitle methodsFor: 'running'!

setUp
	^ aParser := CTestParser forTitle
! !

!TestParserForTitle methodsFor: 'tests'!

test01AParserStartsEmtpyAndWaiting
	self assert: aParser contents equals: ''.
	self assert: aParser state equals: 'Waiting'
!

test02ReadLetterWhenWaiting
	aParser consume: 'a'.
	self assert: aParser contents equals: 'a'.
	self assert: aParser state equals: 'ReadingWord'
!

test03ReadBlankWhenWaiting
	aParser consume: ' '.
	aParser consume: String cr.
	self assert: aParser contents equals: ''.
	self assert: aParser state equals: 'Waiting'
!

test04ReadBlankWhenReading
	aParser
		consume: 'a';
		consume: ' '.
	self assert: aParser contents equals: 'a'.
	self assert: aParser state equals: 'WaitingForWord'
!

test05ReadBlankWhenWaitingForWord
	aParser consume: 'a';
	        consume: ' ';
	        consume: 'b'.
	self assert: aParser contents equals: 'a b'.
	self assert: aParser state equals: 'ReadingWord'
!

test06ParseTextWithSpaces
	| text |
	text := String cr, '   asd   qwerty  ', String tab.
	text do: [ :c | aParser consume: c asString ].
	self assert: aParser contents equals: 'asd qwerty'.
	self assert: aParser state equals: 'WaitingForWord'
!

test07EndInNewLineWhenWaitingForWord
	| text |
	text := String cr, '   asd   qwerty  ', String tab, String cr, 'more content'.
	text do: [ :c | aParser consume: c asString ].
	self assert: aParser contents equals: 'asd qwerty'.
	self assert: aParser state equals: 'End'
!

test08EndInNewLineWhenReading
	| text |
	text := String cr, '   asd   qwerty', String cr, 'more content'.
	text do: [ :c | aParser consume: c asString ].
	self assert: aParser contents equals: 'asd qwerty'.
	self assert: aParser state equals: 'End'
!

test09DontKeepReadingIfAtEnd
	| text textStream |
	text := '123', String cr, 'more content'.
	textStream := text readStream.
	aParser consumeAllIn: textStream.
	self assert: aParser contents equals: '123'.
	self assert: aParser state equals: 'End'.
	self assert: textStream position equals: 4
!

test10ReturnWhenStreamEnds
	| text textStream |
	text := '123'.
	textStream := text readStream.
	aParser consumeAllIn: textStream.
	self assert: aParser contents equals: '123'.
!

test11ParseTitle
	| text textStream |
	text := '   This    is  a 3 ', String cr, ' more content'.
	textStream := text readStream.
	aParser consumeAllIn: textStream.
	self assert: aParser contents equals: 'This is a 3'.
! !

Widget subclass: #TextFileTarget
	instanceVariableNames: 'dropArea'
	package: 'OndafSimulator'!

!TextFileTarget methodsFor: 'as yet unclassified'!

handleDrop: files
	| reader |
	files select: [ :file | file type = 'text/plain' ]
		thenDo: [ :file |
			reader := FileReader new.
			reader addEventListener: 'loadend' do: [
				console log: reader result
			].
			reader readAsText: file
		].
!

renderOn: html
	dropArea := html div
		with: 'drop files here';
		class: 'text-file-target';
		asJQuery.
	
	dropArea on: 'dragenter' do: [ :event |
		event preventDefault.
		dropArea addClass: 'dragover'.
	].
	dropArea on: 'dragleave' do: [ :event |
		dropArea removeClass: 'dragover'.
	].
	dropArea on: 'dragover' do: [ :event |
		event preventDefault.
		event originalEvent dataTransfer dropEffect: 'copy'.
	].
	
	dropArea on: 'drop' do: [ :event |
		event preventDefault.
		event stopPropagation.
		dropArea removeClass: 'dragover'.
		self handleDrop: (ReadableCollection of: event originalEvent dataTransfer files).
	].
! !

!TextFileTarget class methodsFor: 'as yet unclassified'!

newIn: aSelector
	^ self new appendToJQuery: aSelector asJQuery; yourself
! !

Object subclass: #WordToComplete
	instanceVariableNames: 'prefix suffixOptions'
	package: 'OndafSimulator'!

!WordToComplete methodsFor: 'accessing'!

prefix
	^ prefix
!

suffixOptions
	^ suffixOptions
! !

!WordToComplete methodsFor: 'comparing'!

= anotherObject
	^ anotherObject prefix = prefix and: anotherObject suffixOptions = suffixOptions.
! !

!WordToComplete methodsFor: 'initialization'!

initializeWithPrefix: aString options: aCollection 
	prefix := aString.
	suffixOptions := aCollection
! !

!WordToComplete methodsFor: 'printing'!

asString
	^ ' ', prefix, '{', (',' join: suffixOptions), '} '
!

printOn: aStream
	super printOn: aStream.
	aStream nextPutAll: '(', self asString, ')'.
! !

!WordToComplete class methodsFor: 'instance creation'!

withPrefix: aString options: aCollection 
	^ self new initializeWithPrefix: aString options: aCollection; yourself
! !

!Array class methodsFor: '*OndafSimulator'!

newFrom: aCollection 
	"Answer an instance of me containing the same elements as aCollection."
	| newArray |
	newArray := self new: aCollection size.
	1 to: aCollection size do: [:i | newArray at: i put: (aCollection at: i)].
	^ newArray

"	Array newFrom: {1. 2. 3}
	{1. 2. 3} as: Array
	{1. 2. 3} as: ByteArray
	{$c. $h. $r} as: String
	{$c. $h. $r} as: Text
"
!

with: anObject with: anObject2 with: anObject3 with: anObject4
		^ (self new: 4)
		at: 1 put: anObject;
		at: 2 put: anObject2;
		at: 3 put: anObject3;
		at: 4 put: anObject4;
		yourself
! !

