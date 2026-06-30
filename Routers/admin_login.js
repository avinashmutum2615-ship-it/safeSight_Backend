import express from "express";
import { admin_login } from "../Controller/admin_login.js";


const router = express.Router();

router.post('/login',admin_login);

export default router;