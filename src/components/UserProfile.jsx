import {observer} from "mobx-react";
import React from "react";
import {StoresContext} from "../store/root.store";
import Border from "./Border";

const UserProfile = observer(
    class UserProfile extends React.Component {
        render() {
            return <Border><h1>User Profile</h1>{this.context.userStore.name}</Border>
        }
    }
)

UserProfile.contextType = StoresContext;

export default UserProfile;

