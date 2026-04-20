# Exam Scheduling System

A comprehensive full-stack web application for managing and scheduling exams, halls, and subjects. This system provides an intuitive interface for administrators to create exam timetables and manage examination logistics.

## Features

- **User Authentication**: Secure login system with authentication
- **Dashboard**: Overview of all exams and system statistics
- **Exam Management**: Create, edit, and manage exams
- **Subject Management**: Add and manage subjects/courses
- **Hall Management**: Manage examination halls and capacity
- **Exam Scheduling**: Intelligently schedule exams with conflict detection
- **Exam Timetable**: View comprehensive exam timetables
- **Protected Routes**: Role-based access control
- **Responsive Design**: Mobile-friendly interface

## Technology Stack

### Frontend
- **React.js**: UI library
- **CSS3**: Styling
- **React Router**: Navigation and routing
- **Fetch API**: HTTP client for API calls

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **RESTful API**: Architecture pattern

## Project Structure

```
exam-scheduling-system/
├── backend/
│   ├── models/
│   │   ├── Exam.js
│   │   ├── Hall.js
│   │   └── Subject.js
│   ├── routes/
│   │   ├── examRoutes.js
│   │   ├── hallRoutes.js
│   │   └── subjectRoutes.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.js
│   │   │   └── ProtectedRoute.js
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── ExamTimetable.js
│   │   │   ├── Login.js
│   │   │   ├── ManageHalls.js
│   │   │   ├── ManageSubjects.js
│   │   │   └── ScheduleExam.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── setupTests.js
│   ├── package.json
│   └── README.md
└── README.md (this file)
```

## Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000` (or your configured port)

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The application will open in your browser at `http://localhost:3000`

## Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
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

This creates an optimized build in the `build/` folder ready for deployment.

## Available Scripts

### Frontend Scripts

- `npm start` - Runs the React development server on port 3000
- `npm test` - Launches the test runner in watch mode
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

### Backend Scripts

- `npm start` - Starts the Express server

## Pages and Components

### Pages
- **Login**: User authentication page
- **Dashboard**: Main dashboard with overview
- **ScheduleExam**: Create and schedule new exams
- **ExamTimetable**: View scheduled exam timetable
- **ManageSubjects**: Manage subjects/courses
- **ManageHalls**: Manage examination halls

### Components
- **Layout**: Main layout wrapper with navigation
- **ProtectedRoute**: Route protection for authenticated pages

## API Endpoints

### Exams
- `GET /api/exams` - Get all exams
- `POST /api/exams` - Create a new exam
- `PUT /api/exams/:id` - Update an exam
- `DELETE /api/exams/:id` - Delete an exam

### Subjects
- `GET /api/subjects` - Get all subjects
- `POST /api/subjects` - Create a new subject
- `PUT /api/subjects/:id` - Update a subject
- `DELETE /api/subjects/:id` - Delete a subject

### Halls
- `GET /api/halls` - Get all halls
- `POST /api/halls` - Create a new hall
- `PUT /api/halls/:id` - Update a hall
- `DELETE /api/halls/:id` - Delete a hall

## Authentication

The application uses token-based authentication. Users must log in through the Login page to access protected routes.

## Styling

Each page and component has an associated CSS file for styling:
- `pages/*.css` - Page-specific styles
- `components/*.css` - Component-specific styles
- `App.css` - Global application styles
- `index.css` - Global index styles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## Troubleshooting

### Port Already in Use
If port 3000 or 5000 is already in use, you can specify a different port:
- Frontend: `PORT=3001 npm start`
- Backend: Modify the port in `server.js` or set environment variable

### CORS Issues
Ensure the backend server is running and the origin is properly configured in CORS settings.

### Build Fails
Try clearing node_modules and reinstalling:
```bash
rm -rf node_modules
npm install
npm start
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For issues or questions, please create an issue in the project repository.
