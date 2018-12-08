/*jshint esversion: 6 */

//Given the following nested object:

var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          console.log(this);
          return this;

      }
    }
  };

//  Using a for loop, console.log all of the numbers in the primeNumbers array.
function prim() {
        nestedData.innerData.numberData.primeNumbers.map((x) => {
        console.log(x);
    });
}
//prim();

//  Using a for loop, console.log all of the even Fibonnaci numbers.

function fib() {
    nestedData.innerData.numberData.fibonnaci.map((x) => {
    console.log(x);
});
}
//fib();

//  Console.log the value "second" inside the order array.
//console.log(nestedData.innerData.order[1]);

//  Invoke the addSnack function and add the snack "chocolate"
//nestedData.innerData.addSnack('chocolate');

//  Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?
//here it refers to the same "location" from where the function key which is inside 'innerData'

var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  };



//Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.
function addSpeaker() {
    nestedObject.speakers.push({name:"Joe"});
}
//addSpeaker();

//Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.
function addLanguage() {
    nestedObject.data.languages.italian = {hello : 'ciao'};
}
//addLanguage();

//Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.
function addCountry() {
    nestedObject.data.continents.europe.countries.spain = {
        capital : 'Madrid',
        population : 46570000
    };
}
addCountry();
