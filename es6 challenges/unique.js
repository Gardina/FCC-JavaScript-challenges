//remove duplicate values from the array without for loops, using reduce and find methods

const numbers = [1,2,3,4,4,5,6,5]

function unique(array) {
return array.reduce((acc, item)=>{
!acc.find(num=>item===num)?acc.push(item):''
return acc
},[])
}

unique(numbers) // --> [1,2,3,4,5,6]
