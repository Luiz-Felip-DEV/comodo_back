import LocalRepository from "../Repositories/LocalRepository.js";

class LocalController {
    
    async getsLocal(req, res)
    {
        let arrReturn = [];
        
        try {
            arrReturn = await LocalRepository.getComodos();
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
            local: arrReturn
        });
    }
}


export default new LocalController();