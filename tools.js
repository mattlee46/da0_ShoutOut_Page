

var coinbase;
var balance;
var usdtApprove;
var contract_address;
var contract_abi;
var da01_amount;
var slackId;

// var ownerAddress;
// var ownerBalance;
// 0-15 - Level1
// 16-30 - Level2
// 31-60 - Level3
// 61+ - Level4
let data_pfp =[
["0x0042e5dc4e5be09cfaf5722dd77cfa92d1af7341",3,4,5,6,4],
["0x1f6c07a5a25faf5c8315826827c15a8340f30767",3,4,5,2,2],
["0x4ec5b2606ac7d20b1b0030d156f6d789b5873abd",3,5,6,2,3],
["0x5235a7fa85e97d9cb2f2e57af97c3945ee5edc01",3,6,1,4,6],
["0x58a028c88d61d8cfaa324dccc13e7e5cbb33cf6e",3,1,1,4,3],
["0x5d3f7c09c0132c2c5a78ec2e654b9068f5550954",3,2,2,1,2],
["0x77f946376719ef066028a2064cdf78df857d16b4",3,6,6,4,3],
["0x7ea1eaa27b313d04d359bf3e654fe927376e31bb",3,5,6,4,2],
["0x7ff3c36212f5b10846b7a2569b7b8a822a900050",3,1,6,4,2],
["0x9b20439b290c3fb24b40aff366cd3fda3b8bc0dd",3,2,6,5,6],
["0xa471495c9a27dc34910397cd2f2d85149ded8b9b",3,2,1,1,1],
["0xb62409c9cd6f9d2ab162901552590b76438f35c0",3,6,4,2,2],
["0xbeb01aab5167402a5e89d057a714fabff94c3112",3,6,1,1,4],
["0xbfc14bc72590eb653af0873d3401fac602942ad3",3,4,3,3,4],
["0xc40dd2e85459e841021dd84f550645901aa337f9",3,5,6,4,1],
["0xc5a6d80bc7a2c3093a68e2ad05e8205dc0c0726b",3,5,1,6,5],
["0xcc14db67f6e8d7cf0d9885223a3099a75d7bdff2",3,4,4,6,2],
["0xcd0aa623f14cd369c1a2d3aacb96cf9157323795",3,2,2,6,2],
["0xcfb9fc585ed11bb8a6e79547920d825b6666bf55",3,6,2,6,4],
["0xde1391114b3fcc3053c25127b399080f89cf6e71",3,6,5,5,1],
["0x0795632dbe95bde7c896d48f794278661ef2054c",4,4,2,3,3],
["0xafcca66ca8737fe647b7e94cb1a0891a72ab3ae5",5,6,3,3,3],
["0xf472067df9f1ef13da784f9181205506bc2cf01a",5,3,2,2,6],
["0x4f89df4406224693db4fd496a4066c8de240cc53",6,2,4,4,4],
["0x2fbaf345102ad37f2f4dbc1017089eed978b3c05",10,3,2,1,3],
["0x37d3745b398a4dcd2daf62a54d507d353079c72a",11,6,1,2,4],
["0xb7fcae88cab094a3372ce59b15be4c6e5f408762",13,5,2,5,5],
["0x01bf77d8adafd930b99c4fc01ed5eaf616bc6d93",23,5,4,6,1],
["0x3c0b9c1690a94fcc6994402d1ed8754439941835",24,3,1,5,6],
["0xd1444046e3987e44c8757a2400e9f8b7539f86b6",26,5,2,2,2],
["0x7d5b4d1da35bb09c950295d6064a0f167346279f",26,2,1,3,4],
["0xb58dae4ebfca3aeb21ff534991367f744b34c118",28,2,6,5,4],
["0x4744cda32be7b3e75b9334001da9ed21789d4c0d",28,3,1,4,2],
["0x59f3c40a980b4155c8ed22da76b4c8ba72020291",30,3,6,4,6],
["0xf146f3bf137683c6d2fe266f6a2dc352a615eb0c",31,6,1,4,4],
["0x1cca19b823afa773b09708d94d2ee6ff96c60057",35,4,4,6,5],
["0x7cd7d564c2bfa56a745e89204c457e1205595348",37,6,5,2,4],
["0xdee9d3a767e08afcffc909e55d853a0069c2f46f",43,5,3,1,2],
["0x0624aa196299088f7229defcee316df5198c1255",44,6,3,2,2],
["0xcf61e54644f634d22b751b586f1fbe5f8f562c60",44,1,1,1,6],
["0x93420ffa0d098a0f10e34cd4495500a1caf35888",51,6,5,4,3],
["0xfbfac05bd50e868fbaa842363883b23d9045a24f",52,3,2,4,4],
["0xab51ad23d222fd0afb4e29f3244402af9aa3c420",64,5,2,1,6],
["0xc3e06a42655e1988476089773c6f0acb697167e7",82,5,6,6,5],
["0x15c7281842a45465b4cbb8f89111d99e36e5bab8",163,6,3,4,4]
];

