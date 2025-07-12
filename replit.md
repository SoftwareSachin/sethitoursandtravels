# Sethi Tour & Travels - Travel Services Website

## Overview

This is a full-stack web application for Sethi Tour & Travels, a premium travel service company specializing in Rajasthan tourism and taxi services. The application is built as a modern single-page application (SPA) with a React frontend and Express.js backend, featuring a comprehensive tour package display system and customer inquiry management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client-side and server-side code:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Schema Validation**: Zod for runtime type checking and validation
- **Build Process**: ESBuild for server-side bundling

## Key Components

### Data Layer
- **Database**: PostgreSQL with Neon serverless driver
- **Schema**: Four main entities - users, tour packages, taxi services, and contact inquiries
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Type Safety**: Full TypeScript types generated from Drizzle schema

### API Layer
- **REST Endpoints**: CRUD operations for tour packages, taxi services, and contact inquiries
- **Validation**: Zod schemas for request validation
- **Error Handling**: Centralized error handling middleware
- **Logging**: Request/response logging for API endpoints

### Frontend Components
- **Layout**: Responsive design with mobile-first approach
- **Navigation**: Smooth scrolling between sections
- **Forms**: Contact inquiry form with validation
- **Media**: Image galleries and hero sections
- **Interactive Elements**: WhatsApp integration and phone call buttons

## Data Flow

1. **Client Requests**: React components use TanStack Query to fetch data from API endpoints
2. **API Processing**: Express routes validate requests using Zod schemas
3. **Database Operations**: Storage layer abstracts database operations using Drizzle ORM
4. **Response Handling**: Type-safe responses with proper error handling
5. **UI Updates**: React Query automatically updates UI when data changes

### Contact Inquiry Flow
1. User fills out contact form on frontend
2. Form data validated client-side before submission
3. API endpoint validates data using Zod schema
4. Contact inquiry stored in database
5. Success/error feedback displayed to user

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icons including WhatsApp branding

### Data Management
- **TanStack Query**: Server state management with caching and synchronization
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL for production

### Development Tools
- **Vite**: Fast build tool with HMR for development
- **TypeScript**: Static type checking across the entire stack
- **ESBuild**: Fast bundling for production server code

## Deployment Strategy

### Development Environment
- **Vite Dev Server**: Handles frontend development with HMR
- **Express Server**: Serves API endpoints in development mode
- **Database**: Uses DATABASE_URL environment variable for connection

### Production Build
1. **Frontend**: Vite builds optimized static assets to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves built frontend assets in production
4. **Database Migrations**: Drizzle handles schema changes with migration files

### Environment Configuration
- **Development**: NODE_ENV=development with live reloading
- **Production**: NODE_ENV=production with optimized builds
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

The application is designed to be deployment-ready for platforms like Replit, with proper environment detection and asset serving strategies for both development and production environments.