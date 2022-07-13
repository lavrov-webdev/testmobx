import {useStores} from "../store/root.store";
import { useState } from "react";
import Border from "./Border";


const EditUser = () => {
    const [newName, setNewName] = useState('')
    const { userStore } = useStores();
    
    return (
         <Border>
            <h1>Edit User Profile</h1>
            <input value={newName} onChange={e => setNewName(e.target.value)}/>
            <button onClick={() => userStore.setName(newName)} >Update</button>
        </Border>
    )
}

export default EditUser;

