pragma solidity >=0.4.22 <0.9.0;
contract Todo {
    string[] tasks;
    event Foo(string desc);

    function getTask(uint i) public view returns(string memory)
    {
        return tasks[i];
    }
    
    function addTask(string calldata s) public{
        tasks.push(s);
    }

    function triggerEvent(string calldata desc) public {
        emit Foo(desc);
    }
}