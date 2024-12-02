import UserRepository from "../Repositories/UserRepository.js";

class UserUtils {

    /**
     * 
     * @param {*} nome 
     * formata um nome
     * @returns 
     */

    formatarNome(nome)
    {
        const arrNome = nome.split(' ');
        for (let i = 0; i < arrNome.length; i++) {
            arrNome[i] = arrNome[i].charAt(0).toUpperCase() + arrNome[i].slice(1);
        }

        return arrNome.join(' ');
    }

    /**
     * 
     * @param {*} email 
     * valida se um email é valido
     * @returns 
     */
    emailValido(email)
    {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    async verifyEmail(email)
    {
        const arrReturn = await UserRepository.verifyEmail(email);

        // console.log(arrReturn);
        // return;

        const verify = (arrReturn[0]) ? true : false;

        return verify;
    }
}

export default new UserUtils();