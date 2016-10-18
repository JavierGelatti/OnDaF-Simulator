Smalltalk createPackage: 'PharoCompat'!
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