let data_address = [
	"0x0042e5dc4e5be09cfaf5722dd77cfa92d1af7341",
	"0x1f6c07a5a25faf5c8315826827c15a8340f30767",
	"0x4ec5b2606ac7d20b1b0030d156f6d789b5873abd",
	"0x5235a7fa85e97d9cb2f2e57af97c3945ee5edc01",
	"0x58a028c88d61d8cfaa324dccc13e7e5cbb33cf6e",
	"0x5d3f7c09c0132c2c5a78ec2e654b9068f5550954",
	"0x77f946376719ef066028a2064cdf78df857d16b4",
	"0x7ea1eaa27b313d04d359bf3e654fe927376e31bb",
	"0x7ff3c36212f5b10846b7a2569b7b8a822a900050",
	"0x9b20439b290c3fb24b40aff366cd3fda3b8bc0dd",
	"0xa471495c9a27dc34910397cd2f2d85149ded8b9b",
	"0xb62409c9cd6f9d2ab162901552590b76438f35c0",
	"0xbeb01aab5167402a5e89d057a714fabff94c3112",
	"0xbfc14bc72590eb653af0873d3401fac602942ad3",
	"0xc40dd2e85459e841021dd84f550645901aa337f9",
	"0xc5a6d80bc7a2c3093a68e2ad05e8205dc0c0726b",
	"0xcc14db67f6e8d7cf0d9885223a3099a75d7bdff2",
	"0xcd0aa623f14cd369c1a2d3aacb96cf9157323795",
	"0xcfb9fc585ed11bb8a6e79547920d825b6666bf55",
	"0xde1391114b3fcc3053c25127b399080f89cf6e71",
	"0x0795632dbe95bde7c896d48f794278661ef2054c",
	"0xafcca66ca8737fe647b7e94cb1a0891a72ab3ae5",
	"0xf472067df9f1ef13da784f9181205506bc2cf01a",
	"0x4f89df4406224693db4fd496a4066c8de240cc53",
	"0x2fbaf345102ad37f2f4dbc1017089eed978b3c05",
	"0x37d3745b398a4dcd2daf62a54d507d353079c72a",
	"0xb7fcae88cab094a3372ce59b15be4c6e5f408762",
	"0x01bf77d8adafd930b99c4fc01ed5eaf616bc6d93",
	"0x3c0b9c1690a94fcc6994402d1ed8754439941835",
	"0xd1444046e3987e44c8757a2400e9f8b7539f86b6",
	"0x7d5b4d1da35bb09c950295d6064a0f167346279f",
	"0xb58dae4ebfca3aeb21ff534991367f744b34c118",
	"0x4744cda32be7b3e75b9334001da9ed21789d4c0d",
	"0x59f3c40a980b4155c8ed22da76b4c8ba72020291",
	"0xf146f3bf137683c6d2fe266f6a2dc352a615eb0c",
	"0x1cca19b823afa773b09708d94d2ee6ff96c60057",
	"0x7cd7d564c2bfa56a745e89204c457e1205595348",
	"0xdee9d3a767e08afcffc909e55d853a0069c2f46f",
	"0x0624aa196299088f7229defcee316df5198c1255",
	"0xcf61e54644f634d22b751b586f1fbe5f8f562c60",
	"0x93420ffa0d098a0f10e34cd4495500a1caf35888",
	"0xfbfac05bd50e868fbaa842363883b23d9045a24f",
	"0xab51ad23d222fd0afb4e29f3244402af9aa3c420",
	"0xc3e06a42655e1988476089773c6f0acb697167e7",
	"0x15c7281842a45465b4cbb8f89111d99e36e5bab8"
];
let data_balance = [];
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
          $("#score").text("Ø"+da01_amount);
          // $("#pfp").attr("src","./assets/img/result/"+coinbase+".png");
          $("#before_connect").hide();
          $("#after_connect").show();

          fetch('https://epic-slack-app.herokuapp.com/api/json/users/'+coinbase+'/real_name').then(function(response_name) {
              // 直接轉成JSON格式
              return response_name.json()
          }).then(function(obj) {
              // `obj`會是一個JavaScript物件

              console.log(obj);
              console.log(obj['real_name']);
              slackId = obj['real_name'];

              const a = '@'+slackId+'\n'+(String(coinbase).substr(0,4)+'...'+String(coinbase).substr(38,4));
              
              const a1 = a.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));

              a2 = a1.replaceAll('\n','<br>');
      
              // $("#slackId").text('@'+slackId+'<br>'+'123');
              $("#slackId").empty();
							$("#slackId").append(a2);

              fetch('https://epic-slack-app.herokuapp.com/api/json/users/'+coinbase+'/epic002').then(function(response_epic) {
                  // 直接轉成JSON格式
              	//0x15c7281842a45465b4cbb8f89111d99e36e5bab8
              		
                  return response_epic.json()
              }).then(function(obj2) {
                  // `obj`會是一個JavaScript物件
                  // console.log(obj2);
                  // console.log('000:'+obj2['epic'][0]);
                  let epic_notSort = [];
                  let epic = [];
                  // epic =obj2['epic'][0]+'\n\n';
                  // epic.push(obj2['epic'][1]+obj2['epic'][2]);
                  
                  for (var t = obj2['epic002'].length-1; t >= 0  ; t--) {
                  	
                  	epic_notSort.push(String(obj2['epic002'][t]));
                  	
                  }

                  for(var k=0 ; k<obj2['epic002'].length ; k++ ){
                  	// epic.push('\n第'+(k+1)+'則史詩\n');
                  	epic.push('第'+(k+1)+'則史詩\n'+String(epic_notSort[k])+'\n');

                  }
                 	console.log('EP::::'+String(epic));
                 	epic = String(epic);
                 	// jQuery('#epic').html(htmlForTextWithEmbeddedNewlines(String(epic)));

                  // const text = String(obj2['epic'][0]);
                  // console.log('text:::'+String(obj2['epic']));
                  if (String(obj2['epic002'][0]) === 'undefined') {

                  	console.log('text:::'+String(obj2['epic002']));

                  
                  }else{
                  	 const res = epic.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));

                  	 // console.log('res:::::'+res);

                  		// jQuery('#epic').html(htmlForTextWithEmbeddedNewlines(String(obj2['epic'])));

                  	 // $("#epic").text(res);
                  	 res1 = res.replaceAll('<','《');

                  	 res2 = res1.replaceAll('>','》');
                  	 // console.log('res1:::::'+res2);
                  	 epic0 = res2.replaceAll(':jump-g0v:','<img style="width: 20px;" src="https://emoji.slack-edge.com/T02G2SXKM/jump-g0v/af32f5764ec85d2f.gif">')
                  	 epic1 = epic0.replaceAll('\n','<br>');
                  	 epic2 = epic1.replaceAll(',',' ');
                  	 console.log('epic:::'+epic2);
                  	 $("#epic").empty();
                  	 $("#epic").append(epic2);
                  	 //<img style="width: 16px;" src="https://emoji.slack-edge.com/T02G2SXKM/jump-g0v/af32f5764ec85d2f.gif">
                  }
                  
              }).catch(function(err2) {
                // Error :(
              })

          }).catch(function(err) {
            // Error :(
          })

          // metadatajson();
          // onwerList();
     
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
	    // $("#CWA").css('background','#16B8CE');
	    $("#connect_text").hide();
	    $("#connect_button_2").hide();
	    $("#shoutouts").show();

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
	    	    // $("#CWA").css('background','#16B8CE');
	    	    $("#connect_text").hide();
	    	    $("#connect_button_2").hide();
	    	    $("#shoutouts").show();

	    	    GetAndShowBalance();
	    	    
	    	  },
	    	
	    	);
	    }  
	    
	  },
	
	);


}


