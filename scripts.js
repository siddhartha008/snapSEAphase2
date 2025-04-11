/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// const FRESH_PRINCE_URL =
//   "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
// const CURB_POSTER_URL =
//   "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
// const EAST_LOS_HIGH_POSTER_URL =
//   "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// // This is an array of strings (TV show titles)
// let titles = [
//   "Fresh Prince of Bel Air",
//   "Curb Your Enthusiasm",
//   "East Los High",
// ];
// // Your final submission should have much more data than this, and
// // you should use more than just an array of strings to store it all.

// // This function adds cards the page to display the data in the array
// function showCards() {
//   const cardContainer = document.getElementById("card-container");
//   cardContainer.innerHTML = "";
//   const templateCard = document.querySelector(".card");

//   for (let i = 0; i < titles.length; i++) {
//     let title = titles[i];

//     // This part of the code doesn't scale very well! After you add your
//     // own data, you'll need to do something totally different here.
//     let imageURL = "";
//     if (i == 0) {
//       imageURL = FRESH_PRINCE_URL;
//     } else if (i == 1) {
//       imageURL = CURB_POSTER_URL;
//     } else if (i == 2) {
//       imageURL = EAST_LOS_HIGH_POSTER_URL;
//     }

//     const nextCard = templateCard.cloneNode(true); // Copy the template card
//     editCardContent(nextCard, title, imageURL); // Edit title and image
//     cardContainer.appendChild(nextCard); // Add new card to the container
//   }
// }

// function editCardContent(card, newTitle, newImageURL) {
//   card.style.display = "block";

//   const cardHeader = card.querySelector("h2");
//   cardHeader.textContent = newTitle;

//   const cardImage = card.querySelector("img");
//   cardImage.src = newImageURL;
//   cardImage.alt = newTitle + " Poster";

//   // You can use console.log to help you debug!
//   // View the output by right clicking on your website,
//   // select "Inspect", then click on the "Console" tab
//   console.log("new card:", newTitle, "- html: ", card);
// }

// // This calls the addCards() function when the page is first loaded
// document.addEventListener("DOMContentLoaded", showCards);

// function quoteAlert() {
//   console.log("Button Clicked!");
//   alert(
//     "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
//   );
// }

// function removeLastCard() {
//   titles.pop(); // Remove last item in titles array
//   showCards(); // Call showCards again to refresh
// }

/* This is a mock-up of a dog adoption website */
//Users can see the list of adopted dogs and can also "adopt" by clicking the "adopt" button

/* the dogsForAdptoption array is an array of objects with all the dogs available for adoption 
 (note: they have a "adopted" property(boolean) set to false by default) */

// the dogsAdpoted array is an array of objects with all the dogs that were adopted (this array starts empty)
// both the arrays are updated when the user clicks the "adopt" button - moving the dogs from the dogsForAdoption array to the dogsAdopted array 

//using both array(to store multiple dogs' data) and objects(to store each dog's different data as a key-value pair)
let dogsForAdoption = [
  {
    id: 100,
    name: "Charlie",
    breed: "Labrador Retriever",
    age: 3,
    gender: "Male",
    size: "Large",
    description: "A friendly and playful Labrador Retriever.",
    adopted: false,
    image: "https://example.com/charlie.jpg",
  },
  {
    id: 101,
    name: "Bella",
    breed: "German Shepherd",
    age: 2,
    gender: "Female",
    size: "Medium",
    description: "A loyal and protective German Shepherd.",
    adopted: false,
    image: "https://example.com/bella.jpg",
  }, 
  {
    id: 102,
    name: "Max",
    breed: "Golden Retriever",
    age: 4,
    gender: "Male",
    size: "Large",
    description: "A friendly and outgoing Golden Retriever.",
    adopted: false,
    image: "https://example.com/max.jpg",
  },
  {
    id: 103,
    name: "Lucy",
    breed: "Poodle",
    age: 1,
    gender: "Female",
    size: "Small",
    description: "A smart and affectionate Poodle.",
    adopted: false,
    image: "https://example.com/lucy.jpg",
  }, 
  {
    id: 104,
    name: "Jojo",
    breed: "Boxer",
    age: 5,
    gender: "Male",
    size: "Large",
    description: "A strong and energetic Boxer.",
    adopted: false,
    image: "https://example.com/rocky.jpg",
  },
  {
    id: 105,
    name: "Daisy",
    breed: "Beagle",
    age: 3,
    gender: "Female",
    size: "Medium",
    description: "A curious and friendly Beagle.",
    adopted: false,
    image: "https://example.com/daisy.jpg",
  }, 
  {
    id: 106,
    name: "Elza",
    breed: "Pug",
    age: 2,
    gender: "Male",
    size: "Small",
    description: "A tiny but feisty Chihuahua.",
    adopted: false,
    image: "https://example.com/buddy.jpg",
  },
  {
    id: 107,
    name: "Sammie",
    breed: "Labrador",
    age: 9,
    gender: "Female",
    size: "Medium",
    description: "A playful senior pup",
    adopted: false,
    image: "https://example.com/buddy.jpg",
  }
]

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
  const dogCards = document.getElementById("dogCard") //dogCard from HTML
  dogCards.innerHTML = ""; 
  dogsForAdoption.forEach(cuteDog => { 
    const dogCard = document.createElement("div") //creating a div with class 'dogCard'
    dogCard.classList.add("dogCard")
    dogCard.innerHTML = `
      <img src="${cuteDog.image}" alt="${cuteDog.name}">
      <h2>${cuteDog.name}</h2>
      <p>Breed: ${cuteDog.breed}</p>
      <p>Age: ${cuteDog.age}</p>
      <p>Gender: ${cuteDog.gender}</p>
      <p>Size: ${cuteDog.size}</p>
      <p>Description: ${cuteDog.description}</p>
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

//DOMContentLoaded means the webpage is loaded and .addEventListener will call displayDogs function when the page is loaded is loaded
document.addEventListener("DOMContentLoaded", displayUpForAdotionDogs);

