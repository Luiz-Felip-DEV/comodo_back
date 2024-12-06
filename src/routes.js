import { Router } from "express";
import UserController from "./app/Controllers/UserController.js";
import UserRequest from "./app/Request/UserRequest.js";


const router  = Router();

//GET

//POST
router.post('/user', UserRequest.postUser, UserController.postUser);
router.post('/login', UserRequest.postLogin, UserController.login);


//PUT

//DELETE


router.use((req, res) => {res.status(404).json({error: true,msgUser: "Rota não encontrada.",msgOriginal: "Rota não encontrada." })});

export default router 