# Code Review Application

This is a full-stack application that provides AI-powered code reviews using Google's Generative AI (Gemini).

## Project Structure

- `frontend/`: React application built with Vite
- `backend/`: Express.js API server
- `api/`: Serverless function entry point for Vercel deployment
- `vercel.json`: Vercel deployment configuration

## Local Development

### Install Dependencies

```bash
npm run install:all
```

This will install dependencies for the root project, frontend, and backend.

### Run Development Servers

To run both frontend and backend development servers concurrently:

```bash
npm run dev
```

Or run them separately:

```bash
# Frontend only
npm run dev:frontend

# Backend only
npm run dev:backend
```

## Deployment to Vercel

### Prerequisites

1. Make sure you have a Vercel account and the Vercel CLI installed:

   ```bash
   npm install -g vercel
   ```

2. Ensure all the configuration files are set up correctly:
   - `vercel.json` in the project root
   - `api/index.js` for serverless function
   - Environment variables properly configured

### Deployment Steps

1. Install dependencies (if not already done):

   ```bash
   npm run install:all
   ```

2. Login to Vercel CLI:

   ```bash
   vercel login
   ```

3. Deploy the application:

   ```bash
   vercel
   ```

4. During the deployment process:

   - Set the root directory as the project root (not frontend or backend)
   - Vercel should automatically detect the framework as Vite

5. Set up environment variables in the Vercel dashboard:
   - `GOOGLE_GEMINI_KEY`: Your Google Gemini API key

### Troubleshooting Deployment Issues

If you encounter a 404 error after deployment:

1. Check that your API routes are correctly configured with the `/api` prefix
2. Verify that the `vercel.json` file has the correct rewrites and functions configuration
3. Ensure your frontend is using the correct API URL (using environment variables)
4. Check the Vercel deployment logs for any errors

If you encounter a runtime error:

1. We've simplified the vercel.json configuration to let Vercel auto-detect the runtime
2. Check that your Node.js version is compatible with your code
3. Verify that all dependencies are correctly installed
4. If issues persist, try deploying directly from the Vercel dashboard by connecting your repository

## Environment Variables

### Backend

- `PORT`: The port the server will run on (default: 3000)
- `GOOGLE_GEMINI_KEY`: Your Google Gemini API key

### Frontend

- `VITE_API_URL`: The URL for the backend API (default: "/api")
