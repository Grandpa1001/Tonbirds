
  import { internal, SendMode } from "ton-core";
  import { OpenedWallet } from "utils";
  import { NftCollection, mintParams } from './NFTCollection';
  
  export class NftItem {
    private collection: NftCollection;
  
    constructor(collection: NftCollection) {
      this.collection = collection;
    }
  
    public async deploy(
      wallet: OpenedWallet,
      params: mintParams
    ): Promise<number> {
      const seqno = await wallet.contract.getSeqno();
      await wallet.contract.sendTransfer({
        seqno,
        secretKey: wallet.keyPair.secretKey,
        messages: [
          internal({
            value: "0.05",
            to: this.collection.address,
            body: this.collection.createMintBody(params),
          }),
        ],
        sendMode: SendMode.IGNORE_ERRORS + SendMode.PAY_GAS_SEPARATELY,
      });
      return seqno;

    }
    

    
  }

  