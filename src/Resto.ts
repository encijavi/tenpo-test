export default class Resto{
    name: string;
    restoName: string;
    rating: number;
    timeAprox: number;
    logoImageUrl: string;    
    discount?: number;

    constructor(object:any){
        this.name = object.name
        this.discount = object.discount;
        this.logoImageUrl = object.logoImageUrl;
        this.restoName = object.restoName;
        this.rating = object.rating;
        this.timeAprox = object.timeAprox;
    }
}