drawChart('chart1', bankData1);

if (bankData2) {
  drawChart('chart2', bankData2);
}



function drawChart(div, bankData) {
  nv.addGraph(function() {
    var chart = nv.models.discreteBarChart()
        .x(function(d) { return d.label })    //Specify the data accessors.
        .y(function(d) { return d.value })
        .showYAxis(false)
        .staggerLabels(false)    //Too many bars and not enough room? Try staggering labels.
        .tooltips(false)        //Don't show tooltips
        .showValues(true)       //...instead, show the bar value right on top of each bar.
        .color(['#4DD0E1', '#0097A7', '#006064'])
        ;

    d3.select('#' + div + ' svg')
        .datum(exampleData())
        .transition().duration(350)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });

  //Each bar represents a single discrete quantity.
  function exampleData() {
   return  [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "Micro" ,
            "value" : bankData.micro
          } ,
          {
            "label" : "Small" ,
            "value" : bankData.small
          } ,
          {
            "label" : "Farm" ,
            "value" : bankData.farm
          }
        ]
      }
    ]
  }
}
