Smalltalk createPackage: 'PharoCompat'!
!Array methodsFor: '*PharoCompat'!

flatCollect: aBlock 
	"Evaluate aBlock for each of the receiver's elements and answer the
	list of all resulting values flatten one level. Assumes that aBlock returns some kind
	of collection for each element. Equivalent to the lisp's mapcan"
	
	| stream |
	self isEmpty ifTrue: [ ^ self copy ].
	stream := (Array new: 0) writeStream.
	self do: [ :each | stream nextPutAll: (aBlock value: each) ].
	^ stream contents
!

select: selectBlock thenDo: doBlock
    "Utility method to improve readability.
	Do not create the intermediate collection."

    self do: [: each |
        ( selectBlock value: each ) 
			ifTrue: [ doBlock value: each ]
    ].
! !

!Array class methodsFor: '*PharoCompat'!

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
		^ (self new: 3)
		at: 1 put: anObject;
		at: 2 put: anObject2;
		at: 3 put: anObject3;
		at: 4 put: anObject4;
		yourself
! !

