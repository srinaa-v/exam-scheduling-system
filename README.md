# Exam Scheduling System

A full-stack web application for managing and scheduling exams, examination halls, and subjects. Built with React.js for the frontend and Node.js/Express for the backend.

## 📋 Overview

The Exam Scheduling System is designed to streamline the process of organizing and scheduling academic examinations. It provides administrators with tools to manage exams, subjects, examination halls, and generate conflict-free exam timetables.

## ✨ Key Features

- **User Authentication & Security**
  - Secure login system
  - Protected routes with authentication checks
  - Session management

- **Exam Management**
  - Create and manage exams
  - Assign subjects to exams
  - Set exam dates and times
  - Track exam details

- **Subject Management**
  - Add and organize subjects/courses
  - Manage subject information
  - Associate subjects with exams

- **Hall Management**
  - Manage examination halls
  - Track hall capacity
  - Assign halls to exams

- **Scheduling & Timetable**
  - Intelligent exam scheduling
  - Automatic conflict detection
  - Generate comprehensive exam timetables
  - View exam schedules by date, subject, or hall

- **Dashboard**
  - Overview of system statistics
  - Quick access to key functions
  - Recent activity tracking

- **Responsive UI**
  - Mobile-friendly design
  - Intuitive interface
  - Easy navigation

## 🛠 Technology Stack

### Frontend
- **React.js 18** - UI library
- **React Router** - Client-side routing
- **CSS3** - Styling and layouts
- **Fetch API** - HTTP requests

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **RESTful API** - Architecture pattern

### Database
- MongoDB (if applicable to your setup)
- Or SQL database (based on your backend setup)

## 📁 Project Structure

```
exam-scheduling-system/
├── backend/                              # Backend server
│   ├── models/                          # Data models
│   │   ├── Exam.js                      # Exam model
│   │   ├── Hall.js                      # Hall model
│   │   └── Subject.js                   # Subject model
│   ├── routes/                          # API routes
│   │   ├── examRoutes.js                # Exam endpoints
│   │   ├── hallRoutes.js                # Hall endpoints
│   │   └── subjectRoutes.js             # Subject endpoints
│   ├── server.js                        # Express server
│   ├── package.json                     # Dependencies
│   └── .env                             # Environment variables
├── frontend/                             # React application
│   ├── public/
│   │   ├── index.html                   # Main HTML file
│   │   ├── manifest.json                # PWA manifest
│   │   └── robots.txt                   # SEO robots
│   ├── src/
│   │   ├── components/                  # React components
│   │   │   ├── Layout.js                # Main layout
│   │   │   └── ProtectedRoute.js        # Route protection
│   │   ├── pages/                       # Page components
│   │   │   ├── Dashboard.js             # Dashboard page
│   │   │   ├── Login.js                 # Login page
│   │   │   ├── ScheduleExam.js          # Exam scheduling
│   │   │   ├── ExamTimetable.js         # Timetable view
│   │   │   ├── ManageSubjects.js        # Subject management
│   │   │   └── ManageHalls.js           # Hall management
│   │   ├── App.js                       # Main App component
│   │   ├── index.js                     # React entry point
│   │   ├── App.css                      # Global styles
│   │   └── index.css                    # Main styles
│   ├── build/                           # Production build
│   ├── package.json                     # Dependencies
│   └── README.md                        # Frontend documentation
├── README.md                            # This file
└── .gitignore                           # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** v14.0 or higher
- **npm** v6.0 or higher
- **Git** (for cloning the repository)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/exam-scheduling-system.git
cd exam-scheduling-system
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file with configuration
echo "PORT=5000" > .env
echo "DATABASE_URL=your_database_url" >> .env
echo "JWT_SECRET=your_secret_key" >> .env

# Start the backend server
npm start
```

The backend API will be available at `http://localhost:5000`

#### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will open at `http://localhost:3000`

## 🎯 Running the Application

### Development Mode

