// This is a mock-up of a dog adoption website 
//Users can see the list of adopted dogs and can also "adopt" by clicking the "adopt" button

/* the dogsForAdptoption array is an array of objects with all the dogs available for adoption 
 * (note: they have a "adopted" property(boolean) set to false by default) */

// the dogsAdpoted array is an array of objects with all the dogs that were adopted (this array starts empty)
// both the arrays are updated when the user clicks the "adopt" button - moving the dogs from the dogsForAdoption array to the dogsAdopted array 


//using both array(to store multiple dogs' data) and objects(to store each dog's different data as a key-value pair)

let currentlyDisplayedDogs = dogsForAdoption;
let dogsAdopted = []
let pettedDogs = []

//testing some array's functionality 
// dogsAdopted.push(dogsForAdoption[0])
// dogsAdopted.push(dogsForAdoption[0].name) 
// console.log(dogsForAdoption[0])

//   dogsForAdoption[2].adopted = true 
//   for (let i = 0; i < dogsForAdoption.length; i++) {
//     if (dogsForAdoption[i].adopted === true) {
//       dogsAdopted.push(dogsForAdoption[i])
//       dogsForAdoption.splice(i, 1)
//     }
//   }
// console.log(dogsAdopted)
// console.log(dogsForAdoption) 


//default global filters: when displaying initially, everything is null 
let filters = {
  breed: null,
  gender: null,
  vaccinated: null,
  size: null,
  minAge: null,
  maxAge: null,
};


function displayUpForAdotionDogs () {
  document.querySelector(".up-for-adoption").style.backgroundColor = "#946b45";
  document.querySelector(".adopted-button").style.backgroundColor = "";
  
  document.querySelector(".page-heading-text").textContent = "Dogs for Adoption"
  
  document.querySelector(".noOfDogsCounts").textContent = dogsForAdoption.length;
  document.querySelector(".noOfAdoptedCounts").textContent = dogsAdopted.length;
  
  const dogCards = document.getElementById("dogCard") //dogCard from HTML
  dogCards.innerHTML = ""; 

  const displayedDogs = generateFilteredDogs();
  if (displayedDogs.length === 0) {
    dogCards.innerHTML = "<p>No dogs match your current filter criteria.</p>";
    document.getElementsByClassName("noOfDogsCounts").textContent = 0;
    return; 
  }

  //the dataset has age in month so when displaying the age, trunc only returns the integer part after the division 
  displayedDogs.forEach(cuteDog => { 
    const dogCard = document.createElement("div") //creating a div with class 'dogCard'
    dogCard.classList.add("dogCard")
    dogCard.innerHTML = `
      <img src="${cuteDog.image}" alt="${cuteDog.name}">
      <h2>${cuteDog.name} 
        <span class="paw-icon" onclick="togglePetted(${cuteDog.id})"> 
          <img src="${cuteDog.petted ? 'assets/icons/petted.png' : 'assets/icons/not-petted.png'}" alt="Paw Icon">
        </span>
      </h2>
      <p>Breed: ${cuteDog.breed}</p>
      <p>Age: ${Math.trunc(cuteDog.age / 12) >= 1 ? Math.trunc(cuteDog.age/12) + " years" : cuteDog.age + " months"}</p>
      <p>Gender: ${cuteDog.gender}</p>
      <p>Size: ${cuteDog.size}</p>
      <p>Vaccinated: ${cuteDog.vaccinated == 0 ? 'Yes' : 'No'} </p>
      <p>Looking for a home since: ${cuteDog.daysInShelter} days</p>
      <button class="adopt-${cuteDog.name}" onclick="adoptDog(${cuteDog.id})">Adopt</button>
    `
    dogCards.appendChild(dogCard) //add the dogCard to the dogCards div
  })
}

function adoptDog(adoptedDogId) 
{ 
  // console.log(dogId);
  let adoptedDog;  
  dogsForAdoption.forEach((cuteDog) => { 
    if(cuteDog.id === adoptedDogId) {
      const indexOfAdoptedDog = dogsForAdoption.indexOf(cuteDog); 
      dogsForAdoption.splice(indexOfAdoptedDog, 1);
      adoptedDog = cuteDog; 
    }
  })
  dogsAdopted.push(adoptedDog);
  console.log(dogsAdopted);
  console.log(dogsForAdoption);
  
  const alertMsg = `${adoptedDog.name} found ${adoptedDog.gender === "Female" ? "her" : "his"} furever home.`
  alert(alertMsg);

  displayUpForAdotionDogs();
}

function displayAdoptedDogs() {
  document.querySelector(".adopted-button").style.backgroundColor = "#946b45";
  document.querySelector(".up-for-adoption").style.backgroundColor = "";
  
  
  document.querySelector(".page-heading-text").textContent = "Adopted Furry Friends"
  document.querySelector(".noOfAdoptedCounts").textContent = dogsAdopted.length;
  
  console.log("ADOPTED button pressed from HTML")
  const dogCards = document.getElementById("dogCard")
  dogCards.innerHTML = ""; 
  console.log(dogsAdopted);

  //displaying no adopted if adopted = 0
  if(dogsAdopted.length === 0) { 
    document.getElementById("dogCard").innerHTML = 
    `<p>No dogs have been adopted yet</p>`
  }
  
  dogsAdopted.forEach((adoptedDog) => { 
    const adoptedDogCard = document.createElement("div")
    adoptedDogCard.classList.add("dogCard")

    adoptedDogCard.innerHTML = `
      <img src="${adoptedDog.image}" alt="${adoptedDog.name}">
      <h2>${adoptedDog.name}</h2>
      <p>Breed: ${adoptedDog.breed}</p>
      <p>Age: ${adoptedDog.age}</p>
      <p>Gender: ${adoptedDog.gender}</p>
      <p>Size: ${adoptedDog.size}</p>
    `

    dogCards.appendChild(adoptedDogCard);
  })
}