// function htmlForTextWithEmbeddedNewlines(text) {
//     var htmls = [];
//     var lines = text.split(/\n/);
//     // The temporary <div/> is to perform HTML entity encoding reliably.
//     //
//     // document.createElement() is *much* faster than jQuery('<div></div>')
//     // http://stackoverflow.com/questions/268490/
//     //
//     // You don't need jQuery but then you need to struggle with browser
//     // differences in innerText/textContent yourself
//     var tmpDiv = jQuery(document.createElement('html'));
//     for (var i = 0 ; i < lines.length ; i++) {
//         htmls.push(tmpDiv.text(lines[i]).html());
//     }
//     return htmls.join("<br>");
// }

//get slack name and epic






// $("#slackId").text();
// $("#epic").text();



// var fs = require('fs');
// var stringify = require('stringify');

// var mysql = require('mysql');


// function Catch() {
	
	
// 	let rawdata = fs.readFileSync('assets/json/0.json');
// 	let student = JSON.parse(rawdata);

// 	console.log(student);
// 	console.log(typeof student);

// 	for (var i = 0 ; i < 44 ; i++) {//student.length
// 		console.log(student["image"]);
// 		console.log(student["name"]);
// 		//CHANGE
// 		student["image"] = "https://ipfs.io/ipfs/QmZY14navrmiw7EFr8jCzcgpoqsn5LamFRbDqpYSVgZEVb/"+data_address[(43-i)]+".png";
// 		student["name"] = "me0w #"+(i+1);
		
