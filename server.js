import express from "express";
import mongoose from "mongoose";
import appointmentRouter from "./Routers/appointment.js";
import { config } from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import  adminRouter  from "./Routers/admin_login.js";

const app = express();

config({ path: ".env" });

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, "../safesight-website")));

// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../safesight-website/index.html"));
});

// API Routes
app.use("/api/appointments", appointmentRouter);

app.use('/api/admin', adminRouter);

// MongoDB Connection
mongoose
  .connect(
    process.env.MONGODB_URL,
    {
      dbName: "appointments",
    }
  )
  .then(() => console.log("MongoDB connected...!"))
  .catch((err) => console.log(err));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
