Smalltalk createPackage: 'OndafSimulator-Tests'!
TestCase subclass: #OndafSimulatorTest
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

Object subclass: #WidgetPreviews
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!WidgetPreviews methodsFor: 'widgets'!

examTextView
	'body' asJQuery empty.
	
	(ExamTextView newIn: 'body' title: 'a Title' text: 2 of: 3)
		addText: 'Hello ';
		addWordToComplete: 'Wor';
		showSeconds: 99;
		render.
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

!WidgetTest methodsFor: 'running'!

clickOn: aString
	(self elementWithText: 'Start exam') click.
!

elementWithText: aString
	^ (':contains(', aString, ')') asJQuery
		filter: [ :i :elem | elem children length == 0 ]
!

setUp
	'body' asJQuery empty
! !

WidgetTest subclass: #HeaderTest
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!HeaderTest methodsFor: 'tests'!

test01
	| examStarted |
	examStarted := false.
	
	Header new
		whenStartExam: [ examStarted := true ];
		appendToJQuery: 'body' asJQuery.
	
	self assert: examStarted not
!

test02
	| examStarted |
	examStarted := false.
	
	Header new
		whenStartExam: [ examStarted := true ];
		appendToJQuery: 'body' asJQuery.
	
	self clickOn: 'Start exam'.
	
	self assert: examStarted
! !