//applying the filters and generating the filtered list 
function applyFilters() {
  filters.breed = document.getElementById('filterBreed').value;
  
  const vaccinatedValue = document.getElementById('filterVaccinated').value;
  filters.vaccinated = vaccinatedValue !== "" ? parseInt(vaccinatedValue) : null; 
  
  filters.gender = document.getElementById('filterGender').value; 
  
  filters.size = document.getElementById('filterSize').value;

  const minAgeFromHTML = document.querySelector('.minAge').value;
  const maxAgeFromHTML = document.querySelector('.maxAge').value;
  if(isNaN(minAgeFromHTML) || isNaN(maxAgeFromHTML) || minAgeFromHTML < 0 || maxAgeFromHTML > 14 || minAgeFromHTML > 14 || maxAgeFromHTML < 0 || minAgeFromHTML > maxAgeFromHTML) {
    alert("Input Error in Age Range. Make sure the minimum age is at least 0 and the maximum age is greater than minimum age and at most 14.");
    return;
  }

  filters.minAge = minAgeFromHTML ? minAgeFromHTML : null; //null if no minAgefromHTML is found
  filters.maxAge = maxAgeFromHTML ? maxAgeFromHTML : null; //null if no maxAgefromHTML is found
  
  console.log("Applying filters:", filters); //for debugging purposes
  
  displayUpForAdotionDogs(); // "Refresh" the display with new filters
}

function generateFilteredDogs() { 
  let filteredDogs = [...dogsForAdoption]; //copy of the original list using spread operator
  if(filters.breed) { 
    filteredDogs = filteredDogs.filter((dog) => dog.breed === filters.breed);
  }

  if (filters.vaccinated !== null) {
    filteredDogs = filteredDogs.filter((dog) => dog.vaccinated === filters.vaccinated);
  }

  if (filters.gender) {
    filteredDogs = filteredDogs.filter((dog) => dog.gender === filters.gender);
  }

  if(filters.size) {
    filteredDogs = filteredDogs.filter((dog) => dog.size === filters.size);
  }

  if ( filters.minAge && filters.maxAge) { 
    
    if ( (filters.minAge) === 0 && (filters.maxAge) === 0 ) {
      //the dataset has age in month so we don't need to divide age<12 by 12 to display month-old dogs
      filteredDogs = filteredDogs.filter(dog => dog.age < 12);
    }
    else {
    filteredDogs = filteredDogs.filter(
      (dog) => {
        let ageInYear = Math.trunc(dog.age / 12); 
        return ( (ageInYear >= filters.minAge) && (ageInYear <= filters.maxAge) );
      }
    )}
  }
  return filteredDogs; 
}

function resetFilter() { 
  document.getElementById('filterBreed').value = "";
  document.getElementById('filterGender').value = "";
  document.getElementById('filterVaccinated').value = "";
  document.getElementById('filterSize').value = "";
  
  document.querySelector('.minAge').value = "";
  document.querySelector('.maxAge').value = "";

  
  filters = {
    breed: null,
    gender: null,
    vaccinated: null,
    size: null,
    minAge: null,
    maxAge: null,
  };

  displayUpForAdotionDogs();
}

function togglePetted(petID) { 
  let dog = dogsForAdoption.find((dog) => dog.id === petID);
  if (!dog) { 
    dog = dogsAdopted.find((dog) => dog.id === petID);
  }

  dog.petted = !(dog.petted); 
  if(dog.petted) { 
    if(!pettedDogs.some((dog) => dog.id === petID)) {  //some checks if at least one element matches the given condition
      pettedDogs.push(dog);
    } 
  } else {  
    pettedDogs = pettedDogs.filter((dog) => dog.id !== petID); //"unpet the dog" :( filters the dogID that doesn't match the unpetted dog
  }

  console.log(pettedDogs);
  displayUpForAdotionDogs();

}

//sorting and filter using .sort() and comparefn 
function sortByNameAsc() { 
  dogsForAdoption.sort(
    function(a,b) { 
    return a.name.localeCompare(b.name);
  })
  displayUpForAdotionDogs();
}

function sortByNameDesc() { 
  dogsForAdoption.sort(
    function(a,b) { 
    return b.name.localeCompare(a.name);
  })
  displayUpForAdotionDogs();
}

function sortByYoungest() { 
  dogsForAdoption.sort(
    function(a,b) { 
      return a.age - b.age;
    }
  )
  displayUpForAdotionDogs();
}

function sortByOldest() { 
  dogsForAdoption.sort(
    function(a,b) {
      return b.age-a.age;
    }
  )
  displayUpForAdotionDogs();
}

function sortByDaysInShelter() { 
  dogsForAdoption.sort(
    function(a,b) { 
      return b.daysInShelter - a.daysInShelter;
    }
  )
  displayUpForAdotionDogs();
}

function toggleInfoPopup() { 
  let popUpElement = document.getElementById('info-popup');
  if(popUpElement.style.display == "block") { 
    popUpElement.style.display == "none"; 
  } else { 
    popUpElement.style.display == "none";
  }
}

function scrollToTop() { 
  window.scrollTo({
    top:0,
    behavior: "smooth",
  })
}

//DOMContentLoaded means the webpage is loaded and .addEventListener will call displayDogs function when the page is loaded is loaded
document.addEventListener("DOMContentLoaded", displayUpForAdotionDogs);

