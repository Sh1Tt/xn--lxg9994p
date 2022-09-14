'use-strict';

const server = require("socket.io")(443, {
	cors: {
		origin: ["*"],
	},
});

const io = require("socket.io-client");

server.on("connection", socket => {
	console.log(socket.id);
});

const ioclient = [
	io("212.227.68.123:443"),
	io("81.169.159.30:443")
];

console.log(ioclient[0])