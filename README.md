
# Prisme Edge Studio App : A **Next.js** application for a gaming company.  
This project leverages **Prisma** for database management, **NextAuth** for authentication, and **TailwindCSS** for a responsive and modern UI.

---

## **Features**
- **Game Management**: Add, update, and delete games with attributes like title, genre, description, and price.  
- **Founders API**: Dynamically fetch and display information about founders.  
- **User Management**: Manage users with secure authentication and profile features.  
- **Responsive Design**: Styled with **TailwindCSS** for a seamless experience across devices.  
- **Authentication**: Secure login with **NextAuth**, including support for OAuth providers like Google.  
- **Modern Architecture**: Built using the **app directory** in **Next.js 15**, enabling both client-side and server-side rendering.

---

## **Getting Started**

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **npm** or **Yarn**
- **PostgreSQL** (or your preferred database)

---

### **Installation**

#### I. Clone the repository:
```bash
git clone https://github.com/Imranelaf/Prisme-Edge-Studio-App.git
cd Prisme-Edge-Studio-App
```

#### II. Install dependencies:
```bash
npm install
```

#### III. Configure environment variables:  
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL=your-database-url
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

#### IV. Set up the database:
```bash
npx prisma migrate dev
```

#### V. Start the development server:
```bash
npm run dev
```

---

## **Scripts**
- **`npm run dev`**: Start the development server.  
- **`npm run build`**: Build the production version of the app.  
- **`npm run start`**: Start the production server.  
- **`npm run lint`**: Lint the codebase with **ESLint**.  
- **`npm test`**: Run unit and integration tests with Jest.  

---

## **Technologies Used**
- **Next.js 15**: Framework for React with server-side rendering and API routes.  
- **Prisma**: Database ORM for managing data and migrations.  
- **NextAuth**: Authentication library with OAuth support.  
- **TailwindCSS**: Utility-first CSS framework for styling.  
- **TypeScript**: Typed JavaScript for a better developer experience.  

---

## **API Endpoints**

### **Games API**
- **GET /api/games**: Fetch all games.  
- **POST /api/games**: Add a new game.  
- **DELETE /api/games**: Delete a game by ID.  

### **Founders API**
- **GET /api/founders**: Fetch all founders.  

### **Users API**
- **GET /api/users**: Fetch all users.  

---

## **Future Enhancements**
- Implement role-based access control.  
- Add detailed analytics to the dashboard.  
- Optimize database queries with indexes.  
- Add support for additional OAuth providers.  

---

## **Contributing**
Contributions are welcome! Please follow these steps:

1. Fork the repository.  
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **Developed by**  
Imrane ALI LAFKIH
