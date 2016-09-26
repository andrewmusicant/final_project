var min = 0,
    mid = 150,
    max = 300;

drawKey(min, mid, max, 400, 20);


function drawKey(min, mid, max, width, height) {
  // Scales
  console.log("function called");
  var colorRange = ['#E0F7FA', '#26C6DA', '#006064'],
      color = d3.scale.linear()
        .domain([min, mid, max])
        .range(colorRange),
      x = d3.scale.linear()
        .domain([min, max])
        .range([0, width]);

  var x = d3.scale.linear()
    .domain([min, max])
    .range([0, width]);

  var svg = d3.select('#key');

  // SVG defs
  var defs = svg
    .datum({min: min, mid: mid})
    .append('svg:defs');

  // Gradient defs
  var gradient1 = defs.append('svg:linearGradient')
    .attr('id', 'gradient1');
  var gradient2 = defs.append('svg:linearGradient')
    .attr('id', 'gradient2');

  // Gradient 1 stop 1
  gradient1.append('svg:stop')
    .datum({min: min})
    .attr('stop-color', function(d) { return color(d.min) })
    .attr('offset', '0%');

  // Gradient 1 stop 2
  gradient1.append('svg:stop')
    .datum({mid: mid})
    .attr('stop-color', function(d) { return color(d.mid) })
    .attr('offset', '100%');

  // Gradient 2 stop 1
  gradient2.append('svg:stop')
    .datum({mid: mid})
    .attr('stop-color', function(d) { return color(d.mid) })
    .attr('offset', '0%');

  // Gradient 2 stop 2
  gradient2.append('svg:stop')
    .datum({max: max})
    .attr('stop-color', function(d) { return color(d.max) })
    .attr('offset', '100%');

  // Gradient 1 rect
  svg
    .datum({min: min, mid: mid })
    .append('svg:rect')
      .attr('id', 'gradient1-bar')
      .attr('fill', 'url(#gradient1)')
      .attr('width', function(d) { return x(d.mid) })
      .attr('height', height);

  // Gradient 2 rect
  svg
    .datum({mid: mid, max: max})
    .append('svg:rect')
      .attr('id', 'gradient2-bar')
      .attr('fill', 'url(#gradient2)')
      .attr('transform', function(d) { return 'translate(' + x(d.mid) + ',0)'})
      .attr('width', function(d) { return x(d.max) - x(d.mid) })
      .attr('height', height);

  // Append axis
  var axis = d3.svg.axis()
      .scale(x)
      // .tickFormat(d3.format('.0%'))
      .tickValues([min, mid, max]);

  svg.append('g').attr('class', 'axis');

  svg.selectAll('.axis')
    .attr('transform', 'translate(0,'+(height)+')')
    .call(axis);
}
