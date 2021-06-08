import globals from "../globals";
import Category from "./Category"

const cates:Category[] = [
    {
        id: 1,
        name: "HAMBURGUESAS",
        imageSource: globals.images.cagetory.hamburger
    },
    {
        id: 2,
        name: "ITALIANA",
        imageSource: globals.images.cagetory.italian
    },
    {
        id: 3,
        name: "PIZZA",
        imageSource: globals.images.cagetory.pizza
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