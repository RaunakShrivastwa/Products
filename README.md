# Product Order API

This repository contains the backend API for managing user accounts, orders, and admin functionalities related to product and user management.

## User Controller

### 1. Signup API

- **Endpoint:** `/user/signup`
- **Method:** POST
- **Description:** Allows users to register with the system.
- **Parameters:**
  - `firstname`: String
  - `lastname`: String
  - `email`: String (unique)
  - `phoneNumber`: Number (unique)
  - `password`: String
- **Response:** Returns user details upon successful registration.

### 2. Login API

- **Endpoint:** `/user/login`
- **Method:** POST
- **Description:** Allows users to log in using email/phone number and password.
- **Parameters:**
  - `email` OR `phoneNumber`: String
  - `password`: String
- **Response:** Returns a JWT token for authorization.

### 3. Order Creation API

- **Endpoint:** `/order/create`
- **Method:** POST
- **Description:** Allows users to create orders for products if they are in stock.
- **Parameters:**
  - `productId`: String
  - `quantity`: Number
- **Response:** Returns order details.

## Admin Controller

### 4. Admin Login API

- **Endpoint:** `/user/login`
- **Method:** POST
- **Description:** Allows admins to log in.
- **Parameters:**
  - `email` OR `phoneNumber`: String
  - `password`: String
- **Response:** Returns a JWT token for authorization.

### 5. User Management API

- **Endpoint:** `/api/admin/users`
- **Method:** GET
- **Description:** Allows admins to view and manage users (block/active/delete, approve/reject).
- **Parameters:**
  - Search query: String (search by firstname, email, or phoneNumber)
- **Response:** Returns user list with options for admin actions.

### 6. Product Management API

- **Endpoint:** `/product/create`
- **Method:** POST
- **Description:** Allows admins to manage products and warehouses.
- **Parameters:** Product details: JSON
- **Response:** Returns success message upon product addition.

  ### 7. Hub Management API

- **Endpoint:** `/hub/create`
- **Method:** POST
- **Description:** Allows admins to manage products and warehouses.
- **Parameters:** Product details: JSON
- **Response:** Returns success message upon product addition.

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables.
4. Run the server using `npm start`.

## Contributors

- [Shubham Shrivastwa](https://github.com/yourusername)

Feel free to contribute by forking the repository and submitting pull requests. If you encounter any issues, please open an issue on GitHub.
