import UserProfile from "./components/UserProfile";
import EditUser from './components/EditUser'
import Posts from "./components/Posts";
import AddPost from './components/AddPost'

const App = () => {
    return (
        <>
            <UserProfile/>
            <AddPost />
            <Posts/>
            <EditUser/>
        </>
    )
};

export default App;

