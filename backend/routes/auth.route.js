import express from "express"
import { deleteUser, getAllUsers, signin, signout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/signout', signout)
router.get('/all', getAllUsers)
router.delete('/delete/:userId', deleteUser);

export default router;