import express from "express";
import { Router } from "express";
import router from "./auth.route.js";
import { getMessages, getUserForSidebar, sendMessage } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";


const messageRouter = express.Router();


router.get("/user",protectRoute,getUserForSidebar);
router.get("/:id",protectRoute,getMessages)

router.post("/send/:id",protectRoute,sendMessage)




export default messageRouter;