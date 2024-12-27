import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const ClickAnimation = () => {
  const container = useRef();

  gsap.registerPlugin(useGSAP);

  const { contextSafe } = useGSAP({
    scope: container,
    dependencies: null,
  });

  const onClickSafe = contextSafe(() => {
    gsap.to(".box", {
      rotation: "+=360",
      duration: 2,
    });
  });

  return (
    <div
      ref={container}
      className="w-full  border-b flex justify-center border-red-600"
    >
      <div
        onClick={onClickSafe}
        className=" box w-32 h-32 bg-green-500 flex justify-center items-center font-bold hover: cursor-pointer"
      >
        Click me
      </div>
    </div>
  );
};

export default ClickAnimation;
