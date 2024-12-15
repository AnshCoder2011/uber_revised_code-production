# About Me

Hi, I'm **Ansh**! 👋

- 🔥 **Age**: 13
- 💻 **Full Stack Developer**: Passionate about web development and creating user-friendly, animated websites.
- 🎨 **Expertise**: Specialized in building modern, responsive, and visually appealing web applications.
- 🚀 **Exploring**: Always eager to learn new technologies and enhance my skills.

---

# Uber Clone Project

I am currently working on an **Uber Clone** using the MERN stack. This project includes a fully functional backend, an interactive frontend, and integration with **OpenStreetMap** for real-time ride tracking.

# Live Link

https://anshuber.netlify.app

### Key Features:

- **User Authentication**: Secure login and signup functionality.
- **Real-time Map Integration**: Powered by OpenStreetMap, allowing users to view ride locations and routes dynamically.
- **Ride Management**: Book, cancel, and track rides seamlessly.
- **Mobile Responsiveness**: Optimized for both web and mobile platforms.

### Screenshots:

![Uber Clone Banner](https://www.webdevelopmentindia.biz/wp-content/uploads/2024/09/uber-clone-banner.webp)

![Lyft Clone Banner](https://res.cloudinary.com/dfpzh53td/f_auto,q_auto/rentallscript-website/newLyftClone/bannerImage_hx8a7d.webp)

---

# User Registration Endpoint

## Endpoint

`POST /users/register`

## Description

This endpoint is used to register a new user. It validates the required fields from the user and saves the user to the database if everything is correct.

## Request Body

The request body should be in JSON format:

```json
{
  "token": "your_jwt_token",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Required Fields

- `fullname.firstname`: String, minimum 3 characters
- `fullname.lastname`: String, optional, minimum 3 characters
- `email`: String, valid email format, required
- `password`: String, minimum 6 characters, required

## Responses

### Success Response

- **Code**: 201
- **Content**:

```json
{
  "message": "User registered successfully"
}
```

### Error Responses

- **Code**: 400

  - **Content**:

  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

  - **Description**: If the email is invalid or required fields are missing.

- **Code**: 400

  - **Content**:

  ```json
  {
    "message": "User already exist"
  }
  ```

  - **Description**: If the user already exists.

---

# User Login Endpoint

## Endpoint

`POST /users/login`

## Description

This endpoint is used to log in a user. It validates the email and password, and if the credentials are correct, it returns a token for the user.

## Request Body

The request body should be in JSON format:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Required Fields

- `email`: String, valid email format, required
- `password`: String, minimum 6 characters, required

## Responses

### Success Response

- **Code**: 200
- **Content**:

```json
{
  "token": "your_jwt_token"
}
```

---

# User Profile Endpoint

## Endpoint

`GET /users/profile`

## Description

This endpoint returns the profile of a logged-in user. Authentication is mandatory.

## Responses

### Success Response

- **Code**: 200
- **Content**:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

### Error Responses

- **Code**: 401
  - **Content**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```
  - **Description**: If the user is not authenticated.

---

# User Logout Endpoint

## Endpoint

`POST /users/logout`

## Description

This endpoint logs out the user and blacklists the token.

## Responses

### Success Response

- **Code**: 200
- **Content**:

```json
{
  "message": "Logged out"
}
```
