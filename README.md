# WEB103 Project 4 - A-Square Cuisine Bowl Builder

Submitted by: **Lukman Adeyemi**

About this web app:

**A-Square Cuisine Bowl Builder** is a full-stack React application that allows users to customize their own meal bowls by selecting a base, protein, sauce, side, and drink. The application dynamically updates the bowl preview and total price as selections change. Users can save customized bowls to a PostgreSQL database, browse all saved orders, view detailed information, edit existing orders, and delete orders. The project uses a RESTful Express API connected to a Render PostgreSQL database.

Time spent: **12 hours**

---

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API.**

- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured `CustomItem` table.**
  - [x] **NOTE: Walkthrough includes the Render dashboard showing the PostgreSQL database.**
  - [x] **NOTE: Walkthrough includes the PostgreSQL table contents using `SELECT * FROM orders;`.**

- [x] **Users can view multiple features of the `CustomItem` they can customize.**
  - Base
  - Protein
  - Sauce
  - Side
  - Drink

- [x] **Each customizable feature has multiple options to choose from.**

- [x] **On selecting each option, the displayed visual icon for the `CustomItem` updates to match the option the user chose.**
  - Different bowl illustrations are displayed depending on the selected base (Rice, Pasta, or Salad).

- [x] **The price of the `CustomItem` changes dynamically as different options are selected.**

- [x] **The visual interface changes in response to at least one customizable feature.**
  - Bowl color and illustration update automatically based on the selected base.

- [x] **The user can submit their choices to save the item to the list of created `CustomItem`s.**

- [x] **If a user submits a feature combo that is impossible, they receive an appropriate error message and the item is not saved to the database.**

- [x] **Users can view a list of all submitted `CustomItem`s.**

- [x] **Users can edit a submitted `CustomItem` from the list view of submitted `CustomItem`s.**

- [x] **Users can delete a submitted `CustomItem` from the list view of submitted `CustomItem`s.**

- [x] **Users can update or delete `CustomItem`s that have been created from the detail page.**

---

## Optional Features

The following **optional** features are implemented:

- [ ] Selecting particular options prevents incompatible options from being selected before submission.

---

## Additional Features

The following additional features are implemented:

- [x] Modern restaurant-inspired responsive user interface.
- [x] Responsive card layout displaying saved orders.
- [x] Beautiful custom navigation bar available across the application.
- [x] Food preview updates live while customizing an order.
- [x] Dynamic price calculation utility.
- [x] Dedicated Order Details page.
- [x] Dedicated Edit Order page.
- [x] Styled action buttons with hover effects.
- [x] Confirmation dialog before deleting an order.
- [x] RESTful API using Express.js.
- [x] PostgreSQL database hosted on Render.
- [x] Environment variables secured using `.env` and `.gitignore`.
- [x] Modular React component structure.
- [x] Validation utilities to prevent impossible food combinations.

---

## Video Walkthrough

Here's a walkthrough of the implemented features:

<img src="./assets/walkthrough.gif" width="900">

GIF created with **ScreenToGif**

---

## Project Screenshots

### Home Page

<img width="1920" height="913" alt="image" src="https://github.com/user-attachments/assets/eb4b9853-ab84-4026-b5fd-05cc0fc24113" />


### Customize Bowl

<img width="1920" height="1437" alt="image" src="https://github.com/user-attachments/assets/adde7d96-adce-472f-83d1-fa6d6992efae" />


### Saved Orders

<img width="1920" height="1842" alt="image" src="https://github.com/user-attachments/assets/34c5da98-9e7b-426d-84be-33e6d8912e11" />


### Order Details

<img width="1920" height="913" alt="image" src="https://github.com/user-attachments/assets/c89dc2f5-f1dd-4cb4-94f6-17c5e346cef9" />


### Edit Order

<img width="1920" height="1437" alt="image" src="https://github.com/user-attachments/assets/ce27fb62-9644-4450-91ab-b639887eca03" />


---

## Technologies Used

### Frontend

- React
- React Router
- JavaScript (ES6)
- CSS3

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL
- Render PostgreSQL

### Other

- REST API
- dotenv
- pg
- Vite

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/orders` | Retrieve all orders |
| GET | `/orders/:id` | Retrieve one order |
| POST | `/orders` | Create a new order |
| PUT | `/orders/:id` | Update an existing order |
| DELETE | `/orders/:id` | Delete an order |

---

## Database Schema

### Orders Table

| Column | Type |
|---------|------|
| id | SERIAL PRIMARY KEY |
| customer_name | TEXT |
| base | TEXT |
| protein | TEXT |
| sauce | TEXT |
| side_item | TEXT |
| drink | TEXT |
| price | INTEGER |

---

## Notes

Some challenges encountered while building this application included:

- Designing a reusable React component structure.
- Connecting the frontend with an Express REST API.
- Configuring a PostgreSQL database hosted on Render.
- Securing sensitive database credentials using environment variables.
- Implementing dynamic price calculations.
- Creating validation logic for impossible food combinations.
- Debugging React Router navigation and component exports.
- Designing a responsive user interface that remains consistent across Home, Create, Details, Edit, and Orders pages.

These challenges provided valuable experience working with a complete full-stack CRUD application using React, Express, and PostgreSQL.

---

## License

Copyright 2026 Lukman Adeyemi

Licensed under the Apache License, Version 2.0 (the "License");

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an **"AS IS" BASIS**, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
