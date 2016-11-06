Smalltalk createPackage: 'OndafSimulator-Tests'!
Object subclass: #FileDropper
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!FileDropper methodsFor: 'actions'!

dropFileEventWith: aFile
	^ self newObject
		at: 'type' put: 'drop';
		at: 'preventDefault' put: [];
		at: 'stopPropagation' put: [];
		at: 'originalEvent' put: (
			self newObject at: 'dataTransfer' put: (
				self newObject
					at: 'files' put: (
						self newObject
							at: 0 put: aFile;
							at: 'length' put: 1;
							yourself
					); yourself
			); yourself
		);
		jsObject.
!

dropFileEventWith: aFile and: anotherFile
	^ self newObject
		at: 'type' put: 'drop';
		at: 'preventDefault' put: [];
		at: 'stopPropagation' put: [];
		at: 'originalEvent' put: (
			self newObject at: 'dataTransfer' put: (
				self newObject
					at: 'files' put: (
						self newObject
							at: 0 put: aFile;
							at: 1 put: anotherFile;
							at: 'length' put: 2;
							yourself
					); yourself
			); yourself
		);
		jsObject.
!

dropText: aString and: anotherString on: aSelector
	| file1 file2 event |
	file1 := self textFileWith: aString.
	file2 := self textFileWith: anotherString.
	event := self dropFileEventWith: file1 and: file2.
	
	aSelector asJQuery trigger: event
!

dropText: aString on: aSelector
	| file event |
	file := self textFileWith: aString.
	event := self dropFileEventWith: file.
	
	aSelector asJQuery trigger: event
!

textFileWith: aString
	^ Blob newValue: (Array with: aString) value: #{'type' -> 'text/plain'}
! !

!FileDropper methodsFor: 'private'!

newObject
	^ JSON parse: '{}'
! !

TestCase subclass: #OndafSimulatorTest
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

TestCase subclass: #TimerTest
	instanceVariableNames: 'ctx'
	package: 'OndafSimulator-Tests'!

!TimerTest methodsFor: 'running'!

setUp
	super setUp.
	ctx := context
! !

!TimerTest methodsFor: 'tests'!

test01
	| timer1 timer2 count |
	self timeout: 150.
	
	count := 0.
	timer1 := Timer each: 50  do: [ count := count + 1 ].
	timer2 := Timer each: 110 do: [
		timer1 stop.
		timer2 stop.
		ctx execute: [ self assert: count equals: 2. self finished ]
	].
	
	timer1 start.
	timer2 start
! !

Object subclass: #WidgetPreviews
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!WidgetPreviews methodsFor: 'widgets'!

examTextView
	'body' asJQuery empty.
	
	(ExamTextView newIn: 'body' title: 'a Title' text: 2 of: 3)
		addText: 'Hello ';
		addWordToComplete: 'Wor';
		render;
		showSeconds: 99
!

header
	'body' asJQuery empty.
	
	Header new
		whenStartExam: [ window alert: 'start exam' ];
		appendToJQuery: 'body' asJQuery.
!

textCard
	'body' asJQuery empty.
		
	TextCard newIn: 'body' title: 'a Title'
!

textFileDropTarget
	'body' asJQuery empty.
		
	TextFileDropTarget
		newIn: 'body'
		handler: [ :txt | window alert: txt ].
	'.text-file-target' asJQuery
		css: 'height' put: '100px';
		css: 'border' put: '3px dashed gray';
		css: 'background' put: 'white'.
! !

TestCase subclass: #WidgetTest
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!WidgetTest methodsFor: 'gui testing'!

assertPageContains: aString
	self assert: ((':contains(', aString, ')') asJQuery length) > 0
!

assertPageDoesNotContain: aString
	self assert: ((':contains(', aString, ')') asJQuery length) == 0
!

clickOn: aString
	(self elementWithText: 'Start exam') click.
!

elementWithText: aString
	^ (':contains(', aString, ')') asJQuery
		filter: [ :i :elem | elem children length == 0 ]
! !

!WidgetTest methodsFor: 'running'!

setUp
	'body' asJQuery empty
! !

WidgetTest subclass: #ExamPrinterTest
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!ExamPrinterTest methodsFor: 'as yet unclassified'!

test01PrintsATextCorrectly
	| printer |
	printer := ExamPrinter newOn: 'body'.
	printer printTitle: 'A title'.
	printer printText: 'Example text. '.
	printer printWordToComplete: 'Hel'.

	printer copies do: #render.
	
	self assertPageContains: 'A title'.
	self assertPageContains: 'Example text.'.
	self assertPageContains: 'Hel'.
	self assert: 'input[type="text"]' asJQuery length equals: 1
!

test02IfThereAre2TitlesItRenders2Texts
	| printer |
	printer := ExamPrinter newOn: 'body'.
	printer printTitle: 'A title 1'.
	printer printTitle: 'A title 2'.

	printer copies do: #render.
	
	self assert: printer copies size equals: 2.
	self assertPageContains: 'A title 1'.
	self assertPageContains: 'A title 2'
