Smalltalk createPackage: 'OndafSimulator'!
(Smalltalk packageAt: 'OndafSimulator') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #ExamPrinterTray
	instanceVariableNames: 'selector'
	package: 'OndafSimulator'!

!ExamPrinterTray methodsFor: 'as yet unclassified'!

newCopy: textNumber of: totalTexts titled: aString withTime: aTimeInSeconds 
	^ CTestTextCopy newWithView: (ExamTextView newIn: selector title: aString text: textNumber of: totalTexts)
!

selector: aSelector
	selector := aSelector
! !

!ExamPrinterTray class methodsFor: 'as yet unclassified'!

newOn: aSelector
	^ self new
		selector: aSelector;
		yourself
! !

Widget subclass: #ExamTextView
	instanceVariableNames: 'title content continueCheckbox continueButton inputs container textNumber numberOfTexts infoSeconds continueAction renderArea actions'
	package: 'OndafSimulator'!

!ExamTextView methodsFor: 'actions'!

answers
	^ inputs collect: [ :input | input val ]
!

consumeResults: resultStream
	self showResults: (resultStream next: inputs size)
!

showResults: results
	| classes |
	classes := results collect: [ :result |
		result ifTrue: [ 'correct' ] ifFalse: [ 'incorrect' ]
	].
	inputs with: classes do: [ :input :class |
		input addClass: class
	]
!

showSeconds: seconds
	infoSeconds text: 'Verbleibende Sekunden: ', seconds
! !

!ExamTextView methodsFor: 'building'!

addText: aString
	content add: [ :html | html span with: aString, ' ' ]
!

addWordToComplete: aString
	content add: [ :html |
		(html tag: 'nobr')
			with: [
				html span with: aString.
				inputs add: (html input
					type: 'text';
					at: 'size' put: 10;
					asJQuery)
			];
			with: ' '
	]
! !

!ExamTextView methodsFor: 'initialization'!

initialize
	super initialize.
	content := OrderedCollection new.
	inputs := OrderedCollection new
!

initializeWithTitle: aString selector: aSelector number: aNumber of: totalNumber
	title := aString.
	container := aSelector.
	textNumber := aNumber.
	numberOfTexts := totalNumber
! !

!ExamTextView methodsFor: 'private'!

onContinueCheckboxChanged
	(continueCheckbox is: ':checked')
		ifTrue: [ continueButton css: 'visibility' value: 'visible' ]
		ifFalse: [ continueButton css: 'visibility' value: 'hidden' ]
! !

!ExamTextView methodsFor: 'rendering'!

continue
	actions remove.
	continueAction value
!

hide
	renderArea hide
!

render
	self appendToJQuery: container asJQuery
!

renderActionsOn: html
	actions := html div
		class: 'actions';
		with: [
			html label with: [
				continueCheckbox := html input
					type: 'checkbox';
					onChange: [ self onContinueCheckboxChanged ];
					asJQuery.
				html img
					src: 'https://www.ondaf.de/ondaf/durchfuehrung/bilder/text.gif';
					width: 190
			].
			continueButton := html a
				href: '#';
				class: 'continue';
				onClick: [ self continue ];
				with: [
					html img
					src: 'https://www.ondaf.de/ondaf/durchfuehrung/bilder/weiter.gif';
					width: 256
				];
				asJQuery
		];
		asJQuery
!

renderContentOn: html
	html p
		class: 'content';
		with: [	content do: [ :each | each value: html ] ]
!

renderInfoOn: html
	html div
		class: 'info';
		with: [
			html span class: 'text-number';
				with: 'Text ';
				with: textNumber;
				with: ' von ';
				with: numberOfTexts.
			infoSeconds := html span class: 'time';
				asJQuery.
		]
!

renderOn: html
	renderArea := html div
		class: 'text';
		with: [ self renderTitleOn: html ];
		with: [ self renderContentOn: html ];
		with: [ self renderActionsOn: html ];
		with: [ self renderInfoOn: html ];
		asJQuery
!

renderTitleOn: html
	html p
		class: 'title';
		with: title
!

show
	renderArea show
!

whenContinueDo: aBlock
	continueAction := aBlock
! !

!ExamTextView class methodsFor: 'as yet unclassified'!

newIn: aSelector title: aString text: number of: totalNumber
	^ self new
		initializeWithTitle: aString selector: aSelector number: number of: totalNumber;
		yourself
! !

Widget subclass: #Header
	instanceVariableNames: 'startExamHandler headerElement newExamHandler'
	package: 'OndafSimulator'!

!Header methodsFor: 'events'!

whenNewExam: aBlock
	newExamHandler := aBlock
!

whenStartExam: aBlock
	startExamHandler := aBlock
! !

!Header methodsFor: 'initialization'!

initialize
	super initialize.
	startExamHandler := []
! !

!Header methodsFor: 'rendering'!

remove
	headerElement remove
!

renderOn: html
	headerElement := html header
		with: [
			html a
				with: 'New exam';
				tabindex: 0;
				onClick: newExamHandler.
			html a
				with: 'Start exam';
				tabindex: 0;
				onClick: startExamHandler
		];
		asJQuery
! !

Object subclass: #OndafSimulator
	instanceVariableNames: 'fileDropTarget examDesigner theExam header printer currentExam copies'
	package: 'OndafSimulator'!

!OndafSimulator methodsFor: 'action'!

addText: aString
	examDesigner considerText: aString
!

addToList: aTitle
	TextCard newIn: '#content > .text-file-target' title: aTitle
!

beginNextText
	currentExam atEnd ifTrue: [
		| result |
		result := theExam evaluate: copies on: (ResultView newIn: '#content').
		result giveToStudent.
	] ifFalse: [
		currentExam next giveToStudent.
	]
!

