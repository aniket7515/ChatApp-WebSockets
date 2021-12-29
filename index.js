const express=require('express');
const socket=require('socket.io');

const app = express();

// server setup
var server=app.listen(3000,()=>{
    console.log("Started listening at port 3000");
})

// Static files

app.use(express.static('public'))


// Socket setup

var io=socket(server);

io.on('connection',(socket)=>{
    console.log("Made socket connection",socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    })
});



