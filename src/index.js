import runBrownian from './brownian/run';



import initAudio from './visualizer/audio-setup';
import winAud from './media/All I Do Is Win.mp3';


const dataFrequency = initAudio(winAud,
  () => {},
  () => console.log('play'),
  () => console.log('pause')
);





// runBrownian();