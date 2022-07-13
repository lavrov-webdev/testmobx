import {useObserver} from "mobx-react";
import {useStores} from "../store/root.store"
import { useState } from "react";
import Border from './Border'

const AddPost = () => {
    const {postsStore, userStore} = useStores();
    const [newId, setNewId] = useState('');
    const [newTitle, setNewTitle] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        postsStore.addPost({
            id: newId,
            title: newTitle,
            author: userStore.name
        })
    }

    return useObserver(() => (
        <form onSubmit={submitHandler}>
            <Border>
                <h1>Add Post</h1>
                <div><input value={newId} onChange={e => setNewId(e.target.value)}/></div>
                <div><input value={newTitle} onChange={e => setNewTitle(e.target.value)}/></div>
                <button type="submit">Add</button>
            </Border>
        </form>
    ))
}


export default AddPost;

