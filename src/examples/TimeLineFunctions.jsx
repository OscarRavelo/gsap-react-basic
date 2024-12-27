import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const TimeLineFunctions = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  const tween = useRef();

  const { context, contextSafe } = useGSAP(
    () => {
      tween.current = gsap.to(".box", {
        x: 1400,
        duration: 7,
      });

      tween.current.pause();
    },
    { scope: container },
  );

  const onPlay = contextSafe(() => {
    tween.current.play();
  });

  const onPause = contextSafe(() => {
    tween.current.pause();
  });

  const onReverse = contextSafe(() => {
    tween.current.reverse();
  });

  const onTimeScale = contextSafe(() => {
    tween.current.timeScale(2);
  });

  return (
    <div
      ref={container}
      className="w-full h-lvh bg-black flex justify-center items-center"
    >
      <div className="w-full ">
        <div className="w-full flex  items-center">
          <div className="w-32 h-32 bg-green-500   flex items-center justify-center font-bold box hover:cursor-pointer">
            animation
          </div>
        </div>
        <div className="flex w-full justify-evenly">
          <div
            onClick={onPlay}
            className="rounded-full w-24 flex justify-center items-center border-4 mt-2 boder-white"
          >
            play()
          </div>
          <div
            onClick={onPause}
            className="rounded-full w-24 flex justify-center items-center border-4 mt-2 boder-white"
          >
            pause()
          </div>
          <div
            onClick={onReverse}
            className="rounded-full w-24 flex justify-center items-center border-4 mt-2 boder-white"
          >
            reverse()
          </div>
          <div
            onClick={onTimeScale}
            className="rounded-full w-24 flex justify-center items-center border-4 mt-2 boder-white"
          >
            timeScale(2)
          </div>
          <div
            onClick={console.log}
            className="rounded-full w-24 flex justify-center items-center border-4 mt-2 boder-white"
          >
            play()
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineFunctions;
