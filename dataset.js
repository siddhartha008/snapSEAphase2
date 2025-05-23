//this array is parsed from an online tool CSVJSON.com 
let dogs = [
    {
      "id": 101010,
      "PetType": "Dog",
      "name": "Aloo",
      "breed": "Golden Retriever",
      "age": 136,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 0,
      "daysInShelter": 85,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/golden.png"
    },
    {
      "id": 101011,
      "PetType": "Dog",
      "name": "Pickle",
      "breed": "Golden Retriever",
      "age": 172,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 4,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/golden.png"
    },
    {
      "id": 101012,
      "PetType": "Dog",
      "name": "Oreo",
      "breed": "Golden Retriever",
      "age": 86,
      "gender": "Female",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 30,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/golden.png"
    },
    {
      "id": 101013,
      "PetType": "Dog",
      "name": "Butters",
      "breed": "Golden Retriever",
      "age": 31,
      "gender": "Female",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 1,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/golden.png"
    },
    {
      "id": 101014,
      "PetType": "Dog",
      "name": "Pup0090",
      "breed": "Golden Retriever",
      "age": 47,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 0,
      "daysInShelter": 22,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/golden.png"
    },
    {
      "id": 101015,
      "PetType": "Dog",
      "name": "Drift",
      "breed": "Golden Retriever",
      "age": 23,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 63,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/golden.png"
    },
    {
      "id": 101016,
      "PetType": "Dog",
      "name": "Toast",
      "breed": "Pug",
      "age": 77,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 73,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/pug.png"
    },
    {
      "id": 101017,
      "PetType": "Dog",
      "name": "Snickers",
      "breed": "Pug",
      "age": 118,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 30,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/pug.png"
    },
    {
      "id": 101018,
      "PetType": "Dog",
      "name": "Snowy",
      "breed": "Pug",
      "age": 4,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 0,
      "daysInShelter": 13,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/pug.png"
    },
    {
      "id": 101019,
      "PetType": "Dog",
      "name": "Sprout",
      "breed": "Pug",
      "age": 108,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 84,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/pug.png"
    },
    {
      "id": 101020,
      "PetType": "Dog",
      "name": "Noodle",
      "breed": "Pug",
      "age": 141,
      "gender": "Female",
      "size": "Medium",
      "vaccinated": 0,
      "daysInShelter": 83,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/pug.png"
    },
    {
      "id": 101021,
      "PetType": "Dog",
      "name": "Pup1234",
      "breed": "Pug",
      "age": 121,
      "gender": "Female",
      "size": "Medium",
      "vaccinated": 0,
      "daysInShelter": 40,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/pug.png"
    },
    {
      "id": 101022,
      "PetType": "Dog",
      "name": "Bean",
      "breed": "Pug",
      "age": 93,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 88,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/pug.png"
    },
    {
      "id": 101023,
      "PetType": "Dog",
      "name": "Pebble",
      "breed": "Husky",
      "age": 67,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 5,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/husky.png"
    },
    {
      "id": 101024,
      "PetType": "Dog",
      "name": "Bolt",
      "breed": "Husky",
      "age": 57,
      "gender": "Female",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 62,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/husky.png"
    },
    {
      "id": 101025,
      "PetType": "Dog",
      "name": "Cotton",
      "breed": "Husky",
      "age": 138,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 0,
      "daysInShelter": 18,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/husky.png"
    },
    {
      "id": 101026,
      "PetType": "Dog",
      "name": "Swirl",
      "breed": "Husky",
      "age": 30,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 65,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/husky.png"
    },
    {
      "id": 101027,
      "PetType": "Dog",
      "name": "Katsu",
      "breed": "Husky",
      "age": 31,
      "gender": "Female",
      "size": "Medium",
      "vaccinated": 0,
      "daysInShelter": 19,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/husky.png"
    },
    {
      "id": 101028,
      "PetType": "Dog",
      "name": "Marshmallow",
      "breed": "Husky",
      "age": 170,
      "gender": "Female",
      "size": "Small",
      "vaccinated": 0,
      "daysInShelter": 49,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/husky.png"
    },
    {
      "id": 101029,
      "PetType": "Dog",
      "name": "Puff",
      "breed": "Husky",
      "age": 153,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 81,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/husky.png"
    },
    {
      "id": 101030,
      "PetType": "Dog",
      "name": "Storm",
      "breed": "Husky",
      "age": 123,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 77,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/husky.png"
    },
    {
      "id": 101031,
      "PetType": "Dog",
      "name": "Echo",
      "breed": "Husky",
      "age": 81,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 0,
      "daysInShelter": 37,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/husky.png"
    },
    {
      "id": 101032,
      "PetType": "Dog",
      "name": "Churro",
      "breed": "Husky",
      "age": 175,
      "gender": "Female",
      "size": "Small",
      "vaccinated": 0,
      "daysInShelter": 64,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/husky.png"
    },
    {
      "id": 101033,
      "PetType": "Dog",
      "name": "Doodle",
      "breed": "Husky",
      "age": 157,
      "gender": "Female",
      "size": "Small",
      "vaccinated": 0,
      "daysInShelter": 50,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/husky.png"
    },
    {
      "id": 101034,
      "PetType": "Dog",
      "name": "Curly",
      "breed": "Husky",
      "age": 83,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 0,
      "daysInShelter": 15,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/husky.png"
    },
    {
      "id": 101035,
      "PetType": "Dog",
      "name": "Maple",
      "breed": "Husky",
      "age": 120,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 53,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/husky.png"
    },
    {
      "id": 101036,
      "PetType": "Dog",
      "name": "Waffles",
      "breed": "Labrador",
      "age": 70,
      "gender": "Female",
      "size": "Large",
      "vaccinated": 0,
      "daysInShelter": 87,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/lab.png"
    },
    {
      "id": 101037,
      "PetType": "Dog",
      "name": "Dumpling",
      "breed": "Labrador",
      "age": 44,
      "gender": "Female",
      "size": "Small",
      "vaccinated": 0,
      "daysInShelter": 6,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/lab.png"
    },
    {
      "id": 101038,
      "PetType": "Dog",
      "name": "Blizzard",
      "breed": "Labrador",
      "age": 3,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 50,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/lab.png"
    },
    {
      "id": 101039,
      "PetType": "Dog",
      "name": "Rumble",
      "breed": "Labrador",
      "age": 106,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 0,
      "daysInShelter": 79,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/lab.png"
    },
    {
      "id": 101040,
      "PetType": "Dog",
      "name": "Champ",
      "breed": "Labrador",
      "age": 105,
      "gender": "Female",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 30,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/lab.png"
    },
    {
      "id": 101041,
      "PetType": "Dog",
      "name": "Chip",
      "breed": "Labrador",
      "age": 75,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 7,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/lab.png"
    },
    {
      "id": 101042,
      "PetType": "Dog",
      "name": "Tofu",
      "breed": "Labrador",
      "age": 67,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 34,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/lab.png"
    },
    {
      "id": 101043,
      "PetType": "Dog",
      "name": "Sunny",
      "breed": "Labrador",
      "age": 154,
      "gender": "Female",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 39,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/lab.png"
    },
    {
      "id": 101044,
      "PetType": "Dog",
      "name": "Mocha",
      "breed": "Labrador",
      "age": 6,
      "gender": "Female",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 43,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/lab.png"
    },
    {
      "id": 101045,
      "PetType": "Dog",
      "name": "Pup0351",
      "breed": "Labrador",
      "age": 91,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 86,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/lab.png"
    },
    {
      "id": 101046,
      "PetType": "Dog",
      "name": "Pup1130",
      "breed": "Labrador",
      "age": 110,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 0,
      "daysInShelter": 82,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/lab.png"
    },
    {
      "id": 101047,
      "PetType": "Dog",
      "name": "Pup738",
      "breed": "Labrador",
      "age": 141,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 88,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/lab.png"
    },
    {
      "id": 101048,
      "PetType": "Dog",
      "name": "Pup819",
      "breed": "Labrador",
      "age": 12,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 17,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/lab.png"
    },
    {
      "id": 101049,
      "PetType": "Dog",
      "name": "Pup204",
      "breed": "Labrador",
      "age": 93,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 51,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/lab.png"
    },
    {
      "id": 101050,
      "PetType": "Dog",
      "name": "Pup0057",
      "breed": "Japanese Spitz",
      "age": 151,
      "gender": "Female",
      "size": "Small",
      "vaccinated": 0,
      "daysInShelter": 19,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/jspitz.png"
    },
    {
      "id": 101051,
      "PetType": "Dog",
      "name": "Nugget",
      "breed": "Japanese Spitz",
      "age": 97,
      "gender": "Female",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 27,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/jspitz.png"
    },
    {
      "id": 101052,
      "PetType": "Dog",
      "name": "Dash",
      "breed": "Japanese Spitz",
      "age": 101,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 61,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/jspitz.png"
    },
    {
      "id": 101053,
      "PetType": "Dog",
      "name": "Jelly",
      "breed": "Japanese Spitz",
      "age": 109,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 0,
      "daysInShelter": 89,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/jspitz.png"
    },
    {
      "id": 101054,
      "PetType": "Dog",
      "name": "Muffin",
      "breed": "Japanese Spitz",
      "age": 152,
      "gender": "Female",
      "size": "Medium",
      "vaccinated": 0,
      "daysInShelter": 50,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/jspitz.png"
    },
    {
      "id": 101055,
      "PetType": "Dog",
      "name": "Honey",
      "breed": "Japanese Spitz",
      "age": 139,
      "gender": "Female",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 55,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/jspitz.png"
    },
    {
      "id": 101056,
      "PetType": "Dog",
      "name": "Miso",
      "breed": "Japanese Spitz",
      "age": 153,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 23,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/jspitz.png"
    },
    {
      "id": 101057,
      "PetType": "Dog",
      "name": "Sesame",
      "breed": "Japanese Spitz",
      "age": 68,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 0,
      "daysInShelter": 22,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/jspitz.png"
    },
    {
      "id": 101058,
      "PetType": "Dog",
      "name": "Pup7612",
      "breed": "Japanese Spitz",
      "age": 10,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 0,
      "daysInShelter": 31,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/jspitz.png"
    },
    {
      "id": 101059,
      "PetType": "Dog",
      "name": "Pup3084",
      "breed": "Japanese Spitz",
      "age": 164,
      "gender": "Female",
      "size": "Small",
      "vaccinated": 0,
      "daysInShelter": 45,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/jspitz.png"
    },
    {
      "id": 101060,
      "PetType": "Dog",
      "name": "Pup8307",
      "breed": "Japanese Spitz",
      "age": 160,
      "gender": "Female",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 87,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/jspitz.png"
    },
    {
      "id": 101061,
      "PetType": "Dog",
      "name": "Pup8290",
      "breed": "Japanese Spitz",
      "age": 172,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 38,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/jspitz.png"
    },
    {
      "id": 101062,
      "PetType": "Dog",
      "name": "Pup3727",
      "breed": "Japanese Spitz",
      "age": 12,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 0,
      "daysInShelter": 8,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/jspitz.png"
    },
    {
      "id": 101063,
      "PetType": "Dog",
      "name": "Pup8810",
      "breed": "Boxer",
      "age": 55,
      "gender": "Female",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 48,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101064,
      "PetType": "Dog",
      "name": "Pup3956",
      "breed": "Boxer",
      "age": 124,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 7,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101065,
      "PetType": "Dog",
      "name": "Pup5337",
      "breed": "Boxer",
      "age": 155,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 0,
      "daysInShelter": 21,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101066,
      "PetType": "Dog",
      "name": "Taraa",
      "breed": "Boxer",
      "age": 87,
      "gender": "Female",
      "size": "Large",
      "vaccinated": 0,
      "daysInShelter": 10,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101067,
      "PetType": "Dog",
      "name": "Pup7780",
      "breed": "Boxer",
      "age": 113,
      "gender": "Female",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 70,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101068,
      "PetType": "Dog",
      "name": "Jaado",
      "breed": "Boxer",
      "age": 119,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 67,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101069,
      "PetType": "Dog",
      "name": "Pup6988",
      "breed": "Boxer",
      "age": 18,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 0,
      "daysInShelter": 40,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101070,
      "PetType": "Dog",
      "name": "Pup8261",
      "breed": "Boxer",
      "age": 89,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 78,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101071,
      "PetType": "Dog",
      "name": "Pup4940",
      "breed": "Boxer",
      "age": 2,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 0,
      "daysInShelter": 66,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101072,
      "PetType": "Dog",
      "name": "Randy",
      "breed": "Boxer",
      "age": 39,
      "gender": "Female",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 67,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101073,
      "PetType": "Dog",
      "name": "Pumper",
      "breed": "Boxer",
      "age": 3,
      "gender": "Female",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 89,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101074,
      "PetType": "Dog",
      "name": "Pup5177",
      "breed": "Boxer",
      "age": 169,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 66,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101075,
      "PetType": "Dog",
      "name": "Pup3145",
      "breed": "Boxer",
      "age": 90,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 9,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101076,
      "PetType": "Dog",
      "name": "Pup2220",
      "breed": "Boxer",
      "age": 14,
      "gender": "Female",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 14,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101077,
      "PetType": "Dog",
      "name": "Hachi",
      "breed": "Boxer",
      "age": 121,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 24,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101078,
      "PetType": "Dog",
      "name": "Pup5704",
      "breed": "Boxer",
      "age": 70,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 51,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101079,
      "PetType": "Dog",
      "name": "Pup1651",
      "breed": "Boxer",
      "age": 147,
      "gender": "Female",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 46,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101080,
      "PetType": "Dog",
      "name": "Pup8754",
      "breed": "Boxer",
      "age": 63,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 16,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/boxer.png"
    },
    {
      "id": 101081,
      "PetType": "Dog",
      "name": "Roti",
      "breed": "Poodle",
      "age": 86,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 67,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/poodle.png"
    },
    {
      "id": 101082,
      "PetType": "Dog",
      "name": "Pup5710",
      "breed": "Poodle",
      "age": 58,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 0,
      "daysInShelter": 19,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/poodle.png"
    },
    {
      "id": 101083,
      "PetType": "Dog",
      "name": "Pup1497",
      "breed": "Poodle",
      "age": 81,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 0,
      "daysInShelter": 75,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/poodle.png"
    },
    {
      "id": 101084,
      "PetType": "Dog",
      "name": "Pup2368",
      "breed": "Poodle",
      "age": 127,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 0,
      "daysInShelter": 45,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/poodle.png"
    },
    {
      "id": 101085,
      "PetType": "Dog",
      "name": "Pup3405",
      "breed": "Poodle",
      "age": 167,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 0,
      "daysInShelter": 58,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/poodle.png"
    },
    {
      "id": 101086,
      "PetType": "Dog",
      "name": "Maya",
      "breed": "Poodle",
      "age": 126,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 36,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/poodle.png"
    },
    {
      "id": 101087,
      "PetType": "Dog",
      "name": "Chiya",
      "breed": "Poodle",
      "age": 84,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 66,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/poodle.png"
    },
    {
      "id": 101088,
      "PetType": "Dog",
      "name": "Pup2803",
      "breed": "Poodle",
      "age": 49,
      "gender": "Male",
      "size": "Medium",
      "vaccinated": 1,
      "daysInShelter": 64,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/poodle.png"
    },
    {
      "id": 101089,
      "PetType": "Dog",
      "name": "Pup2441",
      "breed": "Poodle",
      "age": 112,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 0,
      "daysInShelter": 18,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/poodle.png"
    },
    {
      "id": 101090,
      "PetType": "Dog",
      "name": "Pup7329",
      "breed": "Poodle",
      "age": 81,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 17,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/poodle.png"
    },
    {
      "id": 101091,
      "PetType": "Dog",
      "name": "Pup8672",
      "breed": "Poodle",
      "age": 96,
      "gender": "Female",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 60,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/poodle.png"
    },
    {
      "id": 101092,
      "PetType": "Dog",
      "name": "Buddu",
      "breed": "Poodle",
      "age": 146,
      "gender": "Female",
      "size": "Small",
      "vaccinated": 0,
      "daysInShelter": 64,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/poodle.png"
    },
    {
      "id": 101093,
      "PetType": "Dog",
      "name": "Nemo",
      "breed": "Poodle",
      "age": 172,
      "gender": "Male",
      "size": "Large",
      "vaccinated": 1,
      "daysInShelter": 36,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/poodle.png"
    },
    {
      "id": 101094,
      "PetType": "Dog",
      "name": "Pup6035",
      "breed": "Poodle",
      "age": 72,
      "gender": "Male",
      "size": "Small",
      "vaccinated": 1,
      "daysInShelter": 66,
      "isAdopted": false,
      "isPetted": false,
      "image": "./assets/dogsImages/poodle.png"
    }
  ]

  //.sort() function in javascripts can take a comparefn(optional) as a parameter
//the comparefn compares two values(usually subtracting)
//
function randomOrderDisplay(){
dogs.sort(
    function() {
      return 0.5 - Math.random();
    }
  )
}


