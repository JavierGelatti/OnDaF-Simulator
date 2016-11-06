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

!WidgetTest methodsFor: 'gui testing'!

assertPageContains: aString
	self assert: ((':contains(', aString, ')') asJQuery length) > 0
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
	instanceVariableNames: 'droppedText ctx'
	package: 'OndafSimulator-Tests'!

!TextFileDropTargetTest methodsFor: 'actions'!

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
! !

!TextFileDropTargetTest methodsFor: 'running'!

setUp
	super setUp.
	ctx := context
! !

!TextFileDropTargetTest methodsFor: 'tests'!

test01ReadsDroppedFile
	| file event |
	file := Blob newValue: #('texto archivo') value: #{'type' -> 'text/plain'}.
	event := self dropFileEventWith: file.
	self timeout: 100.
	
	TextFileDropTarget
		newIn: 'body'
		handler: [ :txt | ctx execute: [ self assert: txt equals: 'texto archivo'. self finished ] ].
	
	'.text-file-target' asJQuery trigger: event
!

test02CanDropMoreThanOneFile
	| file1 file2 event expected |
	file1 := Blob newValue: #('texto archivo 1') value: #{'type' -> 'text/plain'}.
	file2 := Blob newValue: #('texto archivo 2') value: #{'type' -> 'text/plain'}.
	expected := #('texto archivo 1' 'texto archivo 2').
	event := self dropFileEventWith: file1 and: file2.
	self timeout: 100.
	
	TextFileDropTarget
		newIn: 'body'
		handler: [ :txt | ctx execute: [ expected remove: txt ifAbsent: [ self fail ]. expected ifEmpty: [ self finished ] ] ].
	
	'.text-file-target' asJQuery trigger: event
! !

!TextFileDropTargetTest methodsFor: 'util'!

newObject
	^ JSON parse: '{}'
! !

