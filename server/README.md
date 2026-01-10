# Admin Panel Setup Guide

## Overview
This admin panel allows you to manage articles for the Puskesmas website with full CRUD operations and authentication.

## Prerequisites
- Node.js v18+ installed
- MySQL Server running on localhost:3306
- Database `puskesmas_db` created (from previous setup)

## Setup Instructions

### 1. Install Backend Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment

Copy the `.env.example` file and update with your database credentials:

```bash
# In the server directory
copy .env.example .env
```

Edit `.env` and update the database password if needed:
```env
DB_PASSWORD=your_mysql_password
```

### 3. Setup Admin User

Run the setup script to create the admin_users table and admin account:

```bash
npm run setup-admin
```

This will:
- Create the `admin_users` table
- Hash the admin password
- Insert/update the admin credentials

**Default Credentials:**
- Username: `admin`
- Password: `admin123`

### 4. Start the Backend Server

```bash
npm run dev
```

The server will start on `http://localhost:5000`

You should see:
```
✅ Database connected successfully
🚀 Puskesmas API Server
📡 Server running on: http://localhost:5000
```

### 5. Start the Frontend

In a new terminal, from the project root:

```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## Accessing the Admin Panel

1. Navigate to: `http://localhost:5173/admin`
2. You'll be redirected to the login page
3. Enter credentials:
   - Username: `admin`
   - Password: `admin123`
4. Click "Login"

## Features

### Authentication
- ✅ Secure login with JWT tokens
- ✅ Password hashing with bcrypt
- ✅ Protected routes
- ✅ Auto-redirect for unauthenticated users
- ✅ Token expiration (24 hours)

### Article Management
- ✅ View all articles
- ✅ Create new articles
- ✅ Edit existing articles
- ✅ Delete articles
- ✅ Toggle status (draft/published)
- ✅ Search articles
- ✅ Filter by status
- ✅ Image URL support with preview

### Dashboard Features
- 📊 Statistics (Total, Published, Drafts)
- 🔍 Search functionality
- 🎯 Status filtering
- 📝 Rich article editor
- 🖼️ Image preview
- ✅ Form validation
- 🎨 Beautiful, modern UI

## API Endpoints

### Authentication
```
POST   /api/auth/login      - Login with username/password
GET    /api/auth/verify     - Verify JWT token (protected)
POST   /api/auth/logout     - Logout
```

### Articles
```
GET    /api/articles        - Get all articles
GET    /api/articles/:id    - Get single article
POST   /api/articles        - Create article (protected)
PUT    /api/articles/:id    - Update article (protected)
DELETE /api/articles/:id    - Delete article (protected)
```

## Security Features

1. **Password Hashing**: Passwords are hashed using bcrypt with 10 salt rounds
2. **JWT Tokens**: Secure token-based authentication
3. **Protected Routes**: Admin-only endpoints require valid JWT
4. **CORS**: Configured to allow only frontend origin
5. **Environment Variables**: Sensitive data stored in .env
6. **SQL Injection Prevention**: Parameterized queries

## Troubleshooting

### Backend won't start
- Check if MySQL is running
- Verify database credentials in `.env`
- Ensure port 5000 is not in use

### Can't login
- Run `npm run setup-admin` again
- Check browser console for errors
- Verify backend is running on port 5000

### Articles not loading
- Check backend console for errors
- Verify database connection
- Check browser network tab for API errors

### CORS errors
- Ensure `FRONTEND_URL` in `.env` matches your frontend URL
- Restart backend server after changing `.env`

## Development Tips

### Changing Admin Password

1. Update `ADMIN_PASSWORD` in `.env`
2. Run `npm run setup-admin`
3. The password will be re-hashed and updated

### Adding More Admins

Modify `server/scripts/setupAdmin.js` to insert multiple admin users.

### Customizing Token Expiration

Update `JWT_EXPIRES_IN` in `.env`:
```env
JWT_EXPIRES_IN=7d  # 7 days
JWT_EXPIRES_IN=12h # 12 hours
```

## File Structure

```
server/
├── config/
│   └── db.js                 # Database configuration
├── controllers/
│   ├── authController.js     # Authentication logic
│   └── articlesController.js # Article CRUD logic
├── middleware/
│   └── auth.js               # JWT verification middleware
├── routes/
│   ├── auth.js               # Auth routes
│   └── articles.js           # Article routes
├── scripts/
│   └── setupAdmin.js         # Admin setup script
├── .env.example              # Environment template
├── package.json
└── server.js                 # Main server file

src/components/admin/
├── AdminLogin.tsx            # Login page
├── AdminDashboard.tsx        # Main dashboard
├── ArticleForm.tsx           # Create/Edit form
└── ProtectedRoute.tsx        # Route guard
```

## Production Deployment

Before deploying to production:

1. Change `JWT_SECRET` to a strong random string
2. Update `ADMIN_PASSWORD` to a secure password
3. Set `NODE_ENV=production`
4. Use HTTPS for all connections
5. Configure proper CORS origins
6. Use environment-specific `.env` files
7. Enable MySQL SSL connections
8. Implement rate limiting
9. Add logging and monitoring
10. Regular security audits

## Support

For issues or questions, check:
- Backend logs in the terminal
- Browser console for frontend errors
- Network tab for API request/response details
