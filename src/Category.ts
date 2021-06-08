import GenericModel from "./GenericModel";

export default class Category extends GenericModel{
    name: string;
    imageUrl: string;

    constructor(object:any){
        super(object);
        this.name = object.name
        this.imageUrl = object.imageUrl
    }
}