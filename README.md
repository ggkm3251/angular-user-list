# Angular User List Component

## Overview
This is a simple Angular application that fetches and displays user data from an API. It includes a real-time search feature, a loading state, and error handling.

## Features
- Fetch user data from an API (`https://jsonplaceholder.typicode.com/users`)  
- Display users in a list with their name, email, and phone number  
- Search input for real-time filtering  
- "Loading..." message while fetching data  
- Uses Angular best practices  

## Installation & Setup

Step 1: Clone the repository
```
git clone git@github.com:ggkm3251/angular-user-list.git
cd angular-user-list
```
Step 2: Install dependencies
```
npm install
```
Step 3: Run the application
```
ng serve
```
Step 4: Open your browser and go to:

http://localhost:4200

## Simple Project Structure
```
angular-user-list/
│── src/                            # Root source folder
│   ├── app/                        # Main application folder
│   │   ├── components/             # Holds all reusable components
│   │   │   ├── user-list/          # UserListComponent directory
│   │   │   │   ├── user-list.component.ts        # Component logic (TypeScript)
│   │   │   │   ├── user-list.component.html      # Component template (HTML)
│   │   │   │   ├── user-list.component.scss      # Component styles (SCSS)
│   │   │   │   ├── user-list.component.spec.ts   # Unit tests for UserListComponent
│   │   ├── app.component.ts        # Root component logic
│   │   ├── app.component.html      # Root component template (HTML)
│   │   ├── app.component.scss      # Root component styles
│   ├── assets/                     # Store static assets like images/icons
│   ├── environments/               # Environment-specific configurations
│   │   ├── environment.ts          # Development environment settings
│   │   ├── environment.prod.ts     # Production environment settings
│   ├── main.ts                     # Entry point, bootstraps Angular app
│   ├── styles.scss                  # Global application styles
│   ├── index.html                   # Main HTML file for the app
│── .gitignore                      # Ignore unnecessary files from Git
│── angular.json                    # Angular project configuration
│── package.json                     # Project dependencies & scripts
│── README.md                        # Instructions on how to run the project

```
## Author
This project is designed, developed and maintained by: [Glenn Mwangi](https://github.com/ggkm3251)

For any inquiries, please reach out:
Email: [glennkamau2@gmail.com](glennkamau2@gmail.com)
