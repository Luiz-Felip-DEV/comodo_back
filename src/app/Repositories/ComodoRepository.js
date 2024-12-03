import conexao from "../DataBase/conexao.js";

class ComodoRepository {

    postComodo(dados) {

        const sql = "INSERT INTO comodo SET ?";

        return new Promise((resolve, reject) => {
            conexao.query(sql,dados,(error, result) => {
                if (error) return reject(false);

                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }

    getComodos(id)
    {
        const sql = "SELECT id, name FROM comodo where user_id = ?";
    
        return new Promise((resolve, reject) => {
            conexao.query(sql,id,(error, result) => {
                if (error) return reject(false);

                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }

    async deleteComodo(id)
    {
        const sql = 'DELETE FROM comodo WHERE id = ?';

        return new Promise((resolve, reject) => {
            conexao.query(sql,id,(error, result) => {
                if (error) return reject(false);

                const row = JSON.parse(JSON.stringify(result));

                return resolve(row);
            });
        });
    }

    async putComodo(id, name)
    {   
        const sql = 'UPDATE comodo SET name = ? WHERE id = ?';

        return new Promise((resolve, reject) => {
            conexao.query(sql,[name, id],(error, result) => {
                if (error) return reject(false);

                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            });
        });
    }

}

export default new ComodoRepository();