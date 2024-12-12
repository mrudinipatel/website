import styles from './AboutStyles.module.css';
import arrowIcon from '../../assets/arrow-bullet.svg';

function About() {
  return (
    <section className={styles.container} id="about">
        <h1 className="sectionTitle">About me</h1>
        <div className={styles.header}>
          <h3>Mrudini Patel</h3>
          <p>Computer science Student @ UoGuelph | Specializing in HCI </p>
        </div>
        <hr />
        <div className={styles.body}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/* Table */}
        <div className={styles.skillsTable}>
          <table>
            <thead>
              <tr>
                <th>Frontend</th>
                <th>Backend</th>
                <th>Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li><img className={styles.arrow} src={arrowIcon} alt="Arrow bullet" /> React</li>
                    <li><img className={styles.arrow} src={arrowIcon} alt="Arrow bullet" /> HTML</li>
                    <li><img className={styles.arrow} src={arrowIcon} alt="Arrow bullet" /> CSS</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li><img className={styles.arrow} src={arrowIcon} alt="Arrow bullet" /> Node.js</li>
                    <li><img className={styles.arrow} src={arrowIcon} alt="Arrow bullet" /> Express</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li><img className={styles.arrow} src={arrowIcon} alt="Arrow bullet" /> Git</li>
                    <li><img className={styles.arrow} src={arrowIcon} alt="Arrow bullet" /> VS Code</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </section>
  );
}

export default About;
