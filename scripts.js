// This is a mock-up of a dog adoption website 
//Users can see the list of adopted dogs and can also "adopt" by clicking the "adopt" button

/* the dogsForAdptoption array is an array of objects with all the dogs available for adoption 
 * (note: they have a "adopted" property(boolean) set to false by default) */

// the dogsAdpoted array is an array of objects with all the dogs that were adopted (this array starts empty)
// both the arrays are updated when the user clicks the "adopt" button - moving the dogs from the dogsForAdoption array to the dogsAdopted array 


//using both array(to store multiple dogs' data) and objects(to store each dog's different data as a key-value pair)


let dogsAdopted = []
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


function displayUpForAdotionDogs () {

  document.querySelector(".up-for-adoption").style.backgroundColor = "#946b45";
  document.querySelector(".adopted-button").style.backgroundColor = "";
  document.getElementsByClassName("page-heading-text").textContent = "Dogs for Adoption"
  const dogCards = document.getElementById("dogCard") //dogCard from HTML
  dogCards.innerHTML = ""; 
  dogsForAdoption.forEach(cuteDog => { 
    const dogCard = document.createElement("div") //creating a div with class 'dogCard'
    dogCard.classList.add("dogCard")
    dogCard.innerHTML = `
      <img src="${cuteDog.image}" alt="${cuteDog.name}">
      <h2>${cuteDog.name}</h2>
      <p>Breed: ${cuteDog.breed}</p>
      <p>Age: ${Math.trunc(cuteDog.age / 12) >= 1 ? Math.trunc(cuteDog.age/12) + " years" : cuteDog.age + " months"}</p>
      <p>Gender: ${cuteDog.gender}</p>
      <p>Size: ${cuteDog.size}</p>
      <p>Vaccinated: ${cuteDog.vaccinated == 0 ? 'Yes' : 'No'} </p>
      <button class="adopt-${cuteDog.name}" onclick="adoptDog(${cuteDog.id})">Adopt</button>
    `
    dogCards.appendChild(dogCard) //add the dogCard to the dogCards div
  })
}
//the dataset has age in month so when displaying the age, trunc only returns the integer part after the division 
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
  document.getElementsByClassName("sortAndSearchSection").display = 'none';
  document.getElementsByClassName("page-heading-text").innerHTML = ""
  
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

//sorting and filter using .sort() and comparefn 
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
function sortBySize() { 
  dogsForAdoption.sort(
    function(a,b) { 
      return a.size - b.size; 
    }
  )
  displayUpForAdotionDogs();
}

function displayTheBreed(selectedBreed) { 
  console.log(selectedBreed);
  let selectedBreedList = dogsForAdoption.filter(dog => dog.breed===selectedBreed)
  console.log(selectedBreedList);
  displayUpForAdotionDogs(selectedBreedList);
}

function sortByWeight() { 
  dogsForAdoption.sort(
    function(a,b){
      return a.weightLB - b.weightLB;
  })
  displayUpForAdotionDogs();
}

//DOMContentLoaded means the webpage is loaded and .addEventListener will call displayDogs function when the page is loaded is loaded
document.addEventListener("DOMContentLoaded", displayUpForAdotionDogs);

