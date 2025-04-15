let dogsForAdoption = dogs;
let dogsAdopted = [] //list of dogs that are adopted: initially empty
let pettedDogs = [] //list of dogs that are virtually petted: initially empty

let upForAdoptionDogsCount = dogsForAdoption.length; //number of dogs available for adoption
let adoptedDogsCount = dogsAdopted.length; //number of adopted dogs: initially 0.



//default filters to display all the dogs from the list initially
let filters = {
  breed: null,
  gender: null,
  vaccinated: null,
  size: null,
  minAge: null, 
  maxAge: null,
};

//displaying logic and variables
let itemsPerPage = 100; //#NOTE: because the number of dataset is less than 100 as of now so to display all elements, we can do 100 for now

function setItemsPerPage(value) {
  if (value !== "all") {
    itemsPerPage = parseInt(value);
  } else {
    itemsPerPage = 100; 
    randomOrderDisplay();
  }
  displayUpForAdotionDogs();
}

//"main-page": with all the dogs available for adoption listed
function displayUpForAdotionDogs () {
  document.querySelector(".up-for-adoption").style.backgroundColor = "#946b45";
  document.querySelector(".adopted-button").style.backgroundColor = "";
  document.querySelector(".side-nav").classList.remove("hidden");
  document.querySelector(".nav-petted-icon img").src = "assets/icons/not-petted.png";
  
  document.querySelector(".page-heading-text").textContent = "Dogs for Adoption"
  
  document.querySelector(".noOfDogsCounts").textContent = upForAdoptionDogsCount;
  document.querySelector(".noOfAdoptedCounts").textContent = adoptedDogsCount;
  
  const dogCards = document.getElementById("dogCard") //dogCard from HTML
  dogCards.innerHTML = ""; 

  const dogsForAdoption = generateFilteredDogs();

  //to show only certain number of dogs per page
  const visibleDogs = dogsForAdoption.splice(0, itemsPerPage);

  if (visibleDogs.length === 0) {
    dogCards.innerHTML = "<p>No dogs match your current filter criteria.</p>";
    document.getElementsByClassName("noOfDogsCounts").textContent = 0;
    return; 
  }

  //the dataset has age in month so when displaying the age, trunc only returns the integer part after the division 
  visibleDogs.forEach(cuteDog => { 
    const dogCard = document.createElement("div") //creating a div with class 'dogCard'
    dogCard.classList.add("dogCard")
    dogCard.innerHTML = `
      <img src="${cuteDog.image}" alt="${cuteDog.name}">
      <h2>${cuteDog.name} 
        <span class="paw-icon" onclick="togglePetted(${cuteDog.id})"> 
          <img src="${cuteDog.petted ? 'assets/icons/petted.png' : 'assets/icons/not-petted.png'}" alt="Paw Icon">
        </span>
      </h2>
      <p><strong>Breed</strong>: ${cuteDog.breed}</p>
      <p><strong>Age</strong>: ${Math.trunc(cuteDog.age / 12) >= 1 ? Math.trunc(cuteDog.age/12) + " years" : cuteDog.age + " months"}</p>
      <p><strong>Gender:</strong> ${cuteDog.gender}</p>
      <p><strong>Size</strong>: ${cuteDog.size}</p>
      <p><strong>Vaccinated</strong>: ${cuteDog.vaccinated == 0 ? 'Yes' : 'No'} </p>
      <p><strong>Looking for a home since</strong>: ${cuteDog.daysInShelter} days</p>
      <button class="adopt-${cuteDog.name}" onclick="adoptDog(${cuteDog.id})">Adopt</button>
    `
    dogCards.appendChild(dogCard) //add the dogCard to the dogCards div
  })
}

//adopting a dog and updating both the upForAdoption and adoptedDogs list
function adoptDog(adoptedDogId) 
{ 
  // console.log(dogId);
  let adoptedDog;  
  dogsForAdoption.forEach((cuteDog) => { 
    if(cuteDog.id === adoptedDogId) {
      cuteDog.isAdopted = true;
      adoptedDog = cuteDog; 
      const indexOfAdoptedDog = dogsForAdoption.indexOf(cuteDog); 
      dogsForAdoption.splice(indexOfAdoptedDog, 1); //splice removes the adopted dog from the dogsForAdopton list. 1 incidiates remove only one element (itself) from the index
    }
  })
  //update the dogsAdopted list
  dogsAdopted.push(adoptedDog);
  
  const alertMsg = `${adoptedDog.name} found ${adoptedDog.gender === "Female" ? "her" : "his"} furever home.`
  alert(alertMsg);
  upForAdoptionDogsCount--; 
  adoptedDogsCount++;
  displayUpForAdotionDogs();
}

