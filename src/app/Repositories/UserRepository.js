
import conexao from "../DataBase/conexao.js";

class UserRepository {

    postUser(dados)
    {
        const sql = "INSERT INTO users SET ?";

        return new Promise((resolve, reject) => {
            conexao.query(sql,dados,(error, result) => {
                if (error) return reject(false);

                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }

    verifyEmail(email)
    {
        const sql = "SELECT * FROM users where email = ?";
    
        return new Promise((resolve, reject) => {
            conexao.query(sql,email,(error, result) => {
                if (error) return reject(false);

                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }
    
    login(email, password)
    {
        const sql = "SELECT id, name FROM users where email = ? and password = ?";
    
        return new Promise((resolve, reject) => {
            conexao.query(sql,[email,password],(error, result) => {
                if (error) return reject(false);

                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    } 

    getPassword(email) 
    {
        const sql = "SELECT password FROM users where email = ?";
    
        return new Promise((resolve, reject) => {
            conexao.query(sql,email,(error, result) => {
                if (error) return reject(false);

                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }
}

export default new UserRepository();