import styles from './HomeStyles.module.css';
import me from '../../assets/me.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import CV from '../../assets/resume.pdf';
import { useTheme } from '../../common/ThemeContext';
import Typewriter from './Typewriter';
import Socials from './Socials';

function Home() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    
    return (
        <section className={styles.container} id="home">
            <nav className={styles.navbar}>
                <ul className={styles.navLinks}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                </ul>
                <img 
                    className={styles.colourMode} 
                    src={themeIcon} 
                    alt="Colour Mode Icon" 
                    onClick={toggleTheme}
                />
            </nav>
            <div className={styles.colourModeContainer}>
                <img 
                    className={styles.home} 
                    src={me} 
                    alt="Profile picture of Mrudini Patel" 
                />
            </div>
            <div className={styles.info}>
                <h1>Mrudini Patel</h1>
                <div className={styles.typewriter}>
                    <p>I</p>
                    <Typewriter
                        strings={[
                        "study computer science",
                        "am a software developer",
                        "am interested in HCI",
                        ]}
                        autoStart={true}
                        loop={true}
                    />
                </div>
                <Socials />
                <a href={CV} target="_blank"> 
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Home;