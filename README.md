```markdown
# Express + Mongoose — Welcome API

A small starter repository demonstrating:
- Express server with a welcome endpoint
- Mongoose connection + simple User model
- Basic CRUD functions for the model

Prerequisites
- Node 18+
- MongoDB connection string (Atlas or local)

Getting started
1. Copy files into a new project directory.
2. Create a `.env` file based on `.env.example` and set MONGODB_URI.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the app:
   ```bash
   npm run dev
   # or
   npm start
   ```

API
- GET / -> Welcome message
- Users:
  - POST /api/users         -> Create user (body: { "name": "...", "email": "..." })
  - GET  /api/users         -> List users
  - GET  /api/users/:id     -> Get user by id
  - PUT  /api/users/:id     -> Update user
  - DELETE /api/users/:id   -> Delete user

Examples
```bash
# create
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name":"Alice","email":"alice@example.com"}'

# list
curl http://localhost:3000/api/users

# welcome
curl http://localhost:3000/
```
```
