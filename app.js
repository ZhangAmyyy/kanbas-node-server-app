import "dotenv/config";
import express from 'express'
import cors from "cors";
import UserRoutes from "./users/routes.js";

import session from "express-session";


import Hello from "./hello.js"
import Lab5 from './Lab5.js';
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import AssignmentRoutes from './Assignment/routes.js';
import "dotenv/config";
import mongoose from "mongoose";
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

// const uri = "mongodb+srv://test:<password>@atlascluster.wedmycv.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect("mongodb+srv://test:123@atlascluster.wedmycv.mongodb.net/?retryWrites=true&w=majority");
const app = express()
app.use(
    cors({
      credentials: true,
      // origin: process.env.FRONTEND_URL
      // origin: "http://localhost:3000",
      origin: process.env.FRONTEND_URL

    })
    
  );
  
  
app.use(express.json());
// const sessionOptions = {
//   secret: "any string",
//   resave: false,
//   saveUninitialized: false,
// };

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}

app.use(session(sessionOptions));
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);
Lab5(app);
Hello(app)
app.listen(process.env.PORT || 4000);
