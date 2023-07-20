function dense(highScores, ownScores) {
    const uniqueHighScores = [...new Set(highScores)];
    const sortedHighScores = uniqueHighScores.slice().sort((a, b) => b - a);
    const rankings = [];
  
    const getPosition = (score) => {
      let rank = 1;
      for (const highScore of sortedHighScores) {
        if (score >= highScore) {
          break;
        }
        rank++;
      }
      return rank;
    };
  
    for (const score of ownScores) {
      const ranking = getPosition(score);
      rankings.push(ranking);
    }
  
    return rankings.join(' ');
  }
  
  const highScores = [100, 100, 50, 40, 40, 20, 10];
  const ownScores = [5, 25, 50, 120];

  const highScores2 = [80, 90, 110, 20, 10, 20];
  const ownScores2 = [10, 30, 90, 120];
  
  const highScores3 = [45, 100, 50, 40, 40, 10, 10];
  const ownScores3 = [8, 55, 100, 10];
  
  
  console.log(dense(highScores, ownScores)); 
  console.log(dense(highScores2, ownScores2)); 
  console.log(dense(highScores3, ownScores3)); 

   
  