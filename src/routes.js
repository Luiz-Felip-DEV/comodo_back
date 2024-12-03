import { Router } from "express";
import ComodoController from "./app/Controllers/ComodoController.js";
import ComodoRequest from "./app/Request/ComodoRequest.js";
import UserController from "./app/Controllers/UserController.js";
import UserRequest from "./app/Request/UserRequest.js";
import Jwt from "./app/Utils/JwtUtils.js";

const router  = Router();

//GET
router.get('/comodos', Jwt.checkToken, ComodoController.getComodos);

//POST
router.post('/user', UserRequest.postUser, UserController.postUser);
router.post('/login', UserRequest.postLogin, UserController.login);
router.post('/comodo', Jwt.checkToken, ComodoRequest.postComodo, ComodoController.postComodo);


//PUT
router.put('/comodo', Jwt.checkToken, ComodoRequest.putComodo, ComodoController.putComodo);


//DELETE
router.delete('/comodo', Jwt.checkToken, ComodoRequest.deleteComodo, ComodoController.deleteComodo);


router.use((req, res) => {res.status(404).json({error: true,msgUser: "Rota não encontrada.",msgOriginal: "Rota não encontrada." })});

export default router 