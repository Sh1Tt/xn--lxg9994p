const io = require("websocket.io")(443, {
	cors: {
		origin: ["*"],
	},
});

import { io as ioClient } from "websocket.io-client";

io.on("connection", socket => {
	console.log(socket.id);

});

const ioclient = [
	0: ioClient("212.227.68.123:443"),
	1: ioClient("81.169.159.30:443")
];