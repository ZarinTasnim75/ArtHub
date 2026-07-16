# ArtHub – Online Art Marketplace

## Project Overview

ArtHub is a full-stack application that provides an online marketplace where artists can showcase their artworks and buyers can discover and explore them. The platform includes role-based authentication for users, artists, and administrators, allowing each role to access its own dashboard and features. The project demonstrates secure authentication, protected API routes using JWT, Stripe integration for subscription payments, image hosting with ImgBB, and responsive user interface design built with Next.js.

## Live Website

Live Site Link: https://arthub-client-seven.vercel.app

## Purpose

The purpose of ArtHub is to create a modern digital platform where artists can manage their artwork portfolio while buyers can browse artwork collections in an attractive and user-friendly environment. The project also demonstrates advanced web development concepts including authentication, authorization, database management, payment integration, and dashboard management using the MERN stack.

## 📸 Screenshot

<img width="1887" height="919" alt="image" src="https://github.com/user-attachments/assets/be2a0896-bfd0-43b6-916f-ba4733b06158" />


## ✨ Features

1.ArtHub provides secure authentication using email/password and Google Sign-In. Users receive JWT tokens for accessing protected routes and role-based dashboard features.

2.The application supports three different user roles: User, Artist, and Admin. Each role has its own dashboard with separate permissions and functionalities.

3.Artists can upload artwork with images stored using the ImgBB API, edit their existing artworks, delete artworks, and manage their personal artwork collection.

4.The home page displays dynamically loaded featured artworks and highlights the top artists based on the number of artworks they have published.

5.Visitors can browse all artworks without logging in and search, filter, sort, and paginate the artwork collection for a better browsing experience.

6.Stripe Checkout has been integrated for subscription plans, allowing users to upgrade from the Free plan to Pro or Premium. Subscription information is updated in the database after successful payment.

7.Users can update their profile information, including profile image and personal details.

8.The application includes protected API routes secured with JWT verification and MongoDB credentials stored securely using environment variables.

9.Responsive layouts have been implemented for desktop, tablet, and mobile devices using Tailwind CSS and DaisyUI.

1.Loading states, custom error handling, and a custom 404 page improve the overall user experience.

## 🛠️ Technologies Used

The frontend is built with Next.js, React, Tailwind CSS, DaisyUI, Axios, React Hook Form, React Hot Toast, Better Auth.

The backend is developed using Express.js, MongoDB, JWT, Stripe, CORS, dotenv, and the official MongoDB Node.js driver.

Artwork images are hosted using the ImgBB API.

## Environment Variables

The project uses environment variables to protect sensitive credentials such as MongoDB connection strings, JWT secret, Stripe secret key, Stripe Price IDs, ImgBB API key, Better Auth credentials, and frontend/backend URLs.

## 📦 Main Dependencies

### Client

```json
{
    "@better-auth/mongo-adapter": "^1.6.20",
    "@stripe/stripe-js": "^9.8.0",
    "@tanstack/react-query": "^5.101.1",
    "axios": "^1.18.1",
    "better-auth": "^1.6.20",
    "lucide-react": "^1.21.0",
    "mongodb": "^7.3.0",
    "motion": "^12.42.0",
    "next": "^16.2.9",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.6.0",
    "recharts": "^3.9.0",
    "stripe": "^22.3.0"
}
```

### Server

```json
{
    "cors": "^2.8.6",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "mongodb": "^7.3.0",
    "stripe": "^22.3.0"
}
```

# 🚀 Run Locally

## 1. Clone the repositories

### Client

```bash
git clone https://github.com/ZarinTasnim75/ArtHub.git
```

### Server

```bash
git clone https://github.com/your-username/ArtHub-server.git
```

---

## 2. Navigate to the project folders

### Client

```bash
cd ArtHub
```

### Server

```bash
cd ArtHub-server
```

---

## 3. Install dependencies

### Client

```bash
npm install
```

### Server

```bash
npm install
```

---

## 4. Configure Environment Variables

### Client (`.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000

BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Server (`.env`)

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PRO_PRICE_ID=your_pro_price_id
STRIPE_PREMIUM_PRICE_ID=your_premium_price_id

IMGBB_API_KEY=your_imgbb_api_key

CLIENT_URL=http://localhost:3000
```

---

## 5. Start the development servers

### Backend

```bash
npm run dev
```

### Frontend

```bash
npm run dev
```

---

## 6. Open the application

```
Frontend: http://localhost:3000

Backend: http://localhost:5000
```

---

## 📂 Resources

- 🌐 **Live Website:** https://arthub-client-seven.vercel.app
- 💻 **Client Repository:** https://github.com/ZarinTasnim75/ArtHub
- 🖥️ **Server Repository:** https://github.com/ZarinTasnim75/ArtHub-server

---
