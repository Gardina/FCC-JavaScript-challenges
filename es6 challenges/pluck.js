function pluck(array, property) {
  let arr = array.map((item)=>{
  	return item[property]
  })
  return arr
}

const paints = [

    {color: 'red'},

    {color: 'blue'},

    {color: 'yellow'}

];

pluck(paints, "color") // returns ['red', 'blue', 'yellow']
