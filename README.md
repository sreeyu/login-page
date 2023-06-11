# login-page

This project is a React application that demonstrates a simple authentication flow using local storage. It includes a login page where users can enter their email and password, and upon successful authentication, they are directed to a home page.

## Features

- **User Authentication:** The application allows users to log in using their email and password. It verifies the credentials and grants access to the home page upon successful authentication.

- **Local Storage:** The application utilizes the browser's local storage to persist the user's authentication status. When the user logs in, a flag is stored in the local storage, and when they log out, the flag is removed.

- **Responsive Design:** The app is designed to be responsive, ensuring that it adapts and displays correctly on different screen sizes and devices.

- **Form Validation:** The login form includes validation for the email and password fields. It checks if the email contains the "@" symbol and if the password length is greater than 6 characters. The form's submit button is enabled or disabled based on the validity of the form inputs.

- **Home Page:** After successful login, users are redirected to a home page where they are greeted with a welcome message. The home page also includes a navigation bar that allows users to access different sections of the application.

- **Logout Functionality:** The navigation bar includes a logout button that allows users to log out of the application. Clicking the logout button removes the authentication flag from local storage and redirects the user back to the login page.

## Usage

- Open the application by visiting https://sreeyu.github.io/login-page.

- On the login page, enter your email and password.
- Click the "Log In" button.
- If the credentials are valid, you will be redirected to the home page and greeted with a welcome message.
- To log out, click the "Logout" button in the navigation bar.

## Dependencies
The project utilizes the following dependencies:

- React
- react-dom
- react-scripts

These dependencies are automatically installed when running npm install.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute this project as per the terms of the license.