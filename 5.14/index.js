function parseScores(scoresString) {
   let myList = scoresString.split(" ");
   for (let i = 0; i < myList.length; i++) {
      myList[i] = parseInt(myList[i])
   }
   return myList
}

function buildDistributionArray(scoresArray) {
   let output = [0, 0, 0, 0, 0];
   if (typeof scoresArray == 'string' ) {
      scoresArray = parseScores(scoresArray)
   }
   for (let i = 0; i < scoresArray.length; i++) {
      if (100 >= scoresArray[i] && scoresArray[i] >= 90) {
         output[0]++
      }
      else if (90 > scoresArray[i] && scoresArray[i] >= 80) {
         output[1]++
      }
      else if (80 > scoresArray[i] && scoresArray[i] >= 70) {
         output[2]++
      }
      else if (70 > scoresArray[i] && scoresArray[i] >= 60) {
         output[3]++
      }
      else if (60 > scoresArray[i]) {
         output[4]++
      }
   }
   return output
}

function setTableContent(userInput) {
   let scores = buildDistributionArray(userInput);
   let row1 = document.getElementById("firstRow");
   let row3 = document.getElementById("thirdRow");
   row1.innerHTML = `<td><div style="height:${scores[0]*10}px" class="bar0"></div></td><td><div style="height:${scores[1]*10}px" class="bar1"></div></td>
   <td><div style="height:${scores[2]*10}px" class="bar2"></div></td><td><div style="height:${scores[3]*10}px" class="bar3"></div></td>
   <td><div style="height:${scores[4]*10}px" class="bar4"></div></td>`;
   row3.innerHTML = `<td>${scores[0]}</td><td>${scores[1]}</td><td>${scores[2]}</td><td>${scores[3]}</td><td>${scores[4]}</td>`;
}
// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");
