import Resto from "./Resto"

const restos:Resto[] = [
    {
        id: 1,
        name: "McDonalds",
        rating: 3.5,
        timeAproxMin: 10,
        timeAproxMax: 50,
        discount: 50,
        logoImageUrl: "https://public-v2links.adobecc.com/f54f4021-662d-463e-62df-5f9bcfd1b411/component?params=component_id%3A7d2efdc1-1d4e-4a5a-93ba-b78f80c914e2&params=version%3A0&token=1623187852_da39a3ee_09bc791ed944a52321c5e464ea47f4e66ba2c170&api_key=CometServer1"
    },
    {
        id: 2,
        name: "MELT pizzas",
        rating: 4.5,
        timeAproxMin: 10,
        timeAproxMax: 60,
        discount: 30,
        logoImageUrl: "https://public-v2links.adobecc.com/f54f4021-662d-463e-62df-5f9bcfd1b411/component?params=component_id%3Afb0cb89a-cd56-4d36-a21c-1ccf20146ac1&params=version%3A0&token=1623187852_da39a3ee_09bc791ed944a52321c5e464ea47f4e66ba2c170&api_key=CometServer1"
    },
    {
        id: 3,
        name: "YOKONO",
        rating: 3.5,
        timeAproxMin: 10,
        timeAproxMax: 50,
        discount: 50,
        logoImageUrl: "https://public-v2links.adobecc.com/f54f4021-662d-463e-62df-5f9bcfd1b411/component?params=component_id%3A3cb899fd-9fe9-4e82-a85b-b74fe638d0bc&params=version%3A0&token=1623187852_da39a3ee_09bc791ed944a52321c5e464ea47f4e66ba2c170&api_key=CometServer1"
    },
    {
        id: 4,
        name: "Papa John's",
        rating: 4.1,
        timeAproxMin: 10,
        timeAproxMax: 60,
        discount: 60,
        logoImageUrl: "https://public-v2links.adobecc.com/f54f4021-662d-463e-62df-5f9bcfd1b411/component?params=component_id%3A480f94ee-21e8-4ace-a5aa-960f247ef6b4&params=version%3A0&token=1623187852_da39a3ee_09bc791ed944a52321c5e464ea47f4e66ba2c170&api_key=CometServer1"
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