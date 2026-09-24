// ======== Type Itersection ============

interface Robot {
  material:string,
  fuel:string
}

interface Human{
  name:string,
  age:number
}


type Cyborg = Robot & Human

const cyborg: Cyborg={
  name:'EpiCoder',
  age:7,
  fuel:'Gas',
  material:'ard'
}