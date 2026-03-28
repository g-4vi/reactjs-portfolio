
import { useEffect, useRef } from "react";
import styles from "./About.module.css"

function AboutDetail() {
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
      <div className={styles.aboutContainer}>
        
        <div className="about-text">
          <h2><b>Hello, I'm Alki!</b></h2>
          <p>
           As the home page says, I am a passionate Tech Enthusiast with various blends of skills and experiences. Currently, I am working as one of the wonderful team members at <b>Funix Indonesia</b> as <b>a Game Programmer</b>.
          <br></br><br></br>
          Even though that, I am always open to new opportunities to help people and make a difference in the world.
          </p>

        </div>
        <img src="/Fotoalki.png" alt="My Photo" className="about-photo" />
      </div>
      
      

    </section>
  );
}

export default AboutDetail;
