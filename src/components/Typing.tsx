import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Typing() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: ["Software Developer", "Flutter Developer", "React Developer", "Computer Engineer"],
      typeSpeed: 70,
      backSpeed: 45,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return <span ref={el}></span>;
}

export default Typing;