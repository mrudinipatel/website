import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

// REMOVE CHECKMARK TO A BETTER ICON MAYBE
// ALSO arrows don't show up in light mode
// Idea: put skills in a 3 column table in about me section
function Skills() {
  return (
    <section className={styles.container} id="skills">
        <h1 className="sectionTitle" >Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="ReactJS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="TypeScript" />
            <SkillList src={checkMarkIcon} skill="HTML5/CSS3" />
            <SkillList src={checkMarkIcon} skill="NodeJS" />
            <SkillList src={checkMarkIcon} skill="Jest" />
            <SkillList src={checkMarkIcon} skill="Figma" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="C" />
            <SkillList src={checkMarkIcon} skill="Java" />
            <SkillList src={checkMarkIcon} skill="Python" />
            <SkillList src={checkMarkIcon} skill="jQuery" />
            <SkillList src={checkMarkIcon} skill="PHP" />
            <SkillList src={checkMarkIcon} skill="SQL/SQLite" />
            <SkillList src={checkMarkIcon} skill="Azure DevOps" />
            <SkillList src={checkMarkIcon} skill="Google Cloud Platform" />

        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Git" />
            <SkillList src={checkMarkIcon} skill="Docker" />
            <SkillList src={checkMarkIcon} skill="Linux" />
            <SkillList src={checkMarkIcon} skill="Jenkins" />
            <SkillList src={checkMarkIcon} skill="Postman" />
            <SkillList src={checkMarkIcon} skill="IntelliJ" />
        </div>
    </section>
  );
}

export default Skills