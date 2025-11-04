

function getLoggedInUser4(){
    const currentId = model.app.currentUserId;
    return currentId == null ? {} : model.data.users.find(user => user.id === currentId);
}
