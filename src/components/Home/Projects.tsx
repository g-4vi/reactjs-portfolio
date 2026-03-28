import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          <ProjectCard
            title="Tanam Tanam Umbi"
            linkHref="https://g5-creative-studios.itch.io/tanam-tanam-umbi"
            imageSrc="https://img.itch.zone/aW1nLzE4OTMwOTI2LnBuZw==/original/GOSTOa.png" // replace with actual screenshot URL
            description='A combination of the classics, "Diner Dash" and "Plants vs Zombies" in a form of a 2D top down relaxing farming game, why not give it a shot? ;)'
            authors="G5 Creative, g.4vi, Riki Fadly, Maulana-play"
          />
          <ProjectCard
            title="Trials of Mageia"
            linkHref="https://thyyn.itch.io/trials-of-mageia"
            imageSrc="https://img.itch.zone/aW1nLzI0MjY0MDAyLnBuZw==/original/FwdDWM.png" // replace with actual screenshot URL
            description='Embracing the theme "Small Scope, Big Fun", this game strips away complex RPG systems to focus on a single, polished goal: pure arcade survival. Simple mechanics, maximum replayability!'
            authors="Thynn, g.4vi, jianweilie, Black Lizard Studio, Mukromka, Mesden"
          />
          <ProjectCard
            title="Massaquerade"
            linkHref="https://layzardev.itch.io/massaquerade"
            imageSrc="https://img.itch.zone/aW1nLzI1MzA5NDQzLnBuZw==/original/usQjKv.png" // replace with actual screenshot URL
            description='Why the name Massaquerade? Gabungan dari Masquerade dan Massacre Masquerade artinya pesta topeng literally ngambil dari Tema Massacre karena perasaan dikejar deadline latar setting kita yang menghabisi musuh di masquerade party'
            authors="LayzarDev, ItsAMeDann, g.4vi, AstridShr, Th4llium"
          />
        </div>
      </div>
    </section>
  );
}

export default Project;
