
import { useEffect, useRef } from "react";
import styles from "./About.module.css"
import ExperienceSlider from "./ExperienceSlider";

function Experience() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  function addAnimation() {
    const scrollers = scrollerRef.current?.querySelectorAll(
      ".scroller"
    ) as NodeListOf<HTMLDivElement>;

    scrollers?.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(
        ".scroller__inner"
      ) as HTMLDivElement | null;
      if (!scrollerInner) return;

      const scrollerContent = Array.from(
        scrollerInner.children
      ) as HTMLElement[];

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <section id="aboutDetail">
      <h1 className={styles.title}><b>Experiences</b></h1>
      <div>
        <ExperienceSlider />
      </div>
      
      

    </section>
  );
}

export default Experience;
