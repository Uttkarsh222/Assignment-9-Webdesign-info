# Job Portal Application

This project is a job portal application built with a React frontend and a Node.js backend. The portal features user authentication, session management, job listings, company showcases, and more, ensuring a comprehensive job search experience.

## Technical Requirements

### Login and Session Management:
- The application includes a login page that authenticates users against stored usernames and passwords.
- We use Axios for making API calls for authentication and managing session states.
- A logout feature is provided to securely end user sessions, maintaining privacy and security.

### Job Portal Pages and Routing:
- The application features five main pages: Home, About, Job Listings, Contact, and Company Showcase. These are developed using React components, with `react-router` handling navigation.
- We follow a folder structure where each component has its own dedicated folder within the `src/components` directory for maintainability.
- Material UI is used to enhance the design and user experience of each page.
- The application's routing is structured to allow for easy and intuitive navigation.

### Job Listings with Frontend Data:
- The Job Listings page dynamically lists available job positions, detailing job roles, required skills, and salaries.
- Job data is managed within the frontend, using a `jobPosts` object for dynamic listing (no API request needed).

### Company Showcase with Image Gallery:
- The Company Showcase page displays a gallery of company images with their names.
- Images are sourced from the backend server, as set up in previous assignments. Initially, general images are fetched, with plans to implement user-specific image retrieval in future updates.

### Material UI Components:
- Various Material UI components are integrated throughout the portal to provide a consistent and responsive design.
- Material UI cards are used to present information on each page, dynamically generated using React's `map()` function based on data.

## Project Structure

backend/
├─ images/
├─ models/
│  └─ user.js
├─ routes/
│  └─ userRoutes.js
├─ app.js
├─ connection.env
├─ package-lock.json
└─ package.json
frontend/
├─ public/
├─ src/
│  ├─ api/
│  ├─ components/
│  │  ├─ About/
│  │  ├─ CompanyShowcase/
│  │  ├─ Contact/
│  │  ├─ Home/
│  │  ├─ JobListings/
│  │  ├─ Login/
│  │  └─ contexts/
│  │     └─ UserSessionContext.js
│  ├─ App.css
│  ├─ App.js
│  ├─ App.test.js
│  ├─ index.css
│  ├─ index.js
│  ├─ logo.svg
│  └─ reportWebVitals.js
└─ package.json


Backend Structure:
backend/: This is the root directory for the server-side of the application.
images/: Contains image files that are served by the backend. This could be used for the company showcase feature.
models/: Stores the Mongoose models (schemas) for the application's data. Currently, it includes user.js, which defines the user schema.
routes/: Contains the route definitions for the application's API endpoints. userRoutes.js includes routes related to user actions such as authentication.
app.js: The main entry point for the backend server. It sets up the application, middleware, routes, and starts the server.
connection.env: A file that stores environment variables for the backend, such as database connection strings (This file should actually be named .env to be automatically recognized by libraries like dotenv).
package-lock.json & package.json: These files manage the project's dependencies, scripts, and other configurations for the backend.
Frontend Structure:
frontend/: This is the root directory for the client-side of the application, built with React.
public/: Contains static files like index.html, which is the entry point of the React application in the browser.
src/: The main source directory for the React application.
api/: Could be used to organize Axios calls or service functions that communicate with the backend.
components/: Contains subdirectories for each component of the application. Each component directory, such as About, CompanyShowcase, etc., includes the React component files that make up that part of the application interface.
contexts/: Includes context files like UserSessionContext.js, which could be used for managing global state like user sessions and authentication status.
App.css: The main stylesheet for the application's root component.
App.js: The root React component that typically contains the main application logic and routing.
App.test.js: Contains tests for the App.js component.
index.css: A stylesheet that's applied globally across the application.
index.js: The JavaScript entry point for the React application that renders the root component to the DOM.
logo.svg: An SVG file for the application's logo.
reportWebVitals.js: A file for measuring the performance of the application.
package.json: Manages the project's dependencies, scripts, and other configurations for the frontend.
Both the backend and frontend are managed by their own package.json files, meaning they can be installed and run independently with their own sets of node modules.

This structure supports a separation of concerns, with the backend focused on serving data and managing the database, while the frontend is dedicated to presenting this data in a user-friendly interface. The use of React's component system allows for each piece of the UI to be developed and maintained in isolation, which can simplify the development and testing process.