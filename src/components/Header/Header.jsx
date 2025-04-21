import React from 'react';
import { NavLink } from "react-router-dom";

import styles from "./header.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            < div className={styles.leftSide} >
                <NavLink className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link} to='/projectBoard'>Проекты</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link} to='/tasksBoard'>Все задачи</NavLink>
            </ div>
            <button className={styles.newTaskBtn}>Создать задачу</button>
        </div >
    )
}

export default Header