// 		console.log(student["image"]);
// 		console.log(student["name"]);
// 		//SAVE
// 		let data = JSON.stringify(student);
// 		fs.writeFileSync('assets/json/'+(i+1)+'.json', data);
// 	}



	
// }

// Catch();


// const getAddressById = async (id) =>{

// 	  const connectedContract = await getContract();
	  	

// 	  		  connectedContract.ownerOf(id).then((gx) => {
// 	  		  	// console.log("getAddress success");
// 	  		  	// console.log(gx);
// 	  		  	var ownerAddress = gx;
// 	  		  	data_address.push([id,ownerAddress]);
	  		  	
	  		  	
	  		    
// 	  	    }, (error1) => {//mint fail::-32603 Minted
// 	  		    console.log((error1));
	  		        	
	  		          
// 	  		  });
	  	
	  
	  
	  

// }

// const getBalanceByAddress = async (address) =>{

// 	  const connectedContract = await getContract();
	  

	  
// 	  	await   connectedContract.balanceOf(address).then((gx) => {
//           // console.log(gx["_hex"]);
          
//           var ownerBalance = parseInt(gx["_hex"]);
//           ownerBalance = Number(
// 			    parseFloat(ownerBalance).toFixed(3)
// 			  ).toLocaleString("en", {
// 			    minimumFractionDigits: 0
// 			  })	

//           console.log("ownerBalanceAmount:::: "+ownerBalance)
//           console.log("Get ownerBalanceAmount success");
          
//           // metadatajson();
          
//           data_balance.push([address,ownerBalance]);
//           // console.log((data_address));
//           // console.log((data_balance));
//           // onwerList();
     
//         }, (error1) => {
//           console.log("GetAndShowBalance fail::"+String(error1));
          
//         });

// }

// function onwerList(){


// 	for (var i = 20; i < 43; i++) {
		
// 		getBalanceByAddress(data_address[i]);
		

// 	}
// 	console.log((data_balance));


// }

