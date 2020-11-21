const MartianMarket = artifacts.require("MartianMarket");

module.exports = function(deployer) {
  deployer.deploy(MartianMarket)
  .then(async (contract) => {
    await contract.registerLand('{"name":"Olympus Mons","image":"https://cdn.mos.cms.futurecdn.net/XNRcoHujh5mZHmPQZzYbgH-650-80.jpg"}');
    await contract.registerLand('{"name":"South Pole","image":"https://cdn.mos.cms.futurecdn.net/pVqhqw779HUn2JEV9B2ZsX.jpg"}');
    await contract.registerLand('{"name":"Tharsis volcanoes","image":"https://cdn.mos.cms.futurecdn.net/DKavvKEEdrtRJhfKXndKeW-650-80.jpg"}');
    await contract.registerLand('{"name":"Valles Marineris","image":"https://cdn.mos.cms.futurecdn.net/vpZLAKQca68wDX7zb3AnpG-650-80.jpg"}');
  });
};
