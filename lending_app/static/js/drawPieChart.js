drawPieChart('pieChart1', pieData1);

if (pieData2) {
  drawPieChart('pieChart2', pieData2);
}

function drawPieChart(div, bankData) {
  var pie = new d3pie(div, {
  	"footer": {
  		"color": "#999999",
  		"fontSize": 10,
  		"font": "open sans",
  		"location": "left"
  	},
  	"size": {
  		"canvasWidth": 400,
      "canvasHeight": 400,
  		"pieOuterRadius": "90%"
  	},
  	"data": {
  		"sortOrder": "value-desc",
  		"content": [
  			{
  				"label": "Small Business",
  				"value": (bankData.small*100),
  				"color": "#B2EBF2"
  			},
  			{
  				"label": "Individual",
  				"value": (bankData.individual*100),
  				"color": "#0097A7"
  			},
  			{
  				"label": "Farm",
  				"value": (bankData.farm*100),
  				"color": "#00BCD4"
  			},
  			{
  				"label": "Micro",
  				"value": (bankData.micro*100),
  				"color": "#4DD0E1"
  			}
  		]
  	},
  	"labels": {
  		"outer": {
  			"pieDistance": 32
  		},
  		"inner": {
  			"hideWhenLessThanPercentage": 3
  		},
  		"mainLabel": {
  			"fontSize": 14
  		},
  		"percentage": {
  			"color": "#ffffff",
  			"decimalPlaces": 0
  		},
  		"value": {
  			"color": "#adadad",
  			"fontSize": 11
  		},
  		"lines": {
  			"enabled": true
  		},
  		"truncation": {
  			"enabled": true
  		}
  	},
    "effects": {
  		"pullOutSegmentOnClick": {
  			"effect": "linear",
  			"speed": 100,
  			"size": 8
  		}
  	},
  	"misc": {
  		"gradient": {
  			"enabled": true,
  			"percentage": 100
  		}
  	}
  });
}
