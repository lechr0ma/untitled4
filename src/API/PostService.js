import axios from "axios";

export default class PostService {
     static async getAll(){
        let result = await axios.get('https://jsonplaceholder.typicode.com/posts')
         return result.data
    }
}