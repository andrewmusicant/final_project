function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
  return "<h4>"+n+"</h4><table>"+
    "<tr><td>Banks:</td><td>"+ numOfBanks[n] +"</td></tr>"+
    "<tr><td>Avg Score:</td><td>"+avgOfBanks[n]+"%</td></tr>"+
    "</table>";
}

var sampleData ={};	/* Sample random data. */
["Hawaii", "Alaska", "Florida", "South Carolina", "Georgia", "Alabama", "North Carolina", "Tennessee", "Rhode Island", "Connecticut",
"Massachusetts", "Maine", "New Hampshire", "Vermont", "New York", "New Jersey", "Pennsylvania", "Delaware", "Maryland", "West Virginia",
"Kentucky", "Ohio", "Michigan", "Wyoming", "Montana", "Idaho", "Washington", "District of Columbia", "Texas", "California", "Arizona", "Nevada", "Utah",
"Colorado", "New Mexico", "Oregon", "North Dakota", "South Dakota", "Nebraska", "Iowa", "Mississippi", "Indiana", "Illinois", "Minnesota",
"Wisconsin", "Missouri", "Arkansas", "Oklahoma", "Kansas", "Louisiana", "Virginia"]
  .forEach(function(state){
    var nob=numOfBanks[state];
    sampleData[state]={ color:d3.interpolate("#E0F7FA", "#006064")(nob/300) };

  });

/* draw states on id #statesvg */
uStates.draw("#statesvg", sampleData, tooltipHtml);

d3.select(self.frameElement).style("height", "600px");
