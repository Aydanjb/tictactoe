const Player = (token) => {
  this.token = token;

  const getToken = () => {
    return token;
  };

  return {getToken};
};

const gameBoard = (() => {
  let xBoard = 0b000_000_000;
  let oBoard = 0b000_000_000;



  return {};
})();

const displayController = (() => {

})();

const gameController = (() => {
  const fullBoard = 0b111_111_111;
  const winningBoards = [
    0b000_000_111,
    0b000_111_000,
    0b111_000_000, // 3 rows
    0b001_001_001,
    0b010_010_010,
    0b100_100_100, // 3 columns
    0b100_010_001,
    0b001_010_100, // 2 diagonals
  ];
  
})();