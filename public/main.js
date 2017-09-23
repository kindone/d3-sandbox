var data = [10, 20, 50, 70, 100, 30, 40]

var divs = d3.select("#main").selectAll("div").data( data )

divs.enter().append("div").text(function(d, i) {
  return d
}).style('color', 'red')
