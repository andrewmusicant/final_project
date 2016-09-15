function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
  return "<h4>"+n+"</h4><table>"+
    "<tr><td>Banks:</td><td>"+(d.low)+"</td></tr>"+
    // "<tr><td>Average</td><td>"+(d.avg)+"</td></tr>"+
    // "<tr><td>High</td><td>"+(d.high)+"</td></tr>"+
    "</table>";
}

var sampleData ={};	/* Sample random data. */
["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
"WI", "MO", "AR", "OK", "KS", "LS", "VA"]
  .forEach(function(state){
    var low=Math.round(100*Math.random());
    sampleData[state]={low:d3.min([low]), high:d3.max([low]),
        avg:Math.round((low)/1), color:d3.interpolate("#E0F7FA", "#006064")(low/100)};
  });

/* draw states on id #statesvg */
uStates.draw("#statesvg", sampleData, tooltipHtml);

d3.select(self.frameElement).style("height", "600px");
