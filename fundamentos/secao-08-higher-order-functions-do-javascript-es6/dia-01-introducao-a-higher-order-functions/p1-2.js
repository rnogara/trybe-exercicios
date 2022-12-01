const lotteryChecker = (num, betnum) => num === betnum;

const lotteryResult = (betNumber, callback) => {
  const lotteryNumber = Math.floor((Math.random() * 5) + 1);
  return callback(lotteryNumber, betNumber) ? 'Parabéns, você ganhou' : 'Tente novamente';
};

console.log(lotteryResult(2, lotteryChecker));
