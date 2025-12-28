
import { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
type FontType = keyof typeof FONT_WEIGHTS;
type FontWeight = {
  min: number,
  max: number,
  default: number
}

const FONT_WEIGHTS: Record<string, FontWeight> = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 }
}




const renderText = (text: string, className: string, baseWight = 400) => {
  return [...text].map((char, index) => (
    <span key={index} className={className} style={{ fontVariationSettings: `"wght" ${baseWight}` }}>
      {char === " " ? "\u00a0" : char}
    </span>
  )

  )
}



const setupTextHover = (
  container: HTMLElement | null,
  type: FontType
): (() => void) | void => {
  if (!container) return;

  const letters: NodeListOf<HTMLSpanElement> =
    container.querySelectorAll("span");

  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (
    letter: HTMLElement,
    weight: number,
    duration = 0.5
  ) =>
    gsap.to(letter, {
      duration,
      ease: "power3.out",
      fontVariationSettings: `"wght" ${weight}`,
    });

  const handleMouseMove = (e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 10000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => animateLetter(letter, base, 0.5));
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};


const Welcome = () => {

  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)

  useGSAP(() => {
    setupTextHover(titleRef.current, "title")
    setupTextHover(subtitleRef.current, "subtitle")



  }, [])
  return (
    <section id="welcome">

      <p ref={subtitleRef}>{renderText("Hey I'm Naveen! Welcome to my", "text-3xl font-georama", 100)}</p>
      <h1 ref={titleRef} className='mt-7'>{renderText("portfolio.", "text-9xl italic font-georama", 400)}</h1>

      <div className='small-screen'>
        <p> This Portfolio is designed to be used on a desktop or laptop.</p>
      </div>





    </section>
  )
}

export default Welcome