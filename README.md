# Furever Home

## **Furever Home** is a frontend catalog of a dog adoption website built with HTML, CSS, and JavaScript. This project demonstrates my data-structure skills in JS of arrays and objects through dynamic UI updates and maipulating data(filtering, sorting, updating, and removing) and DOM manipulation—all without external frameworks.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Dataset Edit & Modifications](#dataset-edit--modifications)
- [Why This Project?](#why-this-project)
- [Learning Resources](#learning-resources)
- [Usage](#usage)
- [Feedback and Comments](#feedback-and-comments)

---

**Note:** This is not an official adoption website. All images are AI-generated
using OpenAI's 4o models, and the dog details are inspired from a Kaggle's
dataset. This website was create to showcase my data structure knowledge in
JavaScript.

---

## Overview

This project is a catalog for a dog adoption website where users can:

- View a list of dogs available for adoption and "adopt" one.
- See which and how many dogs have been adopted.
- Virtually “Pet” a dog by clicking a cute paw icon to mark it as a favorite.
- Filter and sort the list of dogs based on various attributes(such as breed,
  gender, vaccinated, and more).
- Control how many items are shown on the page (with options such as 5, 10, 15,
  or All) with an infinite scroll.

## The UI is optimized for a 13-inch MacBook, as responsiveness for other screen sizes was not the primary focus.

## Features

- **Filtering & Sorting:**
  - Filter dogs by breed, gender, vaccination status, size, and age range.
  - Sort dogs by name (ascending/descending), age (youngest/oldest), or days in
    shelter.
  - Inform users when their filter criteria return no results or if an age range
    is invalid.

- **Dynamic Display Options:**
  - Initially, all available dogs are shown. However, the user can set to
    Display 5, 10, or 15 dogs per view

- **Interactive UI:**
  - Clicking the small paw icon next to a dog’s name toggles between an empty
    and filled paw icon, marking the dog as “petted” (kinda like favorite
    feature).
  - Clicking “Adopt” moves the dog from the available list to the adopted list.

- **Real-time Counts & Navigation:**
  - The navigation bar displays up-to-date counts for available and adopted
    dogs.

---

## Dataset Edit & Modifications

- I downloaded the original dataset from a Kaggle repository (🐾 Predict Pet Adoption Status
  Dataset 🐾 by Rabie El Kharoua):
  https://www.kaggle.com/datasets/rabieelkharoua/predict-pet-adoption-status-dataset/data
- Note: This dataset was modified last 10 months ago (as of 04.14.2025)

- **Modified:**
  - Added a column `imageURL` (for now, the same images are used per breed).
  - Images are generated using OpenAI's 4o models.
  - Expanded the original dataset (which had only three breeds: Golden, Lab, and
    Poodle) to include additional breeds such as Japanese Spitz, Pug, Boxer, and
    Husky.
  - Convert the age in months(in script.js) to years (by dividing by 12 and
    truncating the result).

- **Dataset Conversion:**\
  The raw dataset (80+ records) was converted from CSV to JSON using
  [csvjson.com](https://csvjson.com) and saved in a separate file
  (`datasets.js`).

---

## Why This Project?

I grew up in a place where stray dogs were everywhere and it left a lasting
impact on me. I have always dreamed of helping abandoned dogs find loving homes
since then. If I ever reach a point in life where I can do things without
worrying about money, I would build shelters and create safe spaces where every
dog can have a second chance.

This catalog website reflects my dream and commitment to give stray dogs a
second chance.

---

## Some Learning Resources I Utilized To Build This Project

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript Sorting Tutorial (YouTube)](https://www.youtube.com/watch?v=yQ1fz8LY354)
- [JavaScript Sorting Video](https://www.youtube.com/watch?v=w9078dAjcrY)

---

## Usage

**Visit the website: https://siddhartha008.github.io/snapSEAphase2/**

- Hosted with Github Page

---

## Feedback and Comments?

**I would love to know what you thought of the website and how I can improve it
in the future.**
