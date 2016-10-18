Smalltalk createPackage: 'OndafSimulator'!
(Smalltalk packageAt: 'OndafSimulator') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Widget subclass: #Header
	instanceVariableNames: ''
	package: 'OndafSimulator'!

!Header methodsFor: 'as yet unclassified'!

renderOn: html
	html header
		with: [
			html a
				with: 'Start exam';
				tabindex: 0
		]
! !

Widget subclass: #MainScreen
	instanceVariableNames: ''
	package: 'OndafSimulator'!

Object subclass: #OndafSimulator
	instanceVariableNames: 'fileDropTarget'
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
	console log: aString.
	TextCard newIn: 'body > .text-file-target' title: aString
!

augmentPage
	"'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ]."
	
	Header new appendToJQuery: 'body' asJQuery.
	fileDropTarget := TextFileDropTarget
		newIn: 'body'
		handler: [ :txt | self addText: txt ]
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

