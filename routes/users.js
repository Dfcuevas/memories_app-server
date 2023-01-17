import express from "express";
import { signin, signup } from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signin); // es post por que necesitamos enviar los datos al backend
router.post("/signup", signup);

export default router;
