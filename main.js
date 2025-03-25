// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];

    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];

    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
//Factory function to make objects. The objects with have 2 properties.
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
          console.log('Initial dna strand:', dna) // remove later. Shows initial dna base strand
      const randomSelectedBaseIndex = Math.floor(Math.random() * this.dna.length);
      let randomSelectedBase = this.dna.splice(randomSelectedBaseIndex, 1);
      let newArray = [...dna.slice(0, randomSelectedBaseIndex), 'test', ...dna.slice(randomSelectedBaseIndex)]; // this needs to be moved to after the if statement
      
      //These variables stores an array with a set basis minus one of the base types.
      //It will be used in the if statements to return a base not equal to the randomly selected base.
      const basisWithoutA = ['T', 'C', 'G'];
        const notABase = basisWithoutA[Math.floor(Math.random() * 3)]; //the variable to be returned in the control flow.

      const  basisWithoutT = ['A', 'C', 'G'];
        const notTBase = basisWithoutT[Math.floor(Math.random() * 3)]; //the variable to be returned in the control flow.

      const  basisWithoutC = ['A', 'T', 'G'];
        const notCBase = basisWithoutC[Math.floor(Math.random() * 3)]; //the variable to be returned in the control flow.

      const basisWithoutG = ['A', 'T', 'C'];
        const notGBase = basisWithoutG[Math.floor(Math.random() * 3)]; //the variable to be returned in the control flow.

      //if statement to return a random value that is not the same as the value removed.
      if(randomSelectedBase === 'A') {
        newArray = [...dna.slice(0, randomSelectedBaseIndex), notABase, ...dna.slice(randomSelectedBaseIndex)];
      } else if(randomSelectedBase === 'T') {
        newArray = [...dna.slice(0, randomSelectedBaseIndex), notTBase, ...dna.slice(randomSelectedBaseIndex)];
      } else if(randomSelectedBase === 'C') {
        newArray = [...dna.slice(0, randomSelectedBaseIndex), notCBase, ...dna.slice(randomSelectedBaseIndex)];
      } else {
        newArray = [...dna.slice(0, randomSelectedBaseIndex), notGBase, ...dna.slice(randomSelectedBaseIndex)];
      }
      console.log('Adapated DNA:',newArray)

          console.log('Index selected:' ,randomSelectedBaseIndex); // remove later
          //console.log(randomSelectedBase);
          //console.log(newArray);
      //this.dna.splice(randomSelectedBaseIndex, 1, 'man'); //The 'man' represents the element that will be inserted in the place where the base is removed from
          //console.log(dna) // remove later. SHows adapted dna strand

      
      

    }
  }
};
// pAequorFactory(1, mockUpStrand()).mutate();
console.log(pAequorFactory(1, mockUpStrand()).mutate())

  
  
  