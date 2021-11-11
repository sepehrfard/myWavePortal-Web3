const main = async () => {
	const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
	const waveContract = await waveContractFactory.deploy();
	await waveContract.deployed();
	console.log("Contract delployed to:", waveContract.address);
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch {
		console.log(error);
		process.exit(1);
	}
}

runMain();