Open two terminals:

**Terminal 1 - Backend Server:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend Development Server:**
```bash
cd frontend
npm start
```

### Production Build

Build the frontend for production:

```bash
cd frontend
npm run build
```

This generates an optimized build in the `frontend/build/` directory.

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Exam Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/exams` | Get all exams |
| POST | `/exams` | Create a new exam |
| GET | `/exams/:id` | Get exam by ID |
| PUT | `/exams/:id` | Update exam |
| DELETE | `/exams/:id` | Delete exam |

### Subject Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/subjects` | Get all subjects |
| POST | `/subjects` | Create a new subject |
| GET | `/subjects/:id` | Get subject by ID |
| PUT | `/subjects/:id` | Update subject |
| DELETE | `/subjects/:id` | Delete subject |

### Hall Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/halls` | Get all halls |
| POST | `/halls` | Create a new hall |
| GET | `/halls/:id` | Get hall by ID |
| PUT | `/halls/:id` | Update hall |
| DELETE | `/halls/:id` | Delete hall |

## 🔐 Authentication

The system uses JWT (JSON Web Tokens) for authentication:

1. User logs in via `/login` endpoint
2. Server returns JWT token
3. Token is stored in browser local storage
4. Token is sent with each API request
5. Protected routes check token validity

### Login Payload
```json
{
  "username": "admin",
  "password": "password123"
}
```

### Response
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "user_id",
    "username": "admin",
    "role": "admin"
  }
}
```

## 🎨 Pages Overview

### Login Page
- User authentication
- Credentials validation
- Session initiation

### Dashboard
- System overview
- Statistics and metrics
- Quick access links
- Recent activities

### Schedule Exam
- Create new exams
- Select subjects
- Assign halls
- Set date and time
- Conflict checking

### Exam Timetable
- View all scheduled exams
- Filter by date/subject/hall
- Export timetable
- Print functionality

### Manage Subjects
- View all subjects
- Add new subjects
- Edit subject details
- Delete subjects

### Manage Halls
- View all examination halls
- Add new halls
- Edit hall information
- Delete halls

## 🧹 Available Scripts

### Frontend

```bash
npm start          # Start development server
npm test           # Run tests
npm run build      # Create production build
npm run eject      # Eject from Create React App (irreversible)
```

### Backend

```bash
npm start          # Start Express server
npm run dev        # Start with nodemon (if available)
npm test           # Run tests (if available)
```

## 🐛 Troubleshooting

### Port Already in Use

**Frontend:**
```bash
PORT=3001 npm start
```

**Backend:**
Edit `server.js` and update the port number, or set environment variable:
```bash
PORT=5001 npm start
```

### CORS Errors

Ensure the backend CORS configuration includes your frontend URL:
```javascript
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

### Module Not Found

Clear and reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

1. Check Node.js version: `node --version`
2. Clear build cache: `rm -rf build/`
3. Rebuild: `npm run build`

### Database Connection Issues

Verify database credentials in `.env` file and ensure the database server is running.

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| IE 11 | ❌ Not supported |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, issues, or questions:

1. Check the [Frontend README](frontend/README.md) for frontend-specific help
2. Check the backend documentation if available
3. Create an issue in the repository
4. Contact the development team

## 📞 Contact

- **Project Manager**: [Your Name]
- **Email**: your.email@example.com
- **GitHub**: [Your Profile]

## 🗺️ Roadmap

Future features planned:

- [ ] Email notifications for exam schedules
- [ ] SMS reminders for students
- [ ] Analytics and reporting dashboard
- [ ] Exam result management
- [ ] Student portal access
- [ ] Multi-language support
- [ ] Mobile application
- [ ] Advanced conflict resolution algorithms

## 🙏 Acknowledgments

- React.js documentation
- Express.js community
- All contributors and testers

---

**Last Updated**: February 13, 2026

**Version**: 1.0.0

Happy scheduling! 📅
