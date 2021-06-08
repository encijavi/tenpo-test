import Category from "./Category"

const cates:Category[] = [
    {
        id: 1,
        name: "HAMBURGUESAS",
        imageUrl: "4ea7b9417047c0769b6e390254aaef75.png"
    },
    {
        id: 2,
        name: "ITALIANA",
        imageUrl: "https://public-v2links.adobecc.com/f54f4021-662d-463e-62df-5f9bcfd1b411/component?params=component_id%3Afb0cb89a-cd56-4d36-a21c-1ccf20146ac1&params=version%3A0&token=1623187852_da39a3ee_09bc791ed944a52321c5e464ea47f4e66ba2c170&api_key=CometServer1"
    },
    {
        id: 3,
        name: "SUSHI",
        imageUrl: "https://public-v2links.adobecc.com/f54f4021-662d-463e-62df-5f9bcfd1b411/component?params=component_id%3A3cb899fd-9fe9-4e82-a85b-b74fe638d0bc&params=version%3A0&token=1623187852_da39a3ee_09bc791ed944a52321c5e464ea47f4e66ba2c170&api_key=CometServer1"
    },
];

class CategoryService {
        
    async getCategories(): Promise<Category[]>{
        return new Promise((resolve) => {
            resolve(cates.map( cat => new Category(cat)))
        })        
    }
}

export default new CategoryService();