import jwt from 'jsonwebtoken';
class Jwt {

    checkToken(req, res, next) {

        const authHeader = req.headers['authorization'];
        const token      = authHeader && authHeader.split(" ")[1];
    
        if (!token) {

            return res.status(400).json({
                error: true,
                msgUser: "Token não encontrado",
                msgOriginal: "Token não encontrado"
            });
        }
    
        try {

            jwt.verify(token, process.env.SECRET);
            next();

        } catch(error) {

            const typeErro = error.message;
            let msg        = 'Token Expirado.';

            if (typeErro == "invalid signature")
            {
                msg = 'Token Invalido.';
            } 
        
            return res.status(400).json({
                error: true,
                msgUser: msg,
                msgOriginal: msg
            });
        }
    }


    getIdFromToken(req, secret) 
    {
        const authHeader = req.headers['authorization'];
        const token      = authHeader && authHeader.split(" ")[1];

        
        try {
            const decoded = jwt.verify(token, secret); // Valida e decodifica o token
            return decoded.id; // Retorna o campo 'id' do payload
        } catch (err) {
            console.error('Erro ao verificar token:', err.message);
            return null; // Retorna null se o token for inválido
        }
    }
}

export default new Jwt();