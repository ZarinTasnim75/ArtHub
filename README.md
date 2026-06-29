# ArtHub – Online Art Marketplace

## Project Overview

ArtHub is a full-stack application that provides an online marketplace where artists can showcase their artworks and buyers can discover and explore them. The platform includes role-based authentication for users, artists, and administrators, allowing each role to access its own dashboard and features. The project demonstrates secure authentication, protected API routes using JWT, Stripe integration for subscription payments, image hosting with ImgBB, and responsive user interface design built with Next.js.

## Live Website

Live Site Link: https://arthub-client-seven.vercel.app

## Purpose

The purpose of ArtHub is to create a modern digital platform where artists can manage their artwork portfolio while buyers can browse artwork collections in an attractive and user-friendly environment. The project also demonstrates advanced web development concepts including authentication, authorization, database management, payment integration, and dashboard management using the MERN stack.

## Features

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

## Technologies Used

The frontend is built with Next.js, React, Tailwind CSS, DaisyUI, Axios, React Hook Form, React Hot Toast, Better Auth.

The backend is developed using Express.js, MongoDB, JWT, Stripe, CORS, dotenv, and the official MongoDB Node.js driver.

Artwork images are hosted using the ImgBB API.

## Environment Variables

The project uses environment variables to protect sensitive credentials such as MongoDB connection strings, JWT secret, Stripe secret key, Stripe Price IDs, ImgBB API key, Better Auth credentials, and frontend/backend URLs.