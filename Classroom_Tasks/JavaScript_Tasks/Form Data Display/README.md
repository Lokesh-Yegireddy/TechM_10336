# Basic Form Submit

## Project Overview

**Basic Form Submit** is a simple web application demonstrating how to create a basic HTML form, capture user input, and display the entered details dynamically on the same page. This project uses **HTML**, **CSS**, and **JavaScript**.

Key Features:

- Form fields for **Full Name**, **Email**, **Phone Number**, and **Date of Birth**.
- **Submit button** to display entered data dynamically without reloading the page.
- **Reset button** to clear the form inputs.
- Responsive and clean layout.
- Results are shown in a visually distinct card below the form.

---

```
## Folder Structure

BasicFormSubmit/
├── index.html          # Main HTML file containing the form
├── styles.css          # CSS file for styling the form and result
├── script.js           # JavaScript file to handle form submission and display data
├── README.md           # Project documentation
└── Screenshots/
    ├── initial.png     # Screenshot of the form before submission
    └── submitted.png   # Screenshot showing entered data after form submission

```

---

## How It Works

1. The user fills out the form fields: Full Name, Email, Phone Number, and Date of Birth.
2. On clicking the **Submit** button:
   - JavaScript prevents the default page reload.
   - Captures all input values.
   - Displays the data dynamically inside the `#result` div.
3. The **Reset** button clears all input fields, allowing the user to enter new data.

---

## Screenshots

1. **Initial Form**  
   ![Initial Form](Screenshots/initial.png)

2. **Form After Submission**  
   ![Submitted Form](Screenshots/submitted.png)

---

## How to Run

1. Clone or download the repository.
2. Open `index.html` in any modern browser.
3. Fill the form and click **Submit** to see the results.
4. Click **Reset** to clear the form.

---

## Technologies Used

- **HTML** – Form structure
- **CSS** – Styling for form and result card
- **JavaScript** – Handling form submission and dynamically displaying data

---

## Notes

- The project ensures **no page reload** on submission using `e.preventDefault()` in JavaScript.
- The displayed result is responsive and fits the form layout cleanly.
- Easily extendable to add more fields or validation in the future.
