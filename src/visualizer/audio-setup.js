import * as d3 from 'd3';


function initAudio(src, frameHook, playHook, pauseHook) {
  
  let audioIsOn = false;
  

  d3.select('#target')
    .append('audio').attr('id', 'target-audio')
    .attr('src', src)
    .attr('controls', true)
    .attr('autoplay', true)
  
  const audioEl = document.getElementById('target-audio');
  

  const ctx = new AudioContext();
  const audioSrc = ctx.createMediaElementSource(audioEl);
  const analyzer = ctx.createAnalyser();
  audioSrc.connect(analyzer);
  
  const frequencyData = new Uint8Array(analyzer.frequencyBinCount);
  

  audioEl.addEventListener('play', () => {
    audioIsOn = true;
    playHook && playHook();
    renderFrame();
  });
  audioEl.addEventListener('pause', () => {
    audioIsOn = false
    pauseHook && pauseHook();
  });

  function renderFrame() {
    if(audioIsOn) {
      requestAnimationFrame(renderFrame);
      analyzer.getByteFrequencyData(frequencyData);
      frameHook();
    }
  }

  return frequencyData;
}


export default initAudio;