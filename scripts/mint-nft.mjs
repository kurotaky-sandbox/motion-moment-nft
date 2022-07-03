import fs from "fs";

const CONTRACT_ADDRESS = "0x910efbF269308D9F252aA2231D89F08b5311dd2E"

async function mintNFT(contractAddress) {
   const MotionMomentNFT = await ethers.getContractFactory("MotionMomentNFT")
   const [owner] = await ethers.getSigners()
   const metaDataURL = await fs.promises.readFile(`./public/metadata.txt`, 'utf-8')
   console.log(metaDataURL)
   await MotionMomentNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
