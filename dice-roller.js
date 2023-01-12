const rollCount = process.argv[2];

function rollDice(numRolls) {
    for (let i = 0; i < numRolls; i++) {
        console.log(Math.floor(Math.random() * 6) + 1);
    }
}

rollDice(rollCount);
