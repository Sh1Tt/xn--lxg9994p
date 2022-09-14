const { port } = conf = {
	proto: "http",
	port: 3000,
};
const server = require("socket.io")(port, {
	cors: {
		origin: ["*"],
	},
});
server.on("connection", socket => {
	console.log(socket.id);
});
const io = require("socket.io-client");
let nodeList = [
	`212.227.68.123`
];
let clients = [];
const connectClients = () => {
	nodeList.forEach((node,i) => {
		const uri = `${conf.proto}://${node}:${port}`;
		let socket = clients[i] = io(uri);
		socket.on("connect", () => {
			console.log("connected with ID: "+socket.id);
		});
	});
};
connectClients();