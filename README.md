## Full Stack Blog App with Next.js, MongoDB, and Tailwind CSS
This project encompasses Blogger - A Full Stack Blog App using Next.js for the frontend, MongoDB for the database, and Tailwind CSS for styling. It includes both frontend and backend implementations along with an admin panel to manage blog posts. Users can create blog posts, upload banner, subscribe to newletters, and delete blogposts. Flairs can be added to blog posts for better accesibilty.

## Features
1) Display blog posts with dynamic routing using Next.js
2) Responsive design with Tailwind CSS
3) RESTful APIs with Next.js API routes to handle CRUD operations
4) MongoDB for storing blog post data and emails
5) Ability to create, edit, and delete blog posts in the Admin Panel

## Working Demo
https://github.com/sayalisachin/blogger/assets/101784889/9f2e2ff5-089f-41a7-949a-084ed0502a11



## Getting Started

First, run the development server:
1) Clone the repository
   ```bash
   git clone https://github.com/sayalisachin/blogger.git
   cd blogger
2) Install dependencies
   ```bash
   npm install
3) Set up environment variables
  Create a .env.local file in the root directory and add the following:
  ```bash
MONGODB_URI=your_mongodb_connection_string
```
4) Run development server
 ```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) to access the admin dashboard.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

