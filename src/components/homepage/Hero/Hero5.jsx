
import React, { useEffect } from 'react';
import { useRive, useStateMachineInput } from 'rive-react';
import "./Hero5.css";

function Hero5() {
  const STATE_MACHINE_NAME = "State Machine 1";
  const INPUT_NAME = "Switch";

  const { rive, RiveComponent } = useRive({
    src: "https://editor.rive.app/file/vp/1164198",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const onLoadFunction = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME
  );

  useEffect(() => {
    if (onLoadFunction) {
      onLoadFunction.fire(); 
    }
  }, [onLoadFunction]);

  return (
    <div>
      <h1 className="H1">Rive React Animation</h1>
      <RiveComponent />
    </div>
  );
}

export default Hero5;



// import Rive from '@rive-app/react-canvas';

// function App() {
//   return (
//     <div>
//       <Rive src="vp.riv" 
//       animations={['Slice 166']}
//       autoplay/>
//     </div>
//   );
// }

// export default App;














// import { useRive, useStateMachineInput } from "rive-react";

// function Hero5() {
//   const STATE_MACHINE_NAME = "State Machine 1";
//   const INPUT_NAME = "Switch";

//   const {rive, RiveComponent} = useRive ({
//     src: "vp.riv",
//     stateMachines: STATE_MACHINE_NAME,
//     autoplay: true,
//   });

//   const onClickInput = useStateMachineInput (
//     rive, 
//     STATE_MACHINE_NAME,
//     INPUT_NAME
//   );

//   return (
//     <div>
//       <RiveComponent onClick={() => onClickInput.fire()}/>
//     </div>
//   );
// }


// export default Hero5;