// function SavePFP() {
// 	console.log('data_pfp[i][1] <= 15'+data_pfp[0]);
// 	for (var i = 0; i < data_pfp.length;i++){
		
// 		if (data_pfp[i][1] <= 15) {
// 			console.log('data_pfp[i][1] <= 15:::'+data_pfp[i][0].toLowerCase());
// 			console.log('data_pfp[i][1] <= 15:::'+data_pfp[i][1]);

// 			fs.copyFile('./assets/img/material/Level1/'+data_pfp[i][2]+'.png', './assets/img/result/'+data_pfp[i][0].toLowerCase()+'.png', (err) => {
// 			  if (err) throw err;
// 			  console.log('pfp was copied');
// 			});
			

// 		}else if(data_pfp[i][1] <= 30){
// 			console.log('data_pfp[i][1] <= 30:::'+data_pfp[i][0].toLowerCase());
// 			console.log('data_pfp[i][1] <= 30:::'+data_pfp[i][1]);
// 			fs.copyFile('./assets/img/material/Level2/'+data_pfp[i][2]+'-'+data_pfp[i][3]+'.png', './assets/img/result/'+data_pfp[i][0].toLowerCase()+'.png', (err) => {
// 			  if (err) throw err;
// 			  console.log('pfp was copied');
// 			});
// 		}else if(data_pfp[i][1] <= 60){
// 			console.log('data_pfp[i][1] <= 60:::'+data_pfp[i][0].toLowerCase());
// 			console.log('data_pfp[i][1] <= 60:::'+data_pfp[i][1]);
// 			fs.copyFile('./assets/img/material/Level3/'+data_pfp[i][2]+'-'+data_pfp[i][3]+'-'+data_pfp[i][4]+'.png', './assets/img/result/'+data_pfp[i][0].toLowerCase()+'.png', (err) => {
// 			  if (err) throw err;
// 			  console.log('pfp was copied');
// 			});
// 		}else{
// 			console.log('data_pfp[i][1] > 60:::'+data_pfp[i][0].toLowerCase());
// 			console.log('data_pfp[i][1] > 60:::'+data_pfp[i][1]);
// 			fs.copyFile('./assets/img/material/Level4/'+data_pfp[i][2]+'-'+data_pfp[i][3]+'-'+data_pfp[i][4]+'-'+data_pfp[i][5]+'.png', './assets/img/result/'+data_pfp[i][0].toLowerCase()+'.png', (err) => {
// 			  if (err) throw err;
// 			  console.log('pfp was copied');
// 			});
// 		}

// 	}


	
// }

// SavePFP();



// const mint = async (address) => {


  
//   const connectedContract = await getContract();
  

//   // console.log( ethers.utils.parseUnits("0.3","ether") );
//   //mint connectedContract.mint(1,0,{value: ethers.utils.parseUnits("0.3","ether")}).then((gx) => {
//   //Freemint
//   await connectedContract.safeMint(address).then((gx) => {
//           console.log(gx);
//           console.log("mint success");
//         }, (error1) => {//mint fail::-32603 Minted
//         	console.log((error1["error"]["message"]));
        	
          
//         });
 
// }



// function metadatajson() {

// 	// let rawdata_address = fs.readFileSync('./mintlist.json');
// 	let address = [

// 	];
// 	console.log("address.length");
// 	console.log(address.length);

// 	// let rawdata_amounts = fs.readFileSync('./mintlist_i.json');
// 	// let amounts = [
// 	// 	"2",
// 	// 	"2",
// 	// 	"2",
// 	// 	"2",
// 	// 	"2",
// 	// 	"12",
// 	// 	"2",
// 	// 	"2",
// 	// 	"2",
// 	// 	"2",
// 	// 	"2",
// 	// 	"2",
// 	// 	"2",
// 	// 	"2"];
// 	// console.log(amounts[0]);

// 	for(var t=0 ; t<address.length; t++){

// 		console.log(address[t]);

// 		// for (var i = 0 ; i < amounts[t] ; i++) {//student.length
// 			console.log(t+1);
// 			mint(address[t]);
		


		
// 		// }
// 	}
	
// }






                  