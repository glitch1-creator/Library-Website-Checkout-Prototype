# Library Website — Book Purchasing Prototype

## 📋 Project Overview

A three-page interactive book purchasing prototype developed using HTML, CSS and JavaScript as part of a university front-end development assignment.

The application allows users to browse books, select a title, enter demonstration payment information and view an order confirmation page.

## 🎯 Key Features

- **Book Catalogue:** Displays books with cover images, titles and authors.
- **Interactive Book Selection:** Uses JavaScript event listeners to capture the selected book and navigate to checkout.
- **Form Validation:** Validates card number format, expiry dates and CVC using JavaScript, displaying alerts when invalid information is entered.
- **Academic API Integration:** Uses asynchronous `fetch()` requests and `async/await` to communicate with a university-provided payment-validation API.
- **Session Storage:** Preserves selected book information between pages.
- **Dynamic Confirmation:** Displays the purchased book, a generated demonstration order ID, date and masked card number.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API and async/await
- Browser sessionStorage
- Git and GitHub

## 📁 Project Structure

- `index.html` — Book catalogue
- `pay.html` — Checkout and validation
- `success.html` — Order confirmation
- `CSS/` — Stylesheets
- `JScript/` — JavaScript functionality
- `Images/` — Website images and assets

## 🚀 Running the Project

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Run `index.html` using Live Server, or open it in a browser.
4. Browse the book catalogue and explore the checkout interface.

**Important:** This is an academic demonstration. Do not enter real card information. The original payment-validation API was provided for university coursework and may not remain available or authorised for public use.

## 📸 Screenshots

<img width="800" alt="image" src="https://github.com/user-attachments/assets/0d585c02-34fc-4eaa-9734-711122f5110b" />

Figure 1: Library Homepage.
---------------------------------------------------------------------------------------------------------------------


<img width="800" alt="image" src="https://github.com/user-attachments/assets/363ec39b-08bd-4fe8-b3c5-10513663a852" />

Figure 2: Fill in details checkout page
---------------------------------------------------------------------------------------------------------------------


<img width="800" alt="image" src="https://github.com/user-attachments/assets/c082abdf-bfe5-42da-a760-87077ac41738" />

Figure 3: Checkout Successful page
---------------------------------------------------------------------------------------------------------------------


## 📌 Project Scope

Developed as a university assignment to demonstrate front-end development, JavaScript validation, API interaction and dynamic web page functionality.

This project is not a production payment system and does not process real commercial purchases.
