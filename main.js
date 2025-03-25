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
  // creates an array of numbers ordered from 1 upwards. Loops till the argument is met
  const specimenNumIncrement = (num) => {
    let specimenNum = Math.floor(Math.random() * num);

    // for (let n = 1; n <= num; n++) {
    //   specimenNum.push(n)
    // }
    return specimenNum
  }
  console.log(specimenNumIncrement(3))

//Factory function to make objects. The objects with have 2 properties.
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    //Step 3: adding a mutate() method that returns an adapted array of dna bases.
    mutate() {
      const arrayToWorkWith = this.dna
      const randomSelectedBaseIndex = Math.floor(Math.random() * arrayToWorkWith.length); //returns the index of a randomly selected value in the 'dna' array.
      let randomSelectedBase = arrayToWorkWith.splice(randomSelectedBaseIndex, 1); //uses the index from above to select that specific value and stores it in this const iable.
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
      
      // console.log('Original array of DNA:', arrayToWorkWith);
      // console.log('Index selected:' ,randomSelectedBaseIndex); 
      // console.log('The selection:',randomSelectedBase); 
      // console.log('Adapated DNA1:',newArray);
      
      // return newArray; // this was my return
      this.dna = newArray; return this.dna; //added from code review. Reasoning: The `mutate` method should modify the `dna` array in place rather than returning a new array. This will ensure that the object's `dna` property reflects the mutation.
    },
    //Step  4: a method to compare the dna of the intial object and the mutated method.
    compareDNA(organismObject) {
           
      const  currentDNA  = this.dna;
      // const  mutatedDNA = this.mutate(); // removed from my code
      const otherDNA = organismObject.dna; // added from code review. Reasoning: The `compareDNA` method should compare the current object's `dna` with another `pAequor` object's `dna`, not with its own mutated version. Adjust the logic to compare with the passed `organismObject`.

      const  matchingDNA = otherDNA.filter(function(obj) { 
        return currentDNA.indexOf(obj) !== -1; 
        });
      
      const percentageMatch = Math.floor((matchingDNA.length/15) * 100);

      console.log('Specimen one and specimen 2 have ' + percentageMatch +'% DNA in common.');
      //NOTE = this method logs undefined. How do you stop that?
    },
    // step 5: method to check survival potential:
    willLikelySurvive() {
      //Variables:
      const currentDNA = this.dna; //imports the .dna from the main object into this method for ease of use.
      const containsC = currentDNA.filter((letter) => letter === 'C'); // loops through the currentDNA and returns only the elements = 'C'
      const containsG = currentDNA.filter((letter) => letter === 'G'); // loops through the currentDNA and returns only the elements = 'G'
      

      const percentageCbases = Math.floor(containsC.length / currentDNA.length * 100); // Takes the array with 'C' and compares it's length to the lnegth of the currentDNA to work out percentage.
      const percentageGbases = Math.floor(containsG.length / currentDNA.length * 100); // Takes the array with 'G' and compares it's length to the lnegth of the currentDNA to work out percentage.
      

      if (percentageCbases >= 60 || percentageGbases >= 60) {
        return true
      } else {
        return false
      }
    }
  }
};


//30 instances of the call stored in an array:
const organismsForLaterUse = [];

const thirtyCalls = num => {
  for(let i = 0; i <= num; i++) {
    organismsForLaterUse.push(pAequorFactory(specimenNumIncrement(30), mockUpStrand()))
  }
}
console.log(thirtyCalls(30)) //Insert 30 as the argument here
console.log(organismsForLaterUse)

  
  
  