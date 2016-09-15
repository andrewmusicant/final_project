var pie = new d3pie("pieChart", {
  "header": {
    "title": {
      "text": "Percentages Of Loans for Bank",
      "fontSize": 24,
      "font": "open sans"
    },
    "subtitle": {
      "color": "#999999",
      "fontSize": 12,
      "font": "open sans"
    },
    "titleSubtitlePadding": 9
  },
  "footer": {
    "color": "#999999",
    "fontSize": 10,
    "font": "open sans",
    "location": "bottom-left"
  },
  "size": {
    "canvasWidth": 590,
    "pieOuterRadius": "90%"
  },
  "data": {
    "sortOrder": "value-desc",
    "content": [
      {
        "label": "Small Business Loan",
        "value": ({{bank.small_loan_percentage}}*100),
        "color": "#ff1818"
      },
      {
        "label": "Individual Loan",
        "value": ({{bank.individual_loan_percentage}}*100),
        "color": "#0c6197"
      },
      {
        "label": "Farm Loan",
        "value": ({{bank.farm_loan_percentage}}*100),
        "color": "#4daa4b"
      },
      {
        "label": "Micro Loan",
        "value": ({{bank.micro_loan_percentage}}*100),
        "color": "#effb0c"
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
      "fontSize": 11
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
      "speed": 400,
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
