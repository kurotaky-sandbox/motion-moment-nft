import formidable from "formidable";
import fs from "fs";
import { NFTStorage, File } from "nft.storage"
import dotenv from 'dotenv'
dotenv.config()

const { NFT_STORAGE_API_KEY } = process.env

export const config = {
  api: {
    bodyParser: false
  }
};

const post = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    await saveFile(files.file);
    return res.status(201).send("201: file created!");
  });
};

const saveFile = async (file) => {
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(`./public/${file.originalFilename}`, data);
  await fs.unlinkSync(file.filepath);
  storeAsset(file)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
  return;
};

async function storeAsset(file) {
    const client = new NFTStorage({ token: NFT_STORAGE_API_KEY })
    const metadata = await client.store({
        name: 'MotionMomentNFT',
        description: 'Motion Moment NFT!',
        image: new File(
            [await fs.promises.readFile(`./public/${file.originalFilename}.csv`)],
            `MotionMomentNFT${file.originalFilename}.csv`,
            { type: 'text/csv' }
        ),
    })
    console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
 }

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};