////"second-page": with all the dogs adopted from the "main-page"
function displayAdoptedDogs() {
  document.querySelector(".adopted-button").style.backgroundColor = "#946b45";
  document.querySelector(".up-for-adoption").style.backgroundColor = "";
  document.querySelector(".side-nav").classList.add("hidden"); //not showing sort and filter for adopted
  document.querySelector(".nav-petted-icon img").src = "assets/icons/not-petted.png";
  
  document.querySelector(".page-heading-text").textContent = "Adopted Furry Friends"
  document.querySelector(".noOfAdoptedCounts").textContent = dogsAdopted.length;
  
  // console.log("ADOPTED button pressed from HTML") //debug purpose: WORKS 
  const dogCards = document.getElementById("dogCard")
  dogCards.innerHTML = ""; 
  console.log(dogsAdopted);

  //displaying no dogs adopted yet, if adoptedList length = 0
  if(dogsAdopted.length === 0) { 
    document.getElementById("dogCard").innerHTML = 
    `<p>No dogs have been adopted yet</p>`
  }
  
  //else dogs adopted, then display all the cards 
  dogsAdopted.forEach((adoptedDog) => { 
    const adoptedDogCard = document.createElement("div")
    adoptedDogCard.classList.add("dogCard")

    adoptedDogCard.innerHTML = `
      <img src="${adoptedDog.image}" alt="${adoptedDog.name}">
      <h2>${adoptedDog.name}</h2>
      <p>Breed: ${adoptedDog.breed}</p>
      <p>Age: ${Math.trunc(adoptedDog.age / 12) >= 1 ? Math.trunc(adoptedDog.age/12) + " years" : adoptedDog.age + " months"}</p>
      <p>Gender: ${adoptedDog.gender}</p>
      <p>Size: ${adoptedDog.size}</p>
    `
    dogCards.appendChild(adoptedDogCard);
  })
}