! !

WidgetTest subclass: #ExamTestViewTest
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!ExamTestViewTest methodsFor: 'tests'!

test01ShowsTheTextTitle
	| examTextView |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView render.
	
	self assertPageContains: 'Text Title'
!

test02ShowsTheTextNumberAndTotalNumber
	| examTextView |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView render.
	
	self assertPageContains: 'Text 1 von 2'
!

test03TheContinueButtonIsHiddenByDefault
	| examTextView continueVisible |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView render.
	
	continueVisible := ('.continue' asJQuery css: 'visibility') == 'visible'.
	
	self assert: continueVisible not
!

test04TheContinueButtonIsShownWhenCheckingTheCheckbox
	| examTextView continueVisible |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView render.
	'input[type="checkbox"]' asJQuery click.
	
	continueVisible := ('.continue' asJQuery css: 'visibility') == 'visible'.
	
	self assert: continueVisible
!

test05ShowsTheCompletedText
	| examTextView |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView addText: 'Hello.'.
	examTextView render.
	
	self assertPageContains: 'Hello.'
!

test06ShowsTheWordsToComplete
	| examTextView |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView addWordToComplete: 'Hel'.
	examTextView render.
	
	self assertPageContains: 'Hel'.
	self assert: 'input[type="text"]' asJQuery length equals: 1
!

test07CanProvideTheAnswers
	| examTextView inputs |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView addWordToComplete: 'Hel'.
	examTextView addWordToComplete: ' Wo'.
	examTextView render.
	inputs := 'input[type="text"]' asJQuery.
	(inputs at: 0) value: 'lo'.
	(inputs at: 1) value: 'rld'.
	
	self assert: examTextView answers equals: #('lo' 'rld')
!

test08CanDisplaySeconds
	| examTextView |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView render.
	
	examTextView showSeconds: 59.
	
	self assertPageContains: 'Verbleibende Sekunden: 59'
!

test09ByDefaultSecondsAreNotDisplayed
	| examTextView |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView render.
	
	self assertPageDoesNotContain: 'Verbleibende Sekunden'
!

test10CanShowTheResults
	| examTextView inputs |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView addWordToComplete: 'Hel'.
	examTextView addWordToComplete: ' Wo'.
	examTextView render.
	
	examTextView showResults: #(false true).
	
	inputs := 'input[type="text"]' asJQuery.	
	self assert: ((inputs at: 0) asJQuery attr: 'class') equals: 'incorrect'.
	self assert: ((inputs at: 1) asJQuery attr: 'class') equals: 'correct'.
!

test11ContinuesWhenContinueClicked
	| examTextView executed |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	executed := false.
	
	examTextView whenContinueDo: [ executed := true ].
	examTextView render.
	'input[type="checkbox"]' asJQuery click.
	'.continue' asJQuery click.
	
	self assert: executed.
! !

WidgetTest subclass: #HeaderTest
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!HeaderTest methodsFor: 'tests'!

test01ByDefaultItDoesNotStartTheExam
	| examStarted |
	examStarted := false.
	
	Header new
		whenStartExam: [ examStarted := true ];
		appendToJQuery: 'body' asJQuery.
	
	self assert: examStarted not
!

test02WhenStartExamIsClickedItStartsTheExam
	| examStarted |
	examStarted := false.
	
	Header new
		whenStartExam: [ examStarted := true ];
		appendToJQuery: 'body' asJQuery.
	
	self clickOn: 'Start exam'.
	
	self assert: examStarted
! !

WidgetTest subclass: #TextCardTest
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!TextCardTest methodsFor: 'tests'!

test01TheTitleIsShown
	TextCard newIn: 'body' title: 'a Title'.
	self assertPageContains: 'a Title'
! !

WidgetTest subclass: #TextFileDropTargetTest
	instanceVariableNames: 'droppedText ctx fileDropper'
	package: 'OndafSimulator-Tests'!

!TextFileDropTargetTest methodsFor: 'running'!

setUp
	super setUp.
	ctx := context.
	fileDropper := FileDropper new
! !

!TextFileDropTargetTest methodsFor: 'tests'!

test01ReadsDroppedFile
	self timeout: 100.
	
	TextFileDropTarget
		newIn: 'body'
		handler: [ :txt | ctx execute: [ self assert: txt equals: 'texto archivo'. self finished ] ].
		
	fileDropper dropText: 'texto archivo' on: '.text-file-target'
!

test02CanDropMoreThanOneFile
	| expected |
	expected := #('texto archivo 1' 'texto archivo 2').
	self timeout: 100.
	
	TextFileDropTarget
		newIn: 'body'
		handler: [ :txt | ctx execute: [ expected remove: txt ifAbsent: [ self fail ]. expected ifEmpty: [ self finished ] ] ].

	fileDropper dropText: 'texto archivo 1' and: 'texto archivo 2' on: '.text-file-target'
! !

