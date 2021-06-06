import Favorite from "./Favorite"

const favs:Favorite[] = [{},{},{},{}];

class FavoriteService {
        
    async getFavorites(): Promise<Favorite[]>{
        return new Promise((resolve) => {
            resolve(favs.map( cat => new Favorite(cat)))
        })        
    }
}

export default new FavoriteService();