import { Router } from "express";
import mailControllers from "../controllers/mail.controllers.js";

const router = Router();

router.post("/", mailControllers.send)

export default router;
