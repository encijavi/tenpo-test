export default class Favorite{
    name: string;
    restoName: string;
    rating: number;
    timeAprox: number;
    backgroundImageUrl: string;
    logoImageUrl: string;    

    constructor(object:any){
        this.name = object.name
        this.backgroundImageUrl = object.backgroundImageUrl;
        this.logoImageUrl = object.logoImageUrl;
        this.restoName = object.restoName;
        this.rating = object.rating;
        this.timeAprox = object.timeAprox;
    }
}