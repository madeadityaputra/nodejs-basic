import net from "net";

const server = net.createServer((client) => {
	console.log("client connected");

	client.on("data", (data) => {
		console.log(`Recive Data ${data.toString()}`);

		//* client membalas
		client.write(`Hello ${data.toString()}\r\n`);
	});
});

server.listen(3000, "localhost");
