import React, { useState, useEffect } from 'react';
import darkArrow from '../assets/arrow-dark.svg';
import lightArrow from '../assets/arrow-light.svg';
import { useTheme } from './ThemeContext';
import styles from '../sections/About/AboutStyles.module.css';

function CourseList () {
    const { theme } = useTheme();
    const themeArrow = theme === 'light' ? lightArrow : darkArrow;
    const [groupSize, setGroupSize] = useState(3);

    const courses = [
        'Data Structures', 'Algorithms', 
        'Object Oriented Programming', 'Databases', 
        'Software Engineering', 'Software Testing', 
        'System Design', 'Human Computer Interaction',
        'Mobile Computing', 'Compilers', 'User Interface Design',
        'Statistics', 'Data Science', 'Operating Systems',
        'Microcomputers', 'Linear Algebra', 'Discrete Mathematics'
    ];

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        const updateGroupSize = () => {
            setGroupSize(mediaQuery.matches ? 2 : 3);
        };

        updateGroupSize();
        mediaQuery.addEventListener('change', updateGroupSize);
    
        return () => {
            mediaQuery.removeEventListener('change', updateGroupSize);
        };
    }, []);
    
    const groupSkills = (arr, size) => {
        const grouped = [];
        for (let i = 0; i < arr.length; i += size) {
            grouped.push(arr.slice(i, i + size));
        }

        return grouped;
    };

    return (
        <div className={styles.courseContainer}>
            <h3>Notable Courses</h3>

            <ul className={styles.list}>
                {groupSkills(courses, groupSize).map((group, index) => (
                <li className={styles.listItem} key={index}>
                    <img className={styles.bulletIcon} src={themeArrow} alt="Arrow bullet point" /> 
                    {group.join(', ')}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseList;
