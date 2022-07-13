function counts(teamA, teamB) {
  let Totalscores = [];
  for (n = 0; n < teamB.length; n++) {
    let scorecount = 0;
    for (m = 0; m < teamA.length; m++) {
      if (teamA[m] <= teamB[n]) {
        scorecount++;
      }
    }
    Totalscores.push(scorecount);
  }

  return Totalscores;
}
//Example Test
teamA = [1, 4, 2, 4, 3];
teamB = [3, 5, 2];
console.log(counts(teamA, teamB)); //---> [3,5,2]
