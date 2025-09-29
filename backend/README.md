SIH Backend (Express + MongoDB)

Copy .env.example to .env and set MONGO_URI and JWT_SECRET

Commands:
  npm install
  npm run dev

API examples:
 POST /api/auth/signup  {name,email,password}
 POST /api/auth/login   {email,password}
 POST /api/reports (auth) multipart/form-data image + fields lat,lng,title,description
 GET /api/reports
