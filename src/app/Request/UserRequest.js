import UserUtils from "../Utils/UserUtils.js";

class UserRequest {

    postUser(req, res, next)
    {
        let msg = '';

        if (!req.body.name) {
            msg = 'Parametro name é obrigatorio.';
        }

        if (!req.body.email) {
            msg = 'Parametro email é obrigatorio.';
        }

        if (!req.body.password) {
            msg = 'Parametro password é obrigatorio.';
        }

        if (!UserUtils.emailValido(req.body.email)) {
            msg = 'Email invalido.';
        }

        if (UserUtils.verifyEmail(req.body.email)) {
            msg = 'Esse email ja está cadastrado na base de dados.';
        }

        if(msg) {
            return res.status(400).json({
                error: true,
                msgUser: msg,
                msgOriginal: msg
            });
        }

        next();
    }

    postLogin(req, res, next)
    {
        let msg = '';

        if (!req.body.email) {
            msg = 'Parametro email é obrigatorio.';
        }

        if (!req.body.password) {
            msg = 'Parametro password é obrigatorio.';
        }

        if (!UserUtils.emailValido(req.body.email)) {
            msg = 'Email invalido.';
        }

        if(msg) {
            return res.status(400).json({
                error: true,
                msgUser: msg,
                msgOriginal: msg
            });
        }

        next();
    }

}

export default new UserRequest();