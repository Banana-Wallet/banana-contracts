/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TokenPaymaster,
  TokenPaymasterInterface,
} from "../TokenPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "accountFactory",
        type: "address",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "COST_OF_POST",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "theFactory",
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
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620022cc380380620022cc833981016040819052620000349162000347565b8180826200004233620000a0565b6001600160a01b031660805260046200005c8382620004dc565b5060056200006b8282620004dc565b5050506001600160a01b03831660a05262000088306001620000f0565b620000973033600019620001d9565b505050620005cf565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0382166200014c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b8060036000828254620001609190620005a8565b90915550506001600160a01b038216600090815260016020526040812080548392906200018f908490620005a8565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0383166200023d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840162000143565b6001600160a01b038216620002a05760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840162000143565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b505050565b6001600160a01b03811681146200031c57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b8051620003428162000306565b919050565b6000806000606084860312156200035d57600080fd5b83516200036a8162000306565b602085810151919450906001600160401b03808211156200038a57600080fd5b818701915087601f8301126200039f57600080fd5b815181811115620003b457620003b46200031f565b604051601f8201601f19908116603f01168101908382118183101715620003df57620003df6200031f565b816040528281528a86848701011115620003f857600080fd5b600093505b828410156200041c5784840186015181850187015292850192620003fd565b828411156200042e5760008684830101525b809750505050505050620004456040850162000335565b90509250925092565b600181811c908216806200046357607f821691505b6020821081036200048457634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200030157600081815260208120601f850160051c81016020861015620004b35750805b601f850160051c820191505b81811015620004d457828155600101620004bf565b505050505050565b81516001600160401b03811115620004f857620004f86200031f565b62000510816200050984546200044e565b846200048a565b602080601f8311600181146200054857600084156200052f5750858301515b600019600386901b1c1916600185901b178555620004d4565b600085815260208120601f198616915b82811015620005795788860151825594840194600190910190840162000558565b5085821015620005985787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008219821115620005ca57634e487b7160e01b600052601160045260246000fd5b500190565b60805160a051611c9f6200062d600039600081816103920152611762015260008181610426015281816105970152818161070b015281816108ea015281816109b101528181610a4101528181610af401526112350152611c9f6000f3fe6080604052600436106101a15760003560e01c80639f5ca221116100e1578063c23a5cea1161008a578063dd62ed3e11610064578063dd62ed3e1461049a578063f0dda65c146104ed578063f2fde38b1461050d578063f465c77e1461052d57600080fd5b8063c23a5cea1461045d578063c399ec881461047d578063d0e30db01461049257600080fd5b8063a9a23409116100bb578063a9a23409146103f4578063b0d691fe14610414578063bb9fe6bf1461044857600080fd5b80639f5ca22114610380578063a457c2d7146103b4578063a9059cbb146103d457600080fd5b8063313ce5671161014e578063715018a611610128578063715018a6146102f4578063796d4371146103095780638da5cb5b1461031f57806395d89b411461036b57600080fd5b8063313ce56714610275578063395093511461029157806370a08231146102b157600080fd5b806318160ddd1161017f57806318160ddd14610216578063205c28781461023557806323b872dd1461025557600080fd5b80630396cb60146101a657806306fdde03146101bb578063095ea7b3146101e6575b600080fd5b6101b96101b4366004611810565b61055b565b005b3480156101c757600080fd5b506101d061060d565b6040516101dd91906118a8565b60405180910390f35b3480156101f257600080fd5b506102066102013660046118dd565b61069f565b60405190151581526020016101dd565b34801561022257600080fd5b506003545b6040519081526020016101dd565b34801561024157600080fd5b506101b96102503660046118dd565b6106b7565b34801561026157600080fd5b50610206610270366004611909565b61074f565b34801561028157600080fd5b50604051601281526020016101dd565b34801561029d57600080fd5b506102066102ac3660046118dd565b610773565b3480156102bd57600080fd5b506102276102cc36600461194a565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b34801561030057600080fd5b506101b96107bf565b34801561031557600080fd5b50610227613a9881565b34801561032b57600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101dd565b34801561037757600080fd5b506101d06107d3565b34801561038c57600080fd5b506103467f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c057600080fd5b506102066103cf3660046118dd565b6107e2565b3480156103e057600080fd5b506102066103ef3660046118dd565b6108b8565b34801561040057600080fd5b506101b961040f366004611967565b6108c6565b34801561042057600080fd5b506103467f000000000000000000000000000000000000000000000000000000000000000081565b34801561045457600080fd5b506101b96108e0565b34801561046957600080fd5b506101b961047836600461194a565b610964565b34801561048957600080fd5b50610227610a10565b6101b9610ac6565b3480156104a657600080fd5b506102276104b53660046119f6565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020908152604080832093909416825291909152205490565b3480156104f957600080fd5b506101b96105083660046118dd565b610b4e565b34801561051957600080fd5b506101b961052836600461194a565b610b64565b34801561053957600080fd5b5061054d610548366004611a2f565b610bcd565b6040516101dd929190611a83565b610563610bf0565b6040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff821660048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690630396cb609034906024016000604051808303818588803b1580156105f157600080fd5b505af1158015610605573d6000803e3d6000fd5b505050505050565b60606004805461061c90611aa5565b80601f016020809104026020016040519081016040528092919081815260200182805461064890611aa5565b80156106955780601f1061066a57610100808354040283529160200191610695565b820191906000526020600020905b81548152906001019060200180831161067857829003601f168201915b5050505050905090565b6000336106ad818585610c71565b5060019392505050565b6106bf610bf0565b6040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063205c287890604401600060405180830381600087803b1580156105f157600080fd5b60003361075d858285610e24565b610768858585610ef5565b506001949350505050565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906106ad90829086906107ba908790611af8565b610c71565b6107c7610bf0565b6107d160006111a8565b565b60606005805461061c90611aa5565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156108ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6107688286868403610c71565b6000336106ad818585610ef5565b6108ce61121d565b6108da848484846112bc565b50505050565b6108e8610bf0565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561095057600080fd5b505af11580156108da573d6000803e3d6000fd5b61096c610bf0565b6040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063c23a5cea90602401600060405180830381600087803b1580156109f557600080fd5b505af1158015610a09573d6000803e3d6000fd5b5050505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610a9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac19190611b37565b905090565b6040517fb760faf90000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063b760faf99034906024016000604051808303818588803b1580156109f557600080fd5b610b56610bf0565b610b6082826112ef565b5050565b610b6c610bf0565b610b9630610b8f60005473ffffffffffffffffffffffffffffffffffffffff1690565b6000610c71565b610b9f8161140f565b610bca30827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610c71565b50565b60606000610bd961121d565b610be48585856114c3565b91509150935093915050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108a2565b73ffffffffffffffffffffffffffffffffffffffff8316610d13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016108a2565b73ffffffffffffffffffffffffffffffffffffffff8216610db6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016108a2565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600260209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108da5781811015610ee8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016108a2565b6108da8484848403610c71565b73ffffffffffffffffffffffffffffffffffffffff8316610f98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016108a2565b73ffffffffffffffffffffffffffffffffffffffff821661103b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016108a2565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040902054818110156110f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016108a2565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260016020526040808220858503905591851681529081208054849290611135908490611af8565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161119b91815260200190565b60405180910390a36108da565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146107d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f53656e646572206e6f7420456e747279506f696e74000000000000000000000060448201526064016108a2565b60006112ca8385018561194a565b905060006112e26112dd613a9885611af8565b61170c565b9050610605823083610ef5565b73ffffffffffffffffffffffffffffffffffffffff821661136c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016108a2565b806003600082825461137e9190611af8565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600090815260016020526040812080548392906113b8908490611af8565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b611417610bf0565b73ffffffffffffffffffffffffffffffffffffffff81166114ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016108a2565b610bca816111a8565b60606000806114d18461170c565b9050613a988660a0013511611568576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f546f6b656e5061796d61737465723a2067617320746f6f206c6f7720666f722060448201527f706f73744f70000000000000000000000000000000000000000000000000000060648201526084016108a2565b6115756040870187611b50565b159050611629576115858661171f565b806115966102cc602089018961194a565b1015611624576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f546f6b656e5061796d61737465723a206e6f2062616c616e636520287072652d60448201527f637265617465290000000000000000000000000000000000000000000000000060648201526084016108a2565b6116a2565b8061163a6102cc602089018961194a565b10156116a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f546f6b656e5061796d61737465723a206e6f2062616c616e636500000000000060448201526064016108a2565b6116af602087018761194a565b6040805173ffffffffffffffffffffffffffffffffffffffff909216602083015201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190529660009650945050505050565b6000611719606483611bbc565b92915050565b600061172e6040830183611b50565b61173d91601491600091611bf7565b61174691611c21565b60601c905073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168114610b60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f546f6b656e5061796d61737465723a2077726f6e67206163636f756e7420666160448201527f63746f727900000000000000000000000000000000000000000000000000000060648201526084016108a2565b60006020828403121561182257600080fd5b813563ffffffff8116811461183657600080fd5b9392505050565b6000815180845260005b8181101561186357602081850181015186830182015201611847565b81811115611875576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611836602083018461183d565b73ffffffffffffffffffffffffffffffffffffffff81168114610bca57600080fd5b600080604083850312156118f057600080fd5b82356118fb816118bb565b946020939093013593505050565b60008060006060848603121561191e57600080fd5b8335611929816118bb565b92506020840135611939816118bb565b929592945050506040919091013590565b60006020828403121561195c57600080fd5b8135611836816118bb565b6000806000806060858703121561197d57600080fd5b84356003811061198c57600080fd5b9350602085013567ffffffffffffffff808211156119a957600080fd5b818701915087601f8301126119bd57600080fd5b8135818111156119cc57600080fd5b8860208285010111156119de57600080fd5b95986020929092019750949560400135945092505050565b60008060408385031215611a0957600080fd5b8235611a14816118bb565b91506020830135611a24816118bb565b809150509250929050565b600080600060608486031215611a4457600080fd5b833567ffffffffffffffff811115611a5b57600080fd5b84016101608187031215611a6e57600080fd5b95602085013595506040909401359392505050565b604081526000611a96604083018561183d565b90508260208301529392505050565b600181811c90821680611ab957607f821691505b602082108103611af2577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008219821115611b32577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b600060208284031215611b4957600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b8557600080fd5b83018035915067ffffffffffffffff821115611ba057600080fd5b602001915036819003821315611bb557600080fd5b9250929050565b600082611bf2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60008085851115611c0757600080fd5b83861115611c1457600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015611c615780818660140360031b1b83161692505b50509291505056fea2646970667358221220803d8259fe1fbaa3f086620c2394a3ac4d5b8b9055ea62a4fb5701985573d70264736f6c634300080f0033";

type TokenPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenPaymaster__factory extends ContractFactory {
  constructor(...args: TokenPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    accountFactory: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenPaymaster> {
    return super.deploy(
      accountFactory,
      _symbol,
      _entryPoint,
      overrides || {}
    ) as Promise<TokenPaymaster>;
  }
  override getDeployTransaction(
    accountFactory: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      accountFactory,
      _symbol,
      _entryPoint,
      overrides || {}
    );
  }
  override attach(address: string): TokenPaymaster {
    return super.attach(address) as TokenPaymaster;
  }
  override connect(signer: Signer): TokenPaymaster__factory {
    return super.connect(signer) as TokenPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenPaymasterInterface {
    return new utils.Interface(_abi) as TokenPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenPaymaster {
    return new Contract(address, _abi, signerOrProvider) as TokenPaymaster;
  }
}
