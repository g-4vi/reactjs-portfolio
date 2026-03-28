
import { useEffect, useRef } from "react";
import styles from "./About.module.css"

function ExperienceSlider() {
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
    <section>
      <h1 className={styles.title}><b>Experiences</b></h1>
      <div className={styles.experienceSlide}>
        check
      </div>
      
      

    </section>
  );
}

export default ExperienceSlider;
