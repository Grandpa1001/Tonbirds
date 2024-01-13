import * as dotenv from "dotenv";
import { updateMetadataFiles, uploadFolderToIPFS } from "./metadata";
import { openWallet } from "./utils";
import { readdir } from "fs/promises";

dotenv.config();

async function init() {
    const metadataFolderPath = "./data/metadata/";
    const imagesFolderPath = "./data/images/";
  
    const wallet = await openWallet(process.env.MNEMONIC!.split(" "), true);
    console.log("Started uploading images to IPFS...");
    
    
    const imagesIpfsHash = await uploadFolderToIPFS(imagesFolderPath);
    console.log(
      `Successfully uploaded the pictures to ipfs: https://gateway.pinata.cloud/ipfs/${imagesIpfsHash}`
      
    );
    const files = await readdir(metadataFolderPath);
    files.pop();
    let index = 0;
    //todo add instance

  }
  

void init();



