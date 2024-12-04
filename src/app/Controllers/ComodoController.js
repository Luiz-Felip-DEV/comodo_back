import ComodoRepository from "../Repositories/ComodoRepository.js";
import JwtUtils from "../Utils/JwtUtils.js";

class ComodoController {

    async postComodo(req, res)
    {   
        const id         = JwtUtils.getIdFromToken(req);
        req.body.user_id = id;

        try {
            await ComodoRepository.postComodo(req.body);
        } catch ($e) {
            return res.status(400).json({
                error: true,
                msgUser: "Ocorreu um erro ao cadastrar comodo.",
                msgOriginal: "Caiu no catch."
            });
        }

        return res.status(200).json({
            error: false,
            msgUser: "Comodo cadastrado com sucesso.",
            msgOriginal: null
        });
    }  
    
    async getComodos(req, res)
    {
        const id      = JwtUtils.getIdFromToken(req);
        let arrReturn = [];

        try {
            arrReturn = await ComodoRepository.getComodos(id);
        } catch ($e) {
            return res.status(400).json({
                error: true,
                msgUser: "Ocorreu um erro ao cadastrar comodo.",
                msgOriginal: "Caiu no catch."
            });
        }

        return res.status(200).json({
            error: false,
            msgUser: null,
            msgOriginal: null,
            comodos: arrReturn
        });
    }

    async deleteComodo(req, res)
    {
        let verify    = false;

        try {
            const arrReturn = await ComodoRepository.deleteComodo(req.query.id);
            verify          = (arrReturn.affectedRows != 1) ? true : false; 
        } catch ($e) {
            return res.status(400).json({
                error: true,
                msgUser: "Ocorreu um erro ao deletar comodo.",
                msgOriginal: "Caiu no catch."
            });
        }

        if (verify) {
            return res.status(400).json({
                error: true,
                msgUser: "Comodo nao encontrado.",
                msgOriginal: "Comodo nao encontrado."
            });
        }

        return res.status(200).json({
            error: false,
            msgUser: 'Comodo deletado com sucesso.',
            msgOriginal: null
        });
    }

    async putComodo(req, res)
    {
        const id   = req.query.id;
        const name = req.body.convenient_name;
        let verify = false;


        try {
            const arrReturn = await ComodoRepository.putComodo(id, name);
            verify          = (arrReturn.affectedRows != 1) ? true : false;
        }catch($e){

        } 

        if (verify) {
            return res.status(400).json({
                error: true,
                msgUser: "Comodo nao encontrado.",
                msgOriginal: "Comodo nao encontrado."
            });
        }
    
        return res.status(200).json({
            error: false,
            msgUser: 'Comodo atualizado com sucesso.',
            msgOriginal: null
        });
    }
}


export default new ComodoController();