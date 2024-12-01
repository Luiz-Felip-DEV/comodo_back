import UserRepository from "../Repositories/UserRepository.js";
import UserUtils from "../Utils/UserUtils.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config';

class UserController {

    async postUser(req, res)
    {
        req.body.name = UserUtils.formatarNome(req.body.name);

        try {
            await UserRepository.postUser(req.body);
        } catch ($e) {
            return res.status(400).json({
                error: true,
                msgUser: "Ocorreu um erro ao cadastrar usuario.",
                msgOriginal: "Caiu no catch."
            });
        }

        return res.status(200).json({
            error: false,
            msgUser: "Usuario cadastrado com sucesso.",
            msgOriginal: null
        });
    }

    async login(req, res)
    { 
        const email    = req.body.email;
        const password = req.body.password
        let arrDados   = [];
        let verify     = false;

        arrDados = await UserRepository.login(email, password);

        try {

            arrDados = await UserRepository.login(email, password);
            verify   = (!arrDados[0]) ? true : false;

        } catch (error) {
            console.error(error.message);
            console.log(error.stack);
            return res.status(400).json({
                error: true,
                msgUser: "Dados incorretos.",
                msgOriginal: "Dados incorretos passado pelo usuario."
            });
        }

        if (verify) {
            return res.status(400).json({
                error: true,
                msgUser: "Dados incorretos.",
                msgOriginal: "Dados incorretos passado pelo usuario."
            });
        }

        const secret         = process.env.SECRET;
        const tempoExpiracao = 4 * 60 * 60;

        const token = jwt.sign({
            id: arrDados[0].id,
            name: arrDados[0].name
        },
        secret,{ expiresIn: tempoExpiracao });

        delete arrDados[0].id;
        
        return res.status(200).json({
            error: false,
            msgUser: "Usuario com credenciais aceita.",
            msgOriginal: null,
            jwt: token,
            results: arrDados
        });
    }
}

export default new UserController();