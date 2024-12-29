import React, { useState, useEffect } from 'react';
import darkArrow from '../assets/arrow-dark.svg';
import lightArrow from '../assets/arrow-light.svg';
import { useTheme } from './ThemeContext';
import styles from '../sections/About/AboutStyles.module.css';

function SkillList() {
    const { theme } = useTheme();
    const themeArrow = theme === 'light' ? lightArrow : darkArrow;
    const [groupSize, setGroupSize] = useState(4);

    const technicalSkills = [
        'ReactJS', 'JavaScript', 
        'NodeJS', 'Material UI', 'Figma', 'HTML/CSS', 'C', 
        'Java', 'Python', 'jQuery', 'PHP', 
        'SQL/MySQL', 'Azure DevOps', 'GCP', 
        'Git', 'Docker', 'Linux', 'Jenkins', 
        'Postman', 'IntelliJ', 'Jest', 'Playwright', 'npm'
    ];

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        const updateGroupSize = () => {
            setGroupSize(mediaQuery.matches ? 3 : 4);
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
        <div className={styles.skillsContainer}>
            <h3>Skills</h3>

            <ul className={styles.list}>
                {groupSkills(technicalSkills, groupSize).map((group, index) => (
                <li className={styles.listItem} key={index}>
                    <img className={styles.bulletIcon} src={themeArrow} alt="Arrow bullet point" /> 
                    {group.join(', ')}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default SkillList;
