// to iterate through nested object with iteraror delegation

const testingTeam = {
	lead: 'Amanda',
  tester: 'Bill'
}

const engineeringTeam = {
	testingTeam,
  size: 3,
  department: 'engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
}

function* TeamIterator(team){
	yield team.lead
  yield team.manager
  yield team.engineer
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam)
  yield* testingTeamGenerator //delegation 
}

function* TestingTeamIterator(team){
	yield team.lead
  yield team.tester
}

const names = []
for (let name of TeamIterator(engineeringTeam)){
	names.push(name)
}

name

/// same with [Symbol.iterator]

const testingTeam = {
	lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* (){
  	yield this.lead,
    yield this.tester
  }
}

const engineeringTeam = {
	testingTeam,
  size: 3,
  department: 'engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* (){  // arrays have symbol.iterator by default
  	yield this.lead
    yield this.manager
  	yield this.engineer
    yield* this.testingTeam
  }
}


const names = []
for (let name of engineeringTeam){
	names.push(name)
}

names
