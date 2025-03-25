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
    //Step 3: adding a mutate() method that returns an adapted array of dna bases.
    mutate() {
      const randomSelectedBaseIndex = Math.floor(Math.random() * this.dna.length); //returns the index of a randomly selected value in the 'dna' array.
      let randomSelectedBase = this.dna.splice(randomSelectedBaseIndex, 1); //uses the index from above to select that specific value and stores it in this const iable.
      let newArray;  // This const iable will be the returned array (array assigned later). It will have the values form the 'dna' but with one value randomly selected and randomly changed to not be equal to the randomly selected number.
      
      //These const iables stores an array with a set basis(values), minus one of the base types.
      //It will be used in the if statements to return a base not equal to the randomly selected base value.
      const basisWithoutA = ['T', 'C', 'G'];
        const notABase = basisWithoutA[Math.floor(Math.random() * 3)]; //the const iable to be returned in the control flow.

      const  basisWithoutT = ['A', 'C', 'G'];
        const notTBase = basisWithoutT[Math.floor(Math.random() * 3)]; //the const iable to be returned in the control flow.

      const  basisWithoutC = ['A', 'T', 'G'];
        const notCBase = basisWithoutC[Math.floor(Math.random() * 3)]; //the const iable to be returned in the control flow.

      const basisWithoutG = ['A', 'T', 'C'];
        const notGBase = basisWithoutG[Math.floor(Math.random() * 3)]; //the const iable to be returned in the control flow.

      //if statement to return a random value that is not the same as the value removed.
      if(randomSelectedBase === 'A') {
        newArray = [...dna.slice(0, randomSelectedBaseIndex), notABase, ...dna.slice(randomSelectedBaseIndex)];//the line takes the initial array and adds a new values to the index where the randomSelectedBase was removed. It then continues to add the remaining elements. This new array is stored in a different const iable.
      } else if(randomSelectedBase === 'T') {
        newArray = [...dna.slice(0, randomSelectedBaseIndex), notTBase, ...dna.slice(randomSelectedBaseIndex)];
      } else if(randomSelectedBase === 'C') {
        newArray = [...dna.slice(0, randomSelectedBaseIndex), notCBase, ...dna.slice(randomSelectedBaseIndex)];
      } else {
        newArray = [...dna.slice(0, randomSelectedBaseIndex), notGBase, ...dna.slice(randomSelectedBaseIndex)];
      }
      /* My testing area for mutate() method: */
      //console.log('Original array of DNA:', dna);
      //console.log('Index selected:' ,randomSelectedBaseIndex); 
      //console.log('The selection:',randomSelectedBase); 
      //console.log('Adapated DNA:',newArray)
      
      return newArray;
    },
    //Step  4: a method to compare the dna of the intial object and the mutated method.
    compareDNA(organismObject) {
      //console.log('Original DNA:', this.dna); // the this keyword is needed to access
      //console.log('Mutated DNA:', this.mutate());
      
      const  currentDNA  = this.dna;
      const  mutatedDNA = this.mutate();
      const  matchingDNA = mutatedDNA.filter(function(obj) { 
        return currentDNA.indexOf(obj) !== -1; 
        });
      
      const percentageMatch = Math.floor((matchingDNA.length/15) * 100);


        //console.log('Matched DNA:' ,matchingDNA)
        console.log('Specimen one and specimen 2 have ' + percentageMatch +'% DNA in common.');
    },
    // step 5: method to check survival potential:
    willLikelySurvive() {
//continue from here - loop through array and find matches for C or G
    }
  }
};

//function calls:
// pAequorFactory(1, mockUpStrand()).compareDNA();
console.log(pAequorFactory(1, mockUpStrand()).compareDNA())

  
  
  