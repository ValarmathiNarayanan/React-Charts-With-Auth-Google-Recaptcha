import React from 'react';

import { userService, authenticationService } from '../_services';
import { ChartWithStaticData } from './ChartWithStaticData';
class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null
        };
    }

    componentDidMount() {
        const { currentUser } = this.state;
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
    }

    render() {
        const { currentUser, userFromApi } = this.state;
        return (
            <div>
                <h1>Home</h1>
                <p>Welcome {currentUser.role} User</p>
                
                <div>
                   Below is the Graph for Admin User
                    {userFromApi &&
                        <ul>
                            <li>{userFromApi.firstName} {userFromApi.lastName}</li>
                        </ul>
                    }
                </div>
                <ChartWithStaticData />
            </div>
        );
    }
}

export { HomePage };