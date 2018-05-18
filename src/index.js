const d3 = require('d3');


d3.select('#target')
  .selectAll('li')
  .data(['hi', 'we\'re', '<li>', 'elements'])
  .enter()
  .append('li')
  .text(d => d);