import {makeAutoObservable} from "mobx";


class UserStore {

    name = 'Dima Lavrov'

    constructor() {
        makeAutoObservable(this)
    }

    setName = (name) => {
        this.name = name
    }
}

export default UserStore;

