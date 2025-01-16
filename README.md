# User Management React Application

This project is a React.js application that fetches and displays a list of users from an API, allows searching, sorting, and filtering, and provides a detailed view for each user. The application is styled using Material-UI and is fully responsive for both mobile and desktop devices.

## Features

1. **Home Page**:

   - Displays a list of users fetched from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).
   - Shows user information: name, email, and city.
   - Search functionality to filter users by name.
   - Sorting options (A-Z and Z-A) for user names.
   - Pagination for user list navigation.

2. **User Detail Page**:

   - Displays full user details, including name, email, phone, company name, and website.
   - Includes a "Go Back" button to return to the Home Page.

3. **Global Features**:
   - State management using the Context API for dark/light mode toggle.
   - Loading and error handling during API calls.
   - Fully responsive design with Material-UI grid system.


### Tech Stack

#### Frontend:
- React.js: For building UI components.
- Material-UI: For responsive and modern UI design.
- React Router: For client-side routing.
- Context API: For managing global state (dark/light mode).

#### Backend:
- Data is fetched from the free JSONPlaceholder API.

### deployment link
https://user-management-application-nu.vercel.app/