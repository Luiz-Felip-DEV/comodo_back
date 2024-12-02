
class ComodoRequest {

    postComodo(req, res, next)
    {
        let msg = '';

        if (!req.body.name) {
            msg = 'Parametro name é obrigatorio.';
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

    deleteComodo(req, res, next)
    {
        let msg = '';

        if (!req.query.id) {
            msg = 'Parametro id é obrigatorio.';
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

export default new ComodoRequest();