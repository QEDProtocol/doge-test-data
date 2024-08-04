export interface IDogeTestDataBlockInfo {
    blockNumber: number;
    blockHash: string;
    block: IDogeTestDataBlock;
    rawBlock: string;
    header: IDogeTestDataBlockHeader;
    rawHeader: string;
}

export interface IDogeTestDataBlock {
    hash: string;
    confirmations: number;
    strippedsize: number;
    size: number;
    weight: number;
    height: number;
    version: number;
    versionHex: string;
    merkleroot: string;
    tx: string[];
    time: number;
    mediantime: number;
    nonce: number;
    bits: string;
    difficulty: number;
    chainwork: string;
    nextblockhash: string;
    previousblockhash?: string;
    auxpow?: IDogeTestDataAuxpow;
}

export interface IDogeTestDataAuxpow {
    tx: IDogeTestDataAuxpowTransaction;
    index: number;
    chainindex: number;
    merklebranch: string[];
    chainmerklebranch: string[];
    parentblock: string;
}

export interface IDogeTestDataAuxpowTransaction {
    hex: string;
    txid: string;
    hash: string;
    size: number;
    vsize: number;
    version: number;
    locktime: number;
    vin: IDogeTestDataVin[];
    vout: IDogeTestDataVout[];
    blockhash: string;
}

export interface IDogeTestDataVin {
    coinbase: string;
    sequence: number;
}

export interface IDogeTestDataVout {
    value: number;
    n: number;
    scriptPubKey: IDogeTestDataScriptPubKey;
}

export interface IDogeTestDataScriptPubKey {
    asm: string;
    hex: string;
    reqSigs?: number;
    type: string;
    addresses?: string[];
}

export interface IDogeTestDataBlockHeader {
    hash: string;
    confirmations: number;
    height: number;
    version: number;
    versionHex: string;
    merkleroot: string;
    time: number;
    mediantime: number;
    nonce: number;
    bits: string;
    difficulty: number;
    chainwork: string;
    nextblockhash: string;
    previousblockhash?: string;
}



export var blocks: IDogeTestDataBlockInfo[];
