# Deployment Configuration

## ✅ Frontend Configuration Complete

Your frontend has been configured to use the deployed backend at:
- **Backend URL**: https://exam-scheduling-backend-idxr.onrender.com
- **Frontend URL**: https://exam-scheduling-system.onrender.com

### What Changed:
1. Created `.env` file with API URL configuration
2. Created `src/config.js` for centralized API management
3. Updated all 6 component files to use the new API configuration
4. Generated optimized production build in `build/` folder
5. Updated backend CORS to allow the specific frontend URL

## Backend CORS Configuration ✅

Updated `server.js` to allow requests from your deployed frontend:
```javascript
app.use(cors({
  origin: "https://exam-scheduling-system.onrender.com",
  credentials: true
}));
```

### Option 1: **Deploy to Render** (Recommended - Same platform as backend)
1. Create a new account/login at https://render.com
2. Create a new "Static Site" service
3. Connect your Git repository
4. Build command: `npm run build`
5. Publish directory: `build`
6. Deploy and get your frontend URL

### Option 2: **Deploy to Vercel**
1. Go to https://vercel.com and login with GitHub
2. Import your project
3. Deploy - it will automatically detect React and build correctly

### Option 3: **Deploy to Netlify**
1. Go to https://netlify.com
2. Connect Git repository
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy

---

Your frontend is now ready to be deployed! Choose any option above.
