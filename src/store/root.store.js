import { createContext, useContext } from "react";
import UserStore from "./user.store";
import PostsStore from "./posts.store";


class RootStore {
    constructor () {
        this.postsStore = new PostsStore();
        this.userStore = new UserStore();
        this.postsStore.getPosts();
    }

}

export const StoresContext = createContext(new RootStore())

export const useStores = () => useContext(StoresContext)

