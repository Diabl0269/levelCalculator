const levelCalculator = (totalExp, expToLevelUp = 30) => {
  let level = 1;
  let exp = totalExp;
  let currentExpToLevelUp = expToLevelUp;

  while (exp >= currentExpToLevelUp) {
    exp -= currentExpToLevelUp;
    currentExpToLevelUp += expToLevelUp;
    level += 1;
  }

  return { level, exp };
};

const { level, exp } = levelCalculator(100);

console.log(`Level: ${level}, exp: ${exp}`);
