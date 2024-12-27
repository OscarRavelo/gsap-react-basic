import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import barbaro from "../assets/barbaro.gif";
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
      className="w-full  mb-12 border-b flex justify-center border-red-600"
    >
      <img
        src={barbaro}
        onClick={onClickSafe}
        className=" w-42 h-32 box object-center  hover: cursor-pointer"
      />
    </div>
  );
};

export default ClickAnimation;
