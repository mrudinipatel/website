import styles from './ProjectStyles.module.css';
import moleculeParser from '../../assets/moleculeParser.png';
import courseSearch from '../../assets/courseSearch.png'; 
import gradebook from '../../assets/studentMgmtSystem.png';
import weatherNetwork from '../../assets/weatherNetwork.png';
import ProjectCard from '../../common/ProjectCard';

const projectData = [
  {
    src: moleculeParser,
    link: "https://github.com/mrudinipatel/Molecule-Parser",
    projectTitle: "Molecule Parser",
    projectInfo: "Visual simulation of SDF files.",
  },
  {
    src: courseSearch,
    link: "https://github.com/mrudinipatel/Course-Search",
    projectTitle: "Course Search",
    projectInfo: "UoGuelph course planner.",
  },
  {
    src: gradebook,
    link: "https://github.com/mrudinipatel/Student-Class-Management-System",
    projectTitle: "Student Class Management System",
    projectInfo: "Gradebook tool for teachers.",
  },
  {
    src: weatherNetwork,
    link: "https://github.com/mrudinipatel/Weather-Network-Program",
    projectTitle: "Weather Network",
    projectInfo: "Python app to check your local weather.",
  },
];

function Projects() {
  return (
    <section className={styles.container} id="projects">
        <h1 className="section-title">Projects</h1>
        <div className={styles.projectsContainer}>
          {projectData.map((project, index) => (
            <ProjectCard 
              key={index}
              src={project.src}
              link={project.link}
              projectTitle={project.projectTitle}
              projectInfo={project.projectInfo}
            />
          ))}
        </div>
    </section>
  );
}

export default Projects;
