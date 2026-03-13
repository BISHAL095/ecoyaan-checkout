# Ecoyaan Checkout Flow

This project implements a simple multi-step checkout flow using Next.js.
It was built as a functional MVP to demonstrate a clean architecture and
working checkout experience.

## Features

-   Server-side rendered cart page
-   Multi-step checkout flow:
    -   Cart
    -   Shipping
    -   Payment
    -   Success
-   Form validation for shipping details
-   Global checkout state using React Context
-   Styled UI using Tailwind CSS

------------------------------------------------------------------------

## Architecture

The application is built using **Next.js** with a simple page-based
routing system.

### Key architectural choices

### 1. Server Side Rendering (SSR)

The cart page uses `getServerSideProps` to fetch cart data from the API
on each request. This ensures the cart contents are always fresh when
the page loads.

### 2. React Context for Checkout State

A global `CheckoutContext` is used to share state between checkout
steps:

-   Cart items
-   Shipping address

This avoids prop drilling and keeps state management simple.

### 3. Page-Based Checkout Flow

Each step of the checkout is implemented as a separate page.

    /pages
      cart.js
      shipping.js
      payment.js
      success.js

Navigation between steps is handled using Next.js routing.

### 4. Simple API Layer

    /pages/api/cart.js

This endpoint simulates fetching cart data for the cart page.

### 5. Styling

The UI is styled using Tailwind CSS for fast development and consistent
design.

------------------------------------------------------------------------

## Project Structure

    pages/
      api/
        cart.js
      cart.js
      shipping.js
      payment.js
      success.js

    context/
      CheckoutContext.js

    styles/
      globals.css

------------------------------------------------------------------------

## Running the Project Locally

### 1. Clone the repository

    git clone <repository-url>
    cd ecoyaan-checkout

### 2. Install dependencies

    npm install

### 3. Run the development server

    npm run dev

### 4. Open the application

Open your browser and go to:

    http://localhost:3000

You can start the checkout flow from the cart page.

------------------------------------------------------------------------

## Notes

This implementation focuses on delivering a **working MVP** with a clear
architecture rather than a production-ready checkout system.

Features like authentication, payment gateway integration, and database
persistence are intentionally out of scope for this assignment.
