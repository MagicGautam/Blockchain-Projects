const HelloWorld = artifacts.require('HelloWorld');  //contract artifacct

contract('HelloWorld', () => { //contract block
    it('Should Return Hello World', async () =>{  //it function
        const helloWorld = await HelloWorld.deployed(); //contract instance, executing the contract
        const result = await helloWorld.hello(); //storing the result 
        assert(result == 'Hello World'); //assertion is like True and False, we are checking this comment in Solidity Contract,
    });
});