//"petted-page": displays petted(kinda favorited) and their adoption status. 
function displayPettedDogs() {
  document.querySelector(".adopted-button").style.backgroundColor = "";
  document.querySelector(".up-for-adoption").style.backgroundColor = "";
  document.querySelector(".nav-petted-icon img").src = "assets/icons/petted.png";
  document.querySelector(".side-nav").classList.add("hidden"); //not showing sort and filter for petted page
  
  document.querySelector(".page-heading-text").textContent = "Pet-ed dogs"
  
  console.log("PAWS icons button pressed from HTML")
  const dogCards = document.getElementById("dogCard")
  dogCards.innerHTML = ""; 
  console.log(pettedDogs);

  //displaying no dogs petted if pet = 0
  if(pettedDogs.length === 0) { 
    document.getElementById("dogCard").innerHTML = 
    `<p>You haven't pet any dogs today. Click the paws icon on the dog's card to pet them. :D </p>`
  }
  
  pettedDogs.forEach((pettedDog) => { 

    const pettedDogCard = document.createElement("div")
    pettedDogCard.classList.add("dogCard")
    pettedDogCard.innerHTML = `
      <img src="${pettedDog.image}" alt="${pettedDog.name}">
      <h2>${pettedDog.name} 
        <span class="paw-icon" onclick="togglePetted(${pettedDog.id})"> 
          <img src="${pettedDog.petted ? 'assets/icons/petted.png' : 'assets/icons/not-petted.png'}" alt="Paw Icon">
        </span>
      </h2>
      <p>Breed: ${pettedDog.breed}</p>
      <p>Age: ${Math.trunc(pettedDog.age / 12) >= 1 ? Math.trunc(pettedDog.age/12) + " years" : pettedDog.age + " months"}</p>
      <p>Gender: ${pettedDog.gender}</p>
      <p>Size: ${pettedDog.size}</p>
      ${!pettedDog.isAdopted ? `<button class="adopt-${pettedDog.name}" onclick="adoptDog(${pettedDog.id})">Adopt</button>` : `<p>Found a furever home already <3</p>`}
    `
    dogCards.appendChild(pettedDogCard);
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
    alert("Input Error in Age Range. Make sure the minimum age is at least 0 and the maximum age(at most 14) is greater than minimum age.");
    return;
  }

  filters.minAge = minAgeFromHTML ? minAgeFromHTML : null; //null if no minAgefromHTML is found
  filters.maxAge = maxAgeFromHTML ? maxAgeFromHTML : null; //null if no maxAgefromHTML is found
  
  console.log("Applying filters:", filters); //for debugging purposes
  
  displayUpForAdotionDogs(); // "Refresh" the display with new filters
}

function generateFilteredDogs() { 
  let filteredDogs = [...dogsForAdoption]; //making a copy of the dogsListPassed
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

//when resetButton clicked, the buttons bg will also reset to default
function sortButtonsColorReset() { 
  document.querySelector('.aToZ').style.backgroundColor = "";
  document.querySelector('.zToA').style.backgroundColor = "";
  document.querySelector('.youngestSort').style.backgroundColor = "";
  document.querySelector('.oldestSort').style.backgroundColor = "";
  document.querySelector('.daysShelterSort').style.backgroundColor = "";
}

function resetFilter() { 
  document.getElementById('filterBreed').value = "";
  document.getElementById('filterGender').value = "";
  document.getElementById('filterVaccinated').value = "";
  document.getElementById('filterSize').value = "";
  document.querySelector('.minAge').value = "";
  document.querySelector('.maxAge').value = "";

  document.getElementById("itemsPerPage").value = "all";
  itemsPerPage = 100;
  

  sortButtonsColorReset();

  filters = {
    breed: null,
    gender: null,
    vaccinated: null,
    size: null,
    minAge: null,
    maxAge: null,
  };

  randomOrderDisplay();
  displayUpForAdotionDogs();
}

function togglePetted(petID) { 
  let dog = dogsForAdoption.find((dog) => dog.id === petID);
  if (!dog) { 
    dog = dogsAdopted.find((dog) => dog.id === petID);
  }

  dog.petted = !(dog.petted); 
  if(dog.petted) { 
    if(!pettedDogs.some((dog) => dog.id === petID)) {  //.some() checks if at least one element matches the given condition
      pettedDogs.push(dog);
      alert(`You petted ${dog.name} <3.`)
    } 
  } else {  
    pettedDogs = pettedDogs.filter((dog) => dog.id !== petID); //"unpet the dog" :( filters the dogID that doesn't match the unpetted dog
    alert(`You un-petted ${dog.name}.`)
  }

  // console.log(pettedDogs); //for testing purpose: #DISPLAYS CORRECT INFORMATION
  displayUpForAdotionDogs(); 

}

//sorting and filter using .sort() and comparefn 
function sortByNameAsc() { 
  sortButtonsColorReset();
  document.querySelector('.aToZ').style.backgroundColor = "#946b45";
  dogsForAdoption.sort(
    function(a,b) { 
    return a.name.localeCompare(b.name);
  })
  displayUpForAdotionDogs();
}

function sortByNameDesc() { 
  sortButtonsColorReset();
  document.querySelector('.zToA').style.backgroundColor = "#946b45";
  dogsForAdoption.sort(
    function(a,b) { 
    return b.name.localeCompare(a.name);
  })
  displayUpForAdotionDogs();
}

function sortByYoungest() { 
  sortButtonsColorReset();
  document.querySelector('.youngestSort').style.backgroundColor = "#946b45";
  dogsForAdoption.sort(
    function(a,b) { 
      return a.age - b.age;
    }
  )
  displayUpForAdotionDogs();
}

function sortByOldest() { 
  sortButtonsColorReset();
  document.querySelector('.oldestSort').style.backgroundColor = "#946b45";
  dogsForAdoption.sort(
    function(a,b) {
      return b.age-a.age;
    }
  )
  displayUpForAdotionDogs();
}

function sortByDaysInShelter() {
  sortButtonsColorReset();
  document.querySelector('.daysShelterSort').style.backgroundColor = "#946b45"; 
  dogsForAdoption.sort(
    function(a,b) { 
      return b.daysInShelter - a.daysInShelter;
    }
  )
  displayUpForAdotionDogs();
}

function displayWoof() { 
  alert("This is just a mock-up adoption website. All images are AI-generated using OpenAI's 4o image genearting model, and the dog details are inspired from a Kaggle's dataset.");
}
// //DOMContentLoaded means the webpage is loaded and .addEventListener will call displayDogs function when the page is loaded is loaded
document.addEventListener("DOMContentLoaded", function() { 
  window.scrollTo({top: 10, behavior: "smooth"});
  randomOrderDisplay(); //display the list in random order initially
  displayUpForAdotionDogs();
});

