import Resto from "./Resto"

const restos:Resto[] = [{},{},{},{}];

class RestoService {
        
    async getRestos(): Promise<Resto[]>{
        return new Promise((resolve) => {
            resolve(restos.map( cat => new Resto(cat)))
        })        
    }
}

export default new RestoService();