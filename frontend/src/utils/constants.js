const contractAddress = "0x2Aa93b82CF14336a75E2546e9c78Ad019af3FDa6";

const contractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_serialNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "_actor",
        type: "string",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
      {
        internalType: "string",
        name: "_timestamp",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_isSold",
        type: "bool",
      },
    ],
    name: "addProductHistory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_serialNumber",
        type: "string",
      },
    ],
    name: "getProduct",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "actor",
            type: "string",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
          {
            internalType: "string",
            name: "timestamp",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isSold",
            type: "bool",
          },
        ],
        internalType: "struct Blocksafe.ProductHistory[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
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
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_brand",
        type: "string",
      },
      {
        internalType: "string",
        name: "_serialNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_image",
        type: "string",
      },
      {
        internalType: "string",
        name: "_actor",
        type: "string",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
      {
        internalType: "string",
        name: "_timestamp",
        type: "string",
      },
    ],
    name: "registerProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

module.exports = { contractABI, contractAddress };
