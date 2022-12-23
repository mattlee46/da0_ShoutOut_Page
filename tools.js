var coinbase;
var balance;
var usdtApprove;
var contract_address;
var contract_abi;
var da01_amount;
const chainId = 80001 // Mumbai testnet

contract_address = "0x5D231b3E2e1Fcd7fda9169fC71a2e93CDC038180";
contract_abi = [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" } ], "name": "safeMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ];

function hexToDec(hex) {
  return parseInt(hex, 16);
}

const getContract = async () => {
  try {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const signerAddress = await signer.getAddress();
    console.log('signer address : ', signerAddress);

    const connectedContract = new ethers.Contract(
      contract_address,
      contract_abi,
      signer
    );

    return connectedContract;

  } catch (error) {

    console.log(error);
    console.log('connected contract_154 not found');

    return null;
  }
}



const GetAndShowBalance = async () => {

 
  const connectedContract = await getContract();


  //mint
  connectedContract.balanceOf(coinbase).then((gx) => {
          console.log(gx["_hex"]);
          
          da01_amount = parseInt(gx["_hex"]);
          da01_amount = Number(
			    parseFloat(da01_amount).toFixed(3)
			  ).toLocaleString("en", {
			    minimumFractionDigits: 0
			  })	

          console.log("Amount:::: "+da01_amount)
          console.log("Get Amount success");
          $("#score").text("Score："+da01_amount+" DA01");
     
        }, (error1) => {
          console.log("GetAndShowBalance fail::"+String(error1));
          
        });
 
}

const changeOrAddNetwork = async () => {
	// await window.ethereum.request({
	//   method: 'wallet_switchEthereumChain',
	//   params: [{chainId: '0x13881'}]
	 
	// });

	try {
	  	await window.ethereum.request({
	  	  method: 'wallet_switchEthereumChain',
	  	  params: [{chainId: '0x13881'}]
	  	 
	  	});
	  	GetAndShowBalance();
	  
	} catch (err) {
			console.log("ethereum.networkVersion3339999::::: "+ethereum.networkVersion);
	    // This error code indicates that the chain has not been added to MetaMask
	  	if (err.code === 4902) {
	  		console.log("ethereum.networkVersion33322222::::: "+ethereum.networkVersion);
	    	await window.ethereum.request({
	          	method: "wallet_addEthereumChain",
	          	params: [{
	              chainId: "0x13881",
	              rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
	              chainName: "Mumbai Testnet",
	              nativeCurrency: {
	                  name: "MATIC",
	                  symbol: "MATIC",
	                  decimals: 18
	              },
	              blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
	          	}]
	      	});
	    	GetAndShowBalance();
	    
	  	}
	}

}

const connectWalletGetAddress = async () => {

	console.log("ethereum.networkVersion::::: "+ethereum.networkVersion);

	let account;
	ethereum.request({method:'eth_requestAccounts'}).then(
	  accounts =>{
	    account = accounts[0];
	    console.log(account);
	    coinbase = String(accounts[0]); 
	    $("#C1").text(String(coinbase).substr(0,4)+'...'+String(coinbase).substr(38,4));
	    $("#CWA").css('background','#16B8CE');

	    console.log("ethereum.networkVersion0000000::::: "+ethereum.networkVersion);
	    
	    if (window.ethereum.networkVersion !== chainId) {

	    	console.log("ethereum.networkVersion11111::::: "+ethereum.networkVersion);
	    	changeOrAddNetwork();
	      	
	    }else{
	    	let account;
	    	ethereum.request({method:'eth_requestAccounts'}).then(
	    	  accounts =>{
	    	    account = accounts[0];
	    	    console.log(account);
	    	    coinbase = String(accounts[0]); 
	    	    $("#C1").text(String(coinbase).substr(0,4)+'...'+String(coinbase).substr(38,4));
	    	    $("#CWA").css('background','#16B8CE');
	    	    

	    	    GetAndShowBalance();
	    	  },
	    	
	    	);
	    }  
	    
	  },
	
	);

	    



}


                  