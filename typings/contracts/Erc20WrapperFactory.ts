/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Erc20Wrapper } from "./Erc20Wrapper";

export class Erc20WrapperFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Erc20Wrapper> {
    return super.deploy(overrides || {}) as Promise<Erc20Wrapper>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Erc20Wrapper {
    return super.attach(address) as Erc20Wrapper;
  }
  connect(signer: Signer): Erc20WrapperFactory {
    return super.connect(signer) as Erc20WrapperFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Erc20Wrapper {
    return new Contract(address, _abi, signerOrProvider) as Erc20Wrapper;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token_address",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token_id",
        type: "uint256"
      }
    ],
    name: "TokenRegistration",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      }
    ],
    name: "TransferBatch",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "TransferSingle",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_amount",
        type: "string"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "URI",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      }
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "isOperator",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address payable",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address payable",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      }
    ],
    name: "getTokenID",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenID",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "getIdAddress",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x6080604052600160025534801561001557600080fd5b50600160008190527fa15bc60c955c405d20d9149c709e2460f1c2d9a497496a7f46004d1772c3054c81905560046020527fabd6e7cb50984ff9c2f3e18a2660c3353dadf4e3291deeb275dae2cd1e44fe0580546001600160a01b0319169091179055611e3f806100876000396000f3fe6080604052600436106100e05760003560e01c80639040a9491161007f578063d9caed1211610059578063d9caed121461026a578063e985e9c51461028a578063f23a6e61146102aa578063f242432a146102ca576100f3565b80639040a94914610208578063a22cb4651461021d578063bc197c811461023d576100f3565b80634e1273f4116100bb5780634e1273f41461017b57806363f8071c146101a85780637358e9a5146101c85780638340f549146101f5576100f3565b8062fdd58e146100f857806301ffc9a71461012e5780632eb2c2d61461015b576100f3565b366100f3576100f1600133346102ea565b005b600080fd5b34801561010457600080fd5b5061011861011336600461141e565b6104f0565b6040516101259190611d6f565b60405180910390f35b34801561013a57600080fd5b5061014e610149366004611528565b610516565b6040516101259190611732565b34801561016757600080fd5b506100f16101763660046112a0565b610568565b34801561018757600080fd5b5061019b610196366004611449565b6105e7565b60405161012591906116f1565b3480156101b457600080fd5b506101186101c336600461124c565b6106e0565b3480156101d457600080fd5b506101e86101e3366004611560565b61071b565b6040516101259190611600565b6100f161020336600461134a565b6102ea565b34801561021457600080fd5b50610118610750565b34801561022957600080fd5b506100f16102383660046113f1565b610756565b34801561024957600080fd5b5061025d6102583660046112a0565b6107c5565b604051610125919061173d565b34801561027657600080fd5b506100f161028536600461134a565b61085c565b34801561029657600080fd5b5061014e6102a5366004611268565b610875565b3480156102b657600080fd5b5061025d6102c536600461138a565b6108a3565b3480156102d657600080fd5b506100f16102e536600461138a565b6108ec565b6001600160a01b0382166103195760405162461bcd60e51b8152600401610310906119fb565b60405180910390fd5b60006001600160a01b0384166001146104ac57341561034a5760405162461bcd60e51b815260040161031090611a42565b6040516323b872dd60e01b81526001600160a01b038516906323b872dd9061037a90339030908790600401611614565b602060405180830381600087803b15801561039457600080fd5b505af11580156103a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cc919061150c565b506103d5610964565b6103f15760405162461bcd60e51b815260040161031090611752565b6001600160a01b038416600090815260036020526040902054806104a25760028054600101908190556000818152600460209081526040808320805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038b169081179091558352600390915290819020829055519092507ff977d54986414fc91816901629d1d788ad95448ab4198dcb9b6dc5ed2b930c1f9061049590879085906116d8565b60405180910390a16104a6565b8091505b506104cf565b3482146104cb5760405162461bcd60e51b815260040161031090611908565b5060015b6104ea83828460405180602001604052806000815250610998565b50505050565b6001600160a01b0391909116600090815260208181526040808320938352929052205490565b60006001600160e01b031982166301ffc9a760e01b148061054757506001600160e01b03198216636cdb3d1360e11b145b8061056257506001600160e01b03198216630271189760e51b145b92915050565b336001600160a01b038616148061058457506105848533610875565b6105a05760405162461bcd60e51b815260040161031090611b1c565b6001600160a01b0384166105c65760405162461bcd60e51b81526004016103109061199e565b6105d285858585610a3d565b6105e0858585855a86610c47565b5050505050565b6060815183511461060a5760405162461bcd60e51b815260040161031090611ad0565b6060835167ffffffffffffffff8111801561062457600080fd5b5060405190808252806020026020018201604052801561064e578160200160208202803683370190505b50905060005b84518110156106d85760008086838151811061066c57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008583815181106106a257fe5b60200260200101518152602001908152602001600020548282815181106106c557fe5b6020908102919091010152600101610654565b509392505050565b6001600160a01b038116600090815260036020526040902054806107165760405162461bcd60e51b815260040161031090611bd6565b919050565b6000818152600460205260409020546001600160a01b0316806107165760405162461bcd60e51b815260040161031090611951565b60025490565b3360008181526001602090815260408083206001600160a01b038716808552925291829020805460ff191685151517905590519091907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31906107b9908590611732565b60405180910390a35050565b60003330146107e65760405162461bcd60e51b815260040161031090611c21565b60005b84518110156108495761080e85828151811061080157fe5b602002602001015161071b565b50610841308787848151811061082057fe5b602002602001015187858151811061083457fe5b6020026020010151610d24565b6001016107e9565b5063bc197c8160e01b9695505050505050565b6000610867846106e0565b90506104ea33848385610d24565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b60003330146108c45760405162461bcd60e51b815260040161031090611b79565b6108cd8461071b565b506108da30868686610d24565b5063f23a6e6160e01b95945050505050565b336001600160a01b038616148061090857506109088533610875565b6109245760405162461bcd60e51b81526004016103109061182a565b6001600160a01b03841661094a5760405162461bcd60e51b815260040161031090611797565b61095685858585610e97565b6105e0858585855a86610f7f565b6000803d801561097b576020811461098457610990565b60019150610990565b60206000803e60005191505b501515905090565b6001600160a01b0384166000908152602081815260408083208684529091529020546109ca908363ffffffff61105216565b6001600160a01b03851660008181526020818152604080832088845290915280822093909355915190919033907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6290610a269088908890611d78565b60405180910390a46104ea60008585855a86610f7f565b8051825114610a5e5760405162461bcd60e51b8152600401610310906118ab565b815160005b81811015610be857610ad9838281518110610a7a57fe5b6020026020010151600080896001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610ab457fe5b602002602001015181526020019081526020016000205461107e90919063ffffffff16565b600080886001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610b0b57fe5b6020026020010151815260200190815260200160002081905550610b93838281518110610b3457fe5b6020026020010151600080886001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610b6e57fe5b602002602001015181526020019081526020016000205461105290919063ffffffff16565b600080876001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610bc557fe5b602090810291909101810151825281019190915260400160002055600101610a63565b50836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051610c38929190611704565b60405180910390a45050505050565b610c59856001600160a01b03166110a6565b15610d1c576000856001600160a01b031663bc197c8184338a8989886040518763ffffffff1660e01b8152600401610c95959493929190611638565b602060405180830381600088803b158015610caf57600080fd5b5087f1158015610cc3573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610ce89190611544565b90506001600160e01b0319811663bc197c8160e01b14610d1a5760405162461bcd60e51b815260040161031090611c7e565b505b505050505050565b610d2f8483836110dd565b60018214610df55760008281526004602081905260409182902054915163a9059cbb60e01b81526001600160a01b0390921691829163a9059cbb91610d789188918791016116d8565b602060405180830381600087803b158015610d9257600080fd5b505af1158015610da6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dca919061150c565b50610dd3610964565b610def5760405162461bcd60e51b815260040161031090611a8a565b506104ea565b6001600160a01b038316610e1b5760405162461bcd60e51b8152600401610310906117e2565b6000836001600160a01b031682604051610e34906115fd565b60006040518083038185875af1925050503d8060008114610e71576040519150601f19603f3d011682016040523d82523d6000602084013e610e76565b606091505b50509050806105e05760405162461bcd60e51b815260040161031090611a8a565b6001600160a01b038416600090815260208181526040808320858452909152902054610ec9908263ffffffff61107e16565b6001600160a01b0380861660009081526020818152604080832087845282528083209490945591861681528082528281208582529091522054610f12908263ffffffff61105216565b6001600160a01b03808516600081815260208181526040808320888452909152908190209390935591519086169033907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6290610f719087908790611d78565b60405180910390a450505050565b610f91856001600160a01b03166110a6565b15610d1c576000856001600160a01b031663f23a6e6184338a8989886040518763ffffffff1660e01b8152600401610fcd959493929190611695565b602060405180830381600088803b158015610fe757600080fd5b5087f1158015610ffb573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906110209190611544565b90506001600160e01b0319811663f23a6e6160e01b14610d1a5760405162461bcd60e51b815260040161031090611cdb565b6000828201838110156110775760405162461bcd60e51b815260040161031090611d38565b9392505050565b6000828211156110a05760405162461bcd60e51b815260040161031090611874565b50900390565b6000813f801580159061107757507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141592915050565b6001600160a01b03831660009081526020818152604080832085845290915290205461110f908263ffffffff61107e16565b6001600160a01b03841660008181526020818152604080832087845290915280822093909355915133907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62906111689087908790611d78565b60405180910390a4505050565b600082601f830112611185578081fd5b813561119861119382611dad565b611d86565b8181529150602080830190848101818402860182018710156111b957600080fd5b60005b848110156111d8578135845292820192908201906001016111bc565b505050505092915050565b600082601f8301126111f3578081fd5b813567ffffffffffffffff811115611209578182fd5b61121c601f8201601f1916602001611d86565b915080825283602082850101111561123357600080fd5b8060208401602084013760009082016020015292915050565b60006020828403121561125d578081fd5b813561107781611dcd565b6000806040838503121561127a578081fd5b823561128581611dcd565b9150602083013561129581611dcd565b809150509250929050565b600080600080600060a086880312156112b7578081fd5b85356112c281611dcd565b945060208601356112d281611dcd565b9350604086013567ffffffffffffffff808211156112ee578283fd5b6112fa89838a01611175565b9450606088013591508082111561130f578283fd5b61131b89838a01611175565b93506080880135915080821115611330578283fd5b5061133d888289016111e3565b9150509295509295909350565b60008060006060848603121561135e578283fd5b833561136981611dcd565b9250602084013561137981611dcd565b929592945050506040919091013590565b600080600080600060a086880312156113a1578081fd5b85356113ac81611dcd565b945060208601356113bc81611dcd565b93506040860135925060608601359150608086013567ffffffffffffffff8111156113e5578182fd5b61133d888289016111e3565b60008060408385031215611403578182fd5b823561140e81611dcd565b9150602083013561129581611de5565b60008060408385031215611430578182fd5b823561143b81611dcd565b946020939093013593505050565b6000806040838503121561145b578182fd5b823567ffffffffffffffff80821115611472578384fd5b81850186601f820112611483578485fd5b8035925061149361119384611dad565b80848252602080830192508084018a8283890287010111156114b3578889fd5b8894505b868510156114de5780356114ca81611dcd565b8452600194909401939281019281016114b7565b5090965087013593505050808211156114f5578283fd5b5061150285828601611175565b9150509250929050565b60006020828403121561151d578081fd5b815161107781611de5565b600060208284031215611539578081fd5b813561107781611df3565b600060208284031215611555578081fd5b815161107781611df3565b600060208284031215611571578081fd5b5035919050565b6000815180845260208085019450808401835b838110156115a75781518752958201959082019060010161158b565b509495945050505050565b60008151808452815b818110156115d7576020818501810151868301820152016115bb565b818111156115e85782602083870101525b50601f01601f19169290920160200192915050565b90565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808816835280871660208401525060a0604083015261166460a0830186611578565b82810360608401526116768186611578565b838103608085015261168881866115b2565b9998505050505050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a060808301526116cd60a08301846115b2565b979650505050505050565b6001600160a01b03929092168252602082015260400190565b6000602082526110776020830184611578565b6000604082526117176040830185611578565b82810360208401526117298185611578565b95945050505050565b901515815260200190565b6001600160e01b031991909116815260200190565b60208082526025908201527f455243323057726170706572236465706f7369743a205452414e534645525f46604082015264105253115160da1b606082015260800190565b6020808252602b908201527f4552433131353523736166655472616e7366657246726f6d3a20494e56414c4960408201526a1117d49150d2541251539560aa1b606082015260800190565b60208082526028908201527f4552433230577261707065722377697468647261773a20494e56414c49445f526040820152671150d2541251539560c21b606082015260800190565b6020808252602a908201527f4552433131353523736166655472616e7366657246726f6d3a20494e56414c49604082015269222fa7a822a920aa27a960b11b606082015260800190565b60208082526017908201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604082015260600190565b60208082526035908201527f45524331313535235f7361666542617463685472616e7366657246726f6d3a2060408201527f494e56414c49445f4152524159535f4c454e4754480000000000000000000000606082015260800190565b60208082526029908201527f455243323057726170706572236465706f7369743a20494e434f52524543545f6040820152684d53475f56414c554560b81b606082015260800190565b6020808252602d908201527f455243323057726170706572236765744964416464726573733a20554e52454760408201526c24a9aa22a922a22faa27a5a2a760991b606082015260800190565b60208082526030908201527f45524331313535237361666542617463685472616e7366657246726f6d3a204960408201527f4e56414c49445f524543495049454e5400000000000000000000000000000000606082015260800190565b60208082526027908201527f455243323057726170706572236465706f7369743a20494e56414c49445f524560408201526610d2541251539560ca1b606082015260800190565b60208082526028908201527f455243323057726170706572236465706f7369743a204e4f4e5f4e554c4c5f4d60408201526753475f56414c554560c01b606082015260800190565b60208082526026908201527f4552433230577261707065722377697468647261773a205452414e534645525f60408201526511905253115160d21b606082015260800190565b6020808252602c908201527f455243313135352362616c616e63654f6642617463683a20494e56414c49445f60408201526b082a4a482b2be988a9c8ea8960a31b606082015260800190565b6020808252602f908201527f45524331313535237361666542617463685472616e7366657246726f6d3a204960408201527f4e56414c49445f4f50455241544f520000000000000000000000000000000000606082015260800190565b60208082526038908201527f455243323057726170706572236f6e4552433131353552656365697665643a2060408201527f494e56414c49445f455243313135355f52454345495645440000000000000000606082015260800190565b6020808252602b908201527f45524332305772617070657223676574546f6b656e49443a20554e524547495360408201526a2a22a922a22faa27a5a2a760a91b606082015260800190565b6020808252603d908201527f455243323057726170706572236f6e455243313135354261746368526563656960408201527f7665643a20494e56414c49445f455243313135355f5245434549564544000000606082015260800190565b6020808252603f908201527f45524331313535235f63616c6c6f6e455243313135354261746368526563656960408201527f7665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474500606082015260800190565b6020808252603a908201527f45524331313535235f63616c6c6f6e4552433131353552656365697665643a2060408201527f494e56414c49445f4f4e5f524543454956455f4d455353414745000000000000606082015260800190565b60208082526016908201527f536166654d617468236164643a204f564552464c4f5700000000000000000000604082015260600190565b90815260200190565b918252602082015260400190565b60405181810167ffffffffffffffff81118282101715611da557600080fd5b604052919050565b600067ffffffffffffffff821115611dc3578081fd5b5060209081020190565b6001600160a01b0381168114611de257600080fd5b50565b8015158114611de257600080fd5b6001600160e01b031981168114611de257600080fdfea26469706673582212209591c473ff3e3febad2ec49de521361148aa39fb800305884b5da2f93199dcc064736f6c63430006080033";
