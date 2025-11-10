

function getLoggedInUser(){
    const currentId = model.app.currentUserId;
    return currentId == null ? "guest": model.data.users.find(user => user.id === currentId).username;
}

function giveId(){
    const randomId = Math.floor(Math.random() * 999)

    return randomId;
}
