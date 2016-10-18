Smalltalk createPackage: 'OndafSimulator'!
(Smalltalk packageAt: 'OndafSimulator') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #ExamPrinter
	instanceVariableNames: 'textViews'
	package: 'OndafSimulator'!

!ExamPrinter methodsFor: 'as yet unclassified'!

currentTextView
	^ textViews last
!

initialize
	super initialize.
	textViews := OrderedCollection new.
!

printText: aString
	self currentTextView addText: aString
!

printTitle: aString
	textViews add: ExamTextView new.
	self currentTextView title: aString.
!

printWordToComplete: aString
	self currentTextView addWordToComplete: aString
!

renderContentOn: aSelector
	textViews do: [ :tv | tv appendToJQuery: aSelector asJQuery ]
! !

Widget subclass: #ExamTextView
	instanceVariableNames: 'title content'
	package: 'OndafSimulator'!

!ExamTextView methodsFor: 'as yet unclassified'!

addText: aString
	content add: [ :html | html span with: aString, ' ' ]
!

addWordToComplete: aString
	content add: [ :html |
		(html tag: 'nobr')
			with: [
				html span with: aString.
				html input
					type: 'text';
					at: 'size' put: 10
			];
			with: ' '
	]
!

initialize
	super initialize.
	content := OrderedCollection new.
!

renderOn: html
	| continueCheckbox continueButton |
	html div
		class: 'text';
		with: [
			html p
				class: 'title';
				with: title
		];
		with: [
			html p
				class: 'content';
				with: [	content do: [ :each | each value: html ] ]
		];
		with: [
			html div
				class: 'actions';
				with: [
					html label with: [
						continueCheckbox := html input
							type: 'checkbox';
							onChange: [
								(continueCheckbox is: ':checked')
									ifTrue: [ continueButton css: 'visibility' value: 'visible' ]
									ifFalse: [ continueButton css: 'visibility' value: 'hidden' ]
								];
							asJQuery.
						html img
							src: 'https://www.ondaf.de/ondaf/durchfuehrung/bilder/text.gif';
							width: 190
					].
					continueButton := html a
						href: '#';
						class: 'continue';
						with: [
							html img
								src: 'https://www.ondaf.de/ondaf/durchfuehrung/bilder/weiter.gif';
								width: 256
						];
						asJQuery
				]
		];
		with: [
			html div
				class: 'info';
				with: [
					html span class: 'text-number'; with: 'Text 1 of 4'.
					html span class: 'time'; with: 'Seconds remaining: 0'.
				]
		]
!

title: aString
	title := aString
! !

Widget subclass: #Header
	instanceVariableNames: 'startExamHandler'
	package: 'OndafSimulator'!

!Header methodsFor: 'as yet unclassified'!

initialize
	super initialize.
	startExamHandler := [].
!

renderOn: html
	html header
		with: [
			html a
				with: 'Start exam';
				tabindex: 0;
				onClick: startExamHandler
		]
!

whenStartExam: aBlock
	startExamHandler := aBlock
! !

Widget subclass: #MainScreen
	instanceVariableNames: ''
	package: 'OndafSimulator'!

Object subclass: #OndafSimulator
	instanceVariableNames: 'fileDropTarget examDesigner'
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

addText: aString
	examDesigner
		informProgressTo: [ :title | self addToList: title ].
	examDesigner considerText: aString.
!

addToList: aTitle
	TextCard newIn: '#content > .text-file-target' title: aTitle
!

augmentPage
	"'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ]."
	
	Header new
		whenStartExam: [ self startExam ];
		appendToJQuery: 'body' asJQuery.
	
	(HTMLCanvas onJQuery: 'body' asJQuery) section id: 'content'.
		
	fileDropTarget := TextFileDropTarget
		newIn: '#content'
		handler: [ :txt | self addText: txt ]
!

initialize
	super initialize.
	examDesigner := ExamDesigner new
!

startExam
	| theExam aPrinter |
	fileDropTarget hide.
	theExam := examDesigner designExam.
	aPrinter := ExamPrinter new.
	theExam copyOn: aPrinter.
	aPrinter renderContentOn: '#content'
! !

!OndafSimulator class methodsFor: 'starting'!

start
	self new augmentPage
! !

Widget subclass: #TextCard
	instanceVariableNames: 'card title'
	package: 'OndafSimulator'!

!TextCard methodsFor: 'as yet unclassified'!

initializeWith: aTitle
	title := aTitle
!

renderOn: html
	card := html div
		with: self title;
		class: 'text-card'
!

title
	^ title
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

!TextFileDropTarget methodsFor: 'as yet unclassified'!

handleDrop: files
	| reader |
	files select: [ :file | file type = 'text/plain' ]
		thenDo: [ :file |
			reader := FileReader new.
			reader addEventListener: 'loadend' do: [
				handler value: reader result
			].
			reader readAsText: file
		].
!

handler: aBlock
	handler := aBlock
!

hide
	dropArea hide
!

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
	].
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

!Array class methodsFor: '*OndafSimulator'!

ofNative: aCollection 
	"Answer an instance of me containing the same elements as aCollection.
	 aCollection must be a native collection, with .length and [] operator"
	| newArray |
	newArray := self new: aCollection length.
	1 to: aCollection length do: [:i | newArray at: i put: (aCollection at: i - 1)].
	^ newArray
! !

