import { Router } from "express";
import UserController from "../controllers/userController";

const router = Router()
const userController = new UserController;

router.post('/register',userController.createUser.bind(userController));
router.get('/all-users',userController.getAllUsers.bind(userController));
router.post('/update/:id',userController.updateUser.bind(userController));

export default router