finishExamDesign
	header remove.
	fileDropTarget hide.
!

startExam
	self finishExamDesign.
	
	theExam := examDesigner designExam.
	copies := printer print: theExam.
	
	copies do: [ :each | each whenFinishDo: [ self beginNextText ] ].
	currentExam := copies readStream.
	
	self beginNextText
! !

!OndafSimulator methodsFor: 'starting'!

augmentPage
	header := Header new
		whenStartExam: [ self startExam ];
		whenNewExam: [ 'body' asJQuery empty. OndafSimulator start ];
		appendToJQuery: 'body' asJQuery;
		yourself.
	
	(HTMLCanvas onJQuery: 'body' asJQuery) section id: 'content'.
		
	fileDropTarget := TextFileDropTarget
		newIn: '#content'
		handler: [ :txt | self addText: txt ]
!

initialize
	super initialize.
	examDesigner := ExamDesigner new.
	printer := CTestPrinter newWithTray: (ExamPrinterTray newOn: '#content').
	examDesigner
		informProgressTo: [ :title | self addToList: title ]
! !

OndafSimulator class instanceVariableNames: 'currentInstance'!

!OndafSimulator class methodsFor: 'starting'!

current
	^ currentInstance
!

start
	currentInstance := self new.
	'body' asJQuery empty.
	self current augmentPage
! !

Widget subclass: #ResultView
	instanceVariableNames: 'score totalScore percentage level container'
	package: 'OndafSimulator'!

!ResultView methodsFor: 'as yet unclassified'!

container: aContainer
	container := aContainer
!

level: aLevel
	level := aLevel
!

percentage: aPercentage
	percentage := aPercentage
!

renderOn: html
	html div
		class: 'text result';
		with: [
			html div
				class: 'info';
				with: [
					html span with: 'Der Test ist beendet. Sie haben folgendes Ergebnis erzielt:'.
					html span with: [ html span with: score. html span with: 'Punkte.'. html span with: level ]; class: 'score'.
					html span with: 'Dies sind ', percentage, ' % der maximal möglichen ', totalScore, ' Punkte.'
				]
		]
!

renderScore: aScore of: aTotalScore percentage: aPercentage level: aLevel
	self
		score: aScore;
		totalScore: aTotalScore;
		percentage: aPercentage;
		level: aLevel;
		appendToJQuery: container
!

score: aScore
	score := aScore
!

totalScore: aScore
	totalScore := aScore
! !

!ResultView class methodsFor: 'as yet unclassified'!

newIn: aSelector
	| container |
	container := '<div>' asJQuery.
	aSelector asJQuery prepend: container.
	
	^ self new
		container: container;
		yourself
! !

Widget subclass: #TextCard
	instanceVariableNames: 'card title'
	package: 'OndafSimulator'!

!TextCard methodsFor: 'initialization'!

initializeWith: aTitle
	title := aTitle
! !

!TextCard methodsFor: 'rendering'!

renderOn: html
	card := html div
		with: title;
		class: 'text-card'
! !

!TextCard class methodsFor: 'as yet unclassified'!

newIn: aSelector title: aString
	^ self new
		initializeWith: aString;
		appendToJQuery: aSelector asJQuery;
		yourself
! !

Widget subclass: #TextFileDropTarget
	instanceVariableNames: 'dropArea handler'
	package: 'OndafSimulator'!

!TextFileDropTarget methodsFor: 'actions'!

hide
	dropArea hide
! !

!TextFileDropTarget methodsFor: 'events'!

handler: aBlock
	handler := aBlock
! !

!TextFileDropTarget methodsFor: 'private'!

handleDrop: files
	files select: [ :file | file type = 'text/plain' ]
		thenDo: [ :file | | reader |
			reader := FileReader new.
			reader addEventListener: 'loadend' do: [
				handler value: reader result
			].
			reader readAsText: file
		]
! !

!TextFileDropTarget methodsFor: 'rendering'!

renderOn: html
	dropArea := html div
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
		self handleDrop: (Array ofNative: event originalEvent dataTransfer files).
	]
! !

!TextFileDropTarget class methodsFor: 'as yet unclassified'!

newIn: aSelector
	^ self newIn: aSelector handler: []
!

newIn: aSelector handler: aBlock
	^ self new handler: aBlock;
		appendToJQuery: aSelector asJQuery;
		yourself
! !

Object subclass: #Timer
	instanceVariableNames: 'action delay intervalId'
	package: 'OndafSimulator'!

!Timer methodsFor: 'as yet unclassified'!

action: aBlock
	action := aBlock
!

milliseconds: someMillis
	delay := someMillis
!

start
	intervalId := window setInterval: action withDelay: delay
!

stop
	window clearInterval: intervalId
! !

!Timer class methodsFor: 'instance creation'!

each: milliseconds do: aBlock
	^ self new
		milliseconds: milliseconds;
		action: aBlock;
		yourself
!

on: milliseconds do: aBlock
	| newTimer |
	newTimer := self new
		milliseconds: milliseconds;
		yourself.
		
	newTimer action: [
		aBlock value.
		newTimer stop
	].
	
	^ newTimer
! !

!Array class methodsFor: '*OndafSimulator'!

ofNative: aCollection 
	"Answer an instance of me containing the same elements as aCollection.
	 aCollection must be a native collection, with .length and [] operator"
	| newArray |
	newArray := self new: aCollection length.
	1 to: aCollection length do: [:i | newArray at: i put: (aCollection at: i - 1)].
	^ newArray
! !

!BlockClosure methodsFor: '*OndafSimulator'!

newWithValues: aCollection
	"Alternative implementation that works with Blob"
	<
		aCollection.unshift(self);
		return new (Function.prototype.bind.apply(self, aCollection));
	>
! !

