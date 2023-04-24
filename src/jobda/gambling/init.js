const rpcUrl = "https://polygon-mumbai.infura.io/v3/";
const web3 = new Web3(rpcUrl);
const account = "0xa17CCeC4f1a1a8775C83913Cc1F837ADb6F12cC2";
//여기에 돈 안 들어있다...
const privateKey =
  "f491fe834e7b69c06493fe785fcd328631f9c60c0e9ecf5ddca6a0e070801e42";
const contractAddress = "0x09086Ee1Da7CD2c6130F8955419E7BbA6252379B";
const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "uint24",
        name: "bettingMoney",
        type: "uint24",
      },
    ],
    name: "gambling",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "playerMoney",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "signIn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const contract = new web3.eth.Contract(abi, contractAddress);
