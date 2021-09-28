pragma solidity 0.8.1;

contract HelloWorld  {
    function hello() pure public returns(string memory) { //pure means function is read-only
        return 'Hello World';
    }
}