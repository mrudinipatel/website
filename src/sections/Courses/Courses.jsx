import styles from './CoursesStyles.module.css';

// Should be a new page (not on same one page site) with nav bar and footer
function Courses() {
  return (
    <section className={styles.container} id="courses">
        <h1 className="section-title">Courses I've Taken</h1>
        <div className={styles.courses}>
            {/* Courses to go here - categorized by year?? */}
        </div>
    </section>
  );
};

export default Courses;
