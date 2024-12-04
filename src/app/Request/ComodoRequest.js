
class ComodoRequest {

    postComodo(req, res, next)
    {
        let msg = '';

        if (!req.body.type_convenient) {
            msg = 'Parametro type_convenient é obrigatorio.';
        }

        if (!req.body.local) {
            msg = 'Parametro local é obrigatorio.';
        }

        if (!req.body.convenient_name) {
            msg = 'Parametro convenient_name é obrigatorio.';
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

    
    putComodo(req, res, next)
    {
        let msg = '';

        if (!req.query.id) {
            msg = 'Parametro id é obrigatorio.';
        }

        if (!req.body.convenient_name) {
            msg = 'Parametro convenient_name é obrigatorio.';
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