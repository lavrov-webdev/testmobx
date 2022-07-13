import { useObserver } from "mobx-react";
import { useStores } from "../store/root.store"
import Border from "./Border";
import Post from './Post'

const Posts = () => {
    const {postsStore} = useStores();

    return useObserver( () => (
        <Border>
            <h1>Posts list</h1>
            {postsStore.posts.map(post => <Post title={post.title} author={post.author} key={post.title + post.author}/>)}
        </Border>
    ));
};

export default Posts;

