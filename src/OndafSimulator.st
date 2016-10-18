Smalltalk createPackage: 'OndafSimulator'!
(Smalltalk packageAt: 'OndafSimulator') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
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

