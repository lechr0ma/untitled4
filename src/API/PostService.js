import axios from "axios";

export default class PostService {
     static async getAll(limit , page){
        let result = await axios.get('https://jsonplaceholder.typicode.com/posts',
            {params:{
                _limit: limit,
                _page: page
                }})
         return result
    }
}