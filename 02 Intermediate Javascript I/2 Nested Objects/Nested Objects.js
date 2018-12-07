/*jshint esversion: 6 */

var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

//Write a function called displayCities that console.logs all the values in the citiesLivedIn array:
function displayCities() {
    instructorData.additionalData.moreDetails.citiesLivedIn.map(x => console.log(x));
}
displayCities();

//Write a function called displayHometownData that console.logs all the values inside of the hometown object
function displayHomeData() {
    Object.keys(instructorData.additionalData.moreDetails.hometown).forEach(x => {
        console.log(instructorData.additionalData.moreDetails.hometown[x]);
    });
}

displayHomeData();

// Let's write a function called addDetail that accepts two parameters, a key and a value and adds the key and value to the moreDetails object and returns the moreDetails object

function addDetail(key, value) {
    instructorData.additionalData.moreDetails[key] = value;
    console.log(instructorData.additionalData.moreDetails);
    return instructorData.additionalData.moreDetails; 
}

addDetail('toes', 10);

//Finally, let's write a function called removeDetail that removes a key in the moreDetails object and returns the moreDetails object (the new keys added above are not included in these examples). 

function removeDetail(key) {
    delete instructorData.additionalData.moreDetails[key];
    console.log(instructorData.additionalData.moreDetails);
    return instructorData.additionalData.moreDetails; 
}

removeDetail('toes');