import { Router } from "express";
import UserController from "../controllers/userController";

const router = Router()
const userController = new UserController;

router.post('/register',userController.createUser.bind(userController))

export default router