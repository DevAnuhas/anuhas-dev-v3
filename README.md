# Anuhas Dissanayake - Portfolio Website V3

Greetings, everyone!

Allow me to present myself, I’m Anuhas Dissanayake. I’m excited to showcase my latest portfolio website project.

A modern, interactive full-stack portfolio website showcasing projects, experience, and technical expertise. Built with Next.js 15, featuring a glassmorphism dark theme, content management, and comprehensive admin functionality.

## Features

### Modern Design

- **Dark Glassmorphism Theme** with interactive blur effects
- **Cursor-following Effects** for enhanced user experience
- **Floating Pill Navigation** with smooth animations
- **Hero Section** featuring a spotlight effect and dynamic background
- **Dynamic Project Gallery** with detailed project pages
- **Bento Grid** with modern layout presenting personal information
- **Responsive Design** optimized for all devices

### Content Management

- **Integrated Blog System** for tutorials and journey posts
- **Notion Integration** for detailed project breakdowns and blogs
- **Admin Dashboard** with full CRUD capabilities
- **Media Management** via Cloudinary integration

### Security & Performance

- **GitHub OAuth Authentication** for admin access
- **Server-Side Rendering** with Next.js 15 App Router
- **Image Optimization** and lazy loading
- **SEO Optimized** with dynamic meta tags

## Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Shadcn UI** - Modern component library
- **Framer Motion** - Smooth animations and transitions
- **Three.js** - 3D globe visualization
- **React Icons** - Lightweight icon library

### Backend

- **Next.js API Routes** - Serverless functions
- **MongoDB** - NoSQL database
- **NextAuth.js** - Authentication solution
- **Cloudinary** - Image storage and optimization

### DevOps & Tools

- **Vercel** - Deployment platform
- **GitHub** - Version control and OAuth
- **ESLint & Prettier** - Code quality tools

**Website Link:** [https://anuhas.dev](https://anuhas.dev)

---

# Guide: Getting Started with the Project

Here’s a straightforward walkthrough to launch this project locally on your machine.

## Prerequisites

Make sure you have the following prerequisites:

- Node.js
- MongoDB database
- Cloudinary account
- GitHub OAuth App

## Steps to Launch the Project

1. **Clone the Project:**

   ```bash
   git clone https://github.com/DevAnuhas/anuhas-dev-v3.git
   cd anuhas-dev-v3
   ```

2. **Install all dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set environment variables:**

   Create a `.env.local` file in the project directory and add the following environment variables:

   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string

   # Authentication
   NEXTAUTH_SECRET=your_nextauth_secret
   GITHUB_CLIENT_ID=your_github_oauth_client_id
   GITHUB_CLIENT_SECRET=your_github_oauth_client_secret
   ADMIN_GITHUB_ID=your_github_username

   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # Notion
   NOTION_API_KEY=your_notion_api_key
   ```

4. **Run the project:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   - Open [http://localhost:3000](http://localhost:3000) to view the app.

## Configuration

### GitHub OAuth Setup

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App with:
   - Homepage URL: `http://localhost:3000` (development)
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

### Cloudinary Setup

1. Create a Cloudinary account
2. Get your cloud name, API key, and API secret
3. Configure upload presets for different image types

### MongoDB Setup

1. Create a MongoDB Atlas cluster or local instance
2. Create a database
3. Add connection string to environment variables

## API Endpoints

### Public APIs

- `GET /api/projects` - Get all projects
- `GET /api/projects/[slug]` - Get project by slug
- `GET /api/blog` - Get published blog posts
- `GET /api/blog/[slug]` - Get blog post by slug

### Admin APIs (Protected)

- `POST /api/admin/projects` - Create project
- `PUT /api/admin/projects/[id]` - Update project
- `DELETE /api/admin/projects/[id]` - Delete project
- `POST /api/admin/upload` - Upload images
- `POST /api/admin/blog` - Create blog post

### Content

- Update personal information and social links in [`data/index.ts`](data/index.ts)

## Deployment

This Next.js application can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FDevAnuhas%2Fanuhas-dev-v3.git)

## License

This project is licensed under the [MIT License](License.txt).

## Author

**Anuhas Dissanayake**

- Website: [anuhas.dev](https://anuhas.dev)
- GitHub: [@DevAnuhas](https://github.com/DevAnuhas)
- LinkedIn: [profile-anuhas](https://linkedin.com/in/profile-anuhas)
- Email: [contact@anuhas.dev](mailto:contact@anuhas.dev)

---

⭐ If you found this project helpful, please give it a star on GitHub!
