import ComodoRepository from "../Repositories/ComodoRepository.js";

class ComodoController {

    async postComodo(req, res)
    {
        try {
            await ComodoRepository.postComodo(req.dados);
        } catch ($e) {
            return res.status(400).json({
                error: true,
                msgUser: "Ocorreu um erro ao cadastrar usuario.",
                msgOriginal: "Caiu no catch."
            });
        }

        return res.status(200).json({
            error: false,
            msgUser: "Comodo cadastrado com sucesso.",
            msgOriginal: null
        });
    }   
}


export default new ComodoController();