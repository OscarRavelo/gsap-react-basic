import barbaro from "../assets/barbaro.gif";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const ImageFollow = () => {
  const container = useRef();
  const xTo = useRef();
  const yTo = useRef();

  const { context, contextSafe } = useGSAP(
    () => {
      xTo.current = gsap.quickTo(".follow", "x", {
        duration: 0.8,
        ease: "power3",
      });
      yTo.current = gsap.quickTo(".follow", "y", {
        duration: 0.8,
        ease: "power3",
      });
    },
    { scope: container },
  );

  const moveGif = contextSafe((e) => {
    console.log("e", e);
    xTo.current(e.clientX);
    yTo.current(e.clientY);
  });

  return (
    <div
      ref={container}
      className="w-full h-lvh follow mb-12 border flex items-center justify-center hover:cursor-none bg-white  border-red-600"
      onMouseMove={(e) => moveGif(e)}
    >
      <img
        style={{ top: 0, left: 0, position: "fixed" }}
        src={barbaro}
        className="follow w-52 h-32"
      />
    </div>
  );
};

export default ImageFollow;
