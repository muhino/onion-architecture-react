import React from 'react';
import * as Initiator from 'app-core/app-service/Initiator.js';
import * as UserService from 'app-core/domain-service/UserService.js';

class App extends React.Component{
  render() {
    // load user from mocked backend
    Initiator.userInitiator.loadUserFromServer();

    // Add one more user
    UserService.userService.addUser('Richard');

    // Make a list of user name and id
    const userList = UserService.userService.userList.map((user) => <div key={user.id}>{user.id} {user.name}</div>);

    return (
      <div>
        {userList}
      </div>
    );
  }
}


export default App;
