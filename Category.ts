export default class Category{
    name: string;
    imageUrl: string;

    constructor(object:any){
        this.name = object.name
        this.imageUrl = object.imageUrl
    }
}