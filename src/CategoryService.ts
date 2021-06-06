import Category from "./Category"

const cates:Category[] = [{},{},{},{},{},{}];

class CategoryService {
        
    async getCategories(): Promise<Category[]>{
        return new Promise((resolve) => {
            resolve(cates.map( cat => new Category(cat)))
        })        
    }
}

export default new CategoryService();