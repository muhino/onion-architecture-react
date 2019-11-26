const {userService} = require('../domain-service/UserService');

class UserInitiator {
  loadUserFromServer() {
    const userMockData = ['Andrew', 'John'];
    userMockData.forEach(name => userService.addUser(name));
  }
}

const userInitiator = new UserInitiator();

module.exports = {
  userInitiator
}
