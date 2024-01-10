# Project Title

A full-stack web application built using Next.js and MongoDB, allowing users to register, log in, and access a dashboard.

## Features

- **User Authentication**: Users can sign up and login securely.
- **Secure Storage**: Passwords are hashed in the MongoDB database using bcryptjs for enhanced security.
- **Form Validation**: Input forms are validated using Zod and React Hook Form to ensure data integrity.
- **Access Control**: Dashboard access is restricted to authenticated users only.
- **Notifications**: Success and error notifications are displayed using React Hot Toast for a seamless user experience.
- **Styling**: Shadcn UI and Tailwind CSS are used for styling to create a clean and responsive UI.
- **Icons**: Lucide React is used for icons across the application.
- **Authentication**: Next Auth is implemented for handling user authentication and credentials verification.
- **Type Safety**: TypeScript is utilized for static typing and enhanced code readability.

## Tech Stack

- **Frontend**:
  - Next.js
  - React
  - TypeScript
  - Shadcn UI
  - Tailwind CSS
  - React Hook Form
  - Lucide React

- **Backend**:
  - MongoDB
  - Next Auth
  - Axios

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB database setup

### Installation

1. Clone the repository.
    ```bash
   git clone https://github.com/yourusername/project-name.git
    ```
2. Navigate to the project directory.
    ```bash
   cd project-name
    ```
3. Install dependencies.
   ```bash
   npm install
   ```
   
4. Set up environment variables.
  - Create a **.env.local** file in the root directory.
  - Add environment variables for MongoDB connection, Next Auth configuration, and sensitive      information.
     ```bash
     NEXT_PUBLIC_MONGODB_URI=your_mongodb_uri
     NEXT_PUBLIC_SECRET=your_next_auth_secret
     ```
     
5. Start the development server.

   ```bash
   npm run dev
   ```
6.  Access the application in your browser at `http://localhost:3000`.

## Usage
- **Register**: Access the sign-up page, create an account, and receive a success notification.
- **Login**: Use valid credentials to log in, redirect to the dashboard, and receive a success      notification.
- **Invalid Input**: See error messages for incorrect form inputs.
- **Invalid Login**: Users attempting to log in with the wrong credentials will receive an error 
  notification.
- **Dashboard Access**: Access to the dashboard is restricted unless logged in.

## Contributing

1. Fork the repository.
2. Create a new branch ```git checkout -b feature/my-feature```
3. Make your changes.
4. Commit your changes ```git commit -am 'Add my-feature```
5. Push to the branch ```git push origin feature/my-feature```
6. Create a pull request.
