import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

//* cluster dibagi menjadi dua yaitu primary dan worker ,
//* primary tugasnya mengorkordinasi worknya
//* sedangkan worknya adalah yang menjalankan programnya

if (cluster.isPrimary) {
	console.log(`primaryy : ${process.pid}`);

	for (let i = 0; i < os.cpus().length; i++) {
		cluster.fork();
	}
	cluster.addListener("exit", (worker) => {
		console.log(`Worker-${worker.id} is exit`);
		cluster.fork();
	});
}

if (cluster.isWorker) {
	console.log(`Work : ${process.pid}`);

	const server = http.createServer((request, response) => {
		response.write(`Response from ${process.pid}`);
		response.end();
		process.exit();
	});

	server.listen(3000);
}
