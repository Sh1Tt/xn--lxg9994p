// DONNA
const { port } = conf = {
	proto: "http",
	port: 3000,
};
let ids = [], clients = [],
// activeNodes = [], 
nodeListFromChain = [
	`212.227.68.123`,
	`81.169.159.30`
];
const server = require("socket.io")(port, {
	cors: {
		origin: ["*"],
	},
});
server.on("connection", socket => {
	// first time nobody knows so we add to list and tell everybody
	ids.push(socket.id);
	server.emit("joined-node", socket.id);
});
const io = require("socket.io-client");
let broadcasts = [];
const connectClients = () => {
	nodeListFromChain.forEach((node,i) => {
		const uri = `${conf.proto}://${node}:${port}`;
		let socket = clients[i] = io(uri);
		socket.on("connect", () => {
			console.log(socket.id);
		});
		// If one of the servers tells me he has a new node, i tell this to my list
		socket.on("joined-node", id => {
			if (!ids.includes(id)) {
				ids.push(id);
				server.emit("joined-node", id);
			};
		});
	});
};
connectClients();