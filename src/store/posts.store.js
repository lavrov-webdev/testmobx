import axios from "axios";
import {makeAutoObservable} from "mobx";


class PostsStore {
    constructor() {
        makeAutoObservable(this)
    }

    posts = [];

    getPosts = async () => {
        const responce = await axios.get('http://localhost:1337/posts')
        this.posts = responce.data;
    }

    addPost = async (post) => {
        await axios.post('http://localhost:1337/posts', post)
        this.getPosts();
    }

}

export default PostsStore;

