import express from 'express'
import cors from "cors";
import Hello from "./hello.js"
import Lab5 from './Lab5.js';
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import AssignmentRoutes from './Assignment/routes.js';
import "dotenv/config";
import session from "express-session";
const app = express()
app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL
    })
  );
  
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);
Hello(app)
app.listen(process.env.PORT || 4000);
