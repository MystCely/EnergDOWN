

function getLoggedInUser(){
    const currentId = model.app.currentUserId;
    return currentId == null ? "guest": model.data.users.find(user => user.id === currentId).username;
}
