# marketplace-project
Marketplace project with Backend(Nodejs,Express.js) and Frontend(React and Tailwind)
# Front-end Project

## Getting Started

### Prerequisites
- Node.js and npm installed.

### Installation
1. Install dependencies:
    ```bash
    npm install
    ```

2. Start the development server:
    ```bash
    npm run start:dev
    ```

3. **Note:** Ensure that the back-end is running. Use the following commands to start the back-end:
    ```bash
    npm install
    npm start
    ```

## Features

### Unauthenticated Users

1. **Login**
   - Allows users to log in to their registered accounts.

2. **New User Registration**
   - Allows new users to register on the platform.

### Authenticated Users

3. **Home Page**
   - Lists all products already created on the platform.

4. **Delete Product**
   - Authenticated users have the option to delete a product from the platform.

5. **Create New Product**
   - Allows users to create new products through the right menu.

6. **Create New Promotion**
   - Authenticated users can create new promotions for existing products through the right menu.

7. **Redirect to Home Screen**
   - Clicking on the logo redirects users to the platform's home screen.

8. **Logout Button**
   - A logout button is available in the right menu to allow users to log out of their accounts.
# Marketplace Back end

## Getting Started

To start the backend, follow these steps:

1. Install dependencies:
    ```bash
    npm install
    ```

2. Start the server:
    ```bash
    npm start
    ```

## Authentication

### Employee Login
- **Method**: POST
- **URL**: `/auth/employee`
- **Description**: Allows an employee to log in to the platform.

### Client Login
- **Method**: POST
- **URL**: `/auth/client`
- **Description**: Allows a client to log in to the platform.

## Cart Routes

### Create Cart
- **Method**: POST
- **URL**: `/car`
- **Description**: Creates a new cart.

### Get Cart
- **Method**: GET
- **URL**: `/car/:id`
- **Description**: Retrieves information about a specific cart.

### Update Cart
- **Method**: PUT
- **URL**: `/car/:id`
- **Description**: Updates information for a specific cart.

### Delete Cart
- **Method**: DELETE
- **URL**: `/car/:id`
- **Description**: Deletes a specific cart.

## Client Routes

### Create Client
- **Method**: POST
- **URL**: `/clients`
- **Description**: Creates a new client.

### Get Client
- **Method**: GET
- **URL**: `/clients/:cpf`
- **Description**: Retrieves information about a specific client.

### Update Client
- **Method**: PUT
- **URL**: `/clients/:cpf`
- **Description**: Updates information for a specific client.

### Delete Client
- **Method**: DELETE
- **URL**: `/clients/:cpf`
- **Description**: Deletes a specific client.

## Employee Routes

### Create Employee
- **Method**: POST
- **URL**: `/employees`
- **Description**: Creates a new employee.

### Get Employees
- **Method**: GET
- **URL**: `/employees`
- **Description**: Retrieves information about employees.

### Update Employee
- **Method**: PUT
- **URL**: `/employees/:cpf`
- **Description**: Updates information for a specific employee.

### Delete Employee
- **Method**: DELETE
- **URL**: `/employees/:cpf`
- **Description**: Deletes a specific employee.

## Product Routes

### List All Products
- **Method**: GET
- **URL**: `/products/all`
- **Description**: Retrieves a list of all available products.

### Create Product
- **Method**: POST
- **URL**: `/products`
- **Description**: Creates a new product.

### Get Product
- **Method**: GET
- **URL**: `/products/:code`
- **Description**: Retrieves information about a specific product.

### Set Product Promotion
- **Method**: PUT
- **URL**: `/products/:code`
- **Description**: Sets a promotion for a specific product.

### Delete Product
- **Method**: DELETE
- **URL**: `/products/:code`
- **Description**: Deletes a specific product.

## Authentication

Authentication is required to access some routes, such as those related to clients, employees, and products. Make sure to include the correct authentication credentials when making requests to these routes.
