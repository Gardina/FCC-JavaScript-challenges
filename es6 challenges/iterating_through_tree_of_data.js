//to iterate through tree of comments and get all the contents into single array

class Comment {
	constructor(content, children){
  	this.content = content
    this.children = children
  }

  *[Symbol.iterator]() {
  	yield this.content
    for (let child of this.children){
    	yield* child
    } //array helpers will not work
  }
}
const subchildren = [
	new Comment('oh god', []),
  new Comment('nice', [])
]

const children = [
	new Comment('good comment', subchildren),
  new Comment('lol', []),
  new Comment('meh', [])
]

const tree = new Comment('Great POst!', children)

const values = []
for (let value of tree){
	values.push(value)
}

values
