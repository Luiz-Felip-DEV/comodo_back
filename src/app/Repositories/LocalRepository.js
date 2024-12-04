import conexao from "../DataBase/conexao.js";

class LocalRepository {

    getComodos()
    {
        const sql = "SELECT * FROM local";
    
        return new Promise((resolve, reject) => {
            conexao.query(sql,(error, result) => {
                if (error) return reject(false);

                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }
}

export default new LocalRepository();