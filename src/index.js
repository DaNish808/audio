import { initBrownian } from './brownian/setup';
import initAnimation from './brownian/animate';

import * as d3 from 'd3';
import winAud from './media/All I Do Is Win.mp3';

d3.select('#target')
  .append('audio')
  .attr('src', winAud)
  .attr('controls', true)
  .attr('autoplay', true)




// runBrownian();


function runBrownian() {
  const animationInterval = 1000;
  
  initBrownian();
  initAnimation(animationInterval);
}