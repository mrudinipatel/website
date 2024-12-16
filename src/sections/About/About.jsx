import styles from './AboutStyles.module.css';
import SkillList from '../../common/SkillList';

function About() {
  return (
    <section className={styles.container} id="about">
        <h1 className="sectionTitle">About me</h1>
        <div className={styles.header}>
            <h3>Mrudini Patel</h3>
            <p>Computer Science Student @ UoGuelph | Avid Developer & Designer</p>
        </div>
        <hr />
        <div className={styles.body}>
            <p>
                Hello! My name is Mrudini. I'm currently finishing my final year of computer science studies at the University of Guelph.  
                I have a passion for creating innovative, UI/UX-friendly websites that deliver seamless and engaging user experiences.
                While front-end development fuels my creativity, I simultaneously also enjoy diving into the technical intricacies offered by
                back-end and cloud development. I find fulfillment in building robust systems that not only support meaningful user interfaces,
                but also ensure reliability and scalability behind the scenes.
                <br/><br/>
                Through my academic and work experiences, I've developed strong skills in full-stack development, problem-solving, 
                and collaborating in agile environments. Working on various projects has also enabled me to design and implement clean, 
                efficient, user-focused solutions while continuously learning and improving my expertise.
                <br/><br/>
                I hope this website provides a glimpse into who I am, my skills, experiences, and the passion I bring to everything I create!

                {/* To be placed in the gallary section?? */}
                {/* I enjoy coding in the same vein as I enjoy baking. Cooking and coding are both dances of creation, where raw elements get transformed
                into masterpieces. Following a recipe is much like writing code. Each requires great precision and care — a pinch too much, a bracket too few, 
                and the outcome may falter. 
                
                Yet both are forgiving in their artistry, inviting the creator to experiment - to season with imagination and debug with determination.
                These mistakes become some of the greatest lessons in creating the final product. Cooking and coding remind me that real joy lies in creating, 
                sharing, and learning. I enjoy balancing creativity with technical precision to achieve something truly special.   */}
            </p>
            <br />
            <p><b className={styles.bold}>Interests:</b> coding, UI/UX, HCI, food, nature.</p>
            <br />
            <p><b className={styles.bold}>Hobbies:</b> reading, baking, drawing, music, movies, hiking.</p>
        </div>
        <hr />
        <div className={styles.smth}>
            <SkillList />
        </div>
    </section>
  );
}

export default About;
