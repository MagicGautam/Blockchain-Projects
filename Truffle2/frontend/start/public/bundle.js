var contractABI= [
    {
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    }
  ];
var contractAddress ='0x103B7a19db21b536e3C1b24c698e6b35fec187D3';

//Creating an instance of Web3
var web3 = new Web3('http://localhost::5777');
var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

//creating a contract instance which is a js object which will communicate with our Helloworld SMart Contract. 

//creating a pointer to a smart contract.


document.addEventListener('DomContentLoaded')
helloWorld.methods.hello().call()
.then(result =>{
    document.getElementById('hello').innerHTML= result;
});