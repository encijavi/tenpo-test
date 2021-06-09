import globals from "../globals";
import Resto from "./Resto"

const restos:Resto[] = [
    {
        id: 1,
        name: "McDonalds",
        rating: 3.5,
        timeAproxMin: 10,
        timeAproxMax: 50,
        discount: 50,
        logoImageSource: globals.images.chainLogo.mcdonalds
    },
    {
        id: 2,
        name: "MELT pizzas",
        rating: 4.5,
        timeAproxMin: 10,
        timeAproxMax: 60,
        discount: 30,
        logoImageSource: globals.images.chainLogo.melt
    },
    {
        id: 3,
        name: "YOKONO",
        rating: 3.5,
        timeAproxMin: 10,
        timeAproxMax: 50,
        discount: 50,
        logoImageSource: globals.images.chainLogo.yokono
    },
    {
        id: 4,
        name: "Papa John's",
        rating: 4.1,
        timeAproxMin: 10,
        timeAproxMax: 60,
        discount: 60,
        logoImageSource: globals.images.chainLogo.papajohns
    },
];

class RestoService {
        
    async getRestos(): Promise<Resto[]>{
        return new Promise((resolve) => {
            resolve(restos.map( cat => new Resto(cat)))
        })        
    }
}

export default new RestoService();