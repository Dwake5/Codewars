// https://www.codewars.com/kata/ten-pin-bowling/javascript

// Quite a complex challenge due to the nature of bowling scoring.
// Was made harder due to the 1-8th, 9th and 10th rules all having separate rules to each other.
// Strikes and spares also synergies with each other in a different way.

// This problem was tested by ~120 varying inputs on codewars, some randomized.

const bowlingScore = frames => {
  let score = 0;

  frames = frames
    .split(" ")
    .map(el => (el === "0" ? "00" : el))
    .map(el => el.split(""));

  const handleStrike = round => {
    score += 10;
    if (isItSpare(round + 1)) {
      score += 10;
    } else {
      normalScore(round + 1);
    }
  };

  const handleTwoStrike = round => {
    score += 20;
    score += +frames[round + 2][0];
  };

  const handleThreeStrike = () => {
    score += 30;
  };

  const handleSpare = round => {
    score += 10;
    if (isItStrike(round + 1)) {
      score += 10;
    } else {
      score += +frames[round + 1][0];
    }
  };

  const isItStrike = round => {
    if (frames[round][0] === "X") {
      return true;
    }
  };

  const isItSpare = round => {
    if (frames[round][1] === "/") {
      return true;
    }
  };

  const normalScore = round => {
    score += +frames[round][0];
    score += +frames[round][1];
  };

  // Start doing frames
  for (let round = 0; round < 8; round++) {
    if (isItStrike(round)) {
      if (isItStrike(round + 1)) {
        if (isItStrike(round + 2)) {
          handleThreeStrike();
        } else {
          handleTwoStrike(round);
        }
      } else {
        handleStrike(round);
      }
    } else if (isItSpare(round)) {
      handleSpare(round);
    } else {
      normalScore(round);
    }
  }

  // Penultimate round
  if (isItStrike(8)) {
    score += 10;
    if (isItStrike(9)) {
      score += 10;
      if (frames[9][1] === "X") {
        score += 10;
      }
    } else if (isItSpare(9)) {
      score += 10;
    } else {
      normalScore(9);
    }
  } else if (isItSpare(8)) {
    score += 10;
    if (isItStrike(9)) {
      score += 10;
    } else {
      score += +frames[9][0];
    }
  } else {
    normalScore(8);
  }

  // Last round
  if (isItStrike(9)) {
    score += 10;
    if (frames[9][1] === "X") {
      score += 10;
      if (frames[9][2] === "X") {
        score += 10;
      } else {
        score += +frames[9][2];
      }
    }
  } else if (isItSpare(9)) {
    score += 10;
    if (frames[9][2] === "X") {
      score += 10;
    } else {
      score += +frames[9][2];
    }
  } else {
    normalScore(9);
  }

  return score;
};

// bowlingScore("X X X X X 0 X X 0 XX4")
// => 174
// bowlingScore("05 X 0 X 6/ 0 X X 0 X09");
// => 85
// bowlingScore("70 82 0 47 X 0 71 61 0 3/X");
// => 73
// bowlingScore("22 33 0/ X 54 0/ 25 X 0 0/9");
// => 106
