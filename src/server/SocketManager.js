const io = require('./index.js').io

const {UNREAD_MSG,SEND_OFF_MSG,LOGOUT, USER_CONNECTED, USER_DISCONNECTED, COMMUNITY_CHAT, MESSAGE_RECIEVED, MESSAGE_SENT} = require('./Events')

const { createUser, createMessage, createChat } = require('./Factories')


let connectedUsers = { }
let communityChat = createChat()

module.exports = function(socket){
    console.log("Socket Id" + socket.id)
    
    socket.on(USER_CONNECTED,(user, callback)=>{
        socket.user = createUser({name:user})
        connectedUsers = addUser(connectedUsers,socket.user) 
        callback({user:socket.user})
        io.emit(USER_CONNECTED, connectedUsers)
    });

    socket.on(COMMUNITY_CHAT, (callback)=>{
        callback(communityChat)
	})

	socket.on(MESSAGE_SENT, ({chatId, message, toUser,sender})=>{
		sendMessageToChat(chatId, message, toUser,sender)
    })
    
    socket.on(LOGOUT, (user)=>{
		connectedUsers = removeUser(connectedUsers, user)
		io.emit(USER_DISCONNECTED, connectedUsers)
	})
    
    socket.on('disconnect', ()=>{
		if("user" in socket){
			connectedUsers = removeUser(connectedUsers, socket.user.name)
			io.emit(USER_DISCONNECTED, connectedUsers)
		}
	})
}

function sendMessageToChat(chatId, message, toUser,sender){
        message= createMessage({message, sender, toUser})
        io.emit(`${MESSAGE_RECIEVED}-${chatId}`, message)
        if(!connectedUsers[toUser]){
            io.emit(`${UNREAD_MSG}-${sender}`,message)
        }
        io.emit(`${SEND_OFF_MSG}-${sender}`, message)
}

function addUser(userlist, user){
    let newList = Object.assign({}, userlist)
    newList[user.name] = user
    return newList
}

function removeUser(userList, username){
	let newList = Object.assign({}, userList)
	delete newList[username]
	return newList
}