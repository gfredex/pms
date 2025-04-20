import React from 'react';

import styles from './TasksList.module.css';

function TasksList() {
    return (
        <div className={styles.tasksList}>
            <p className={styles.task}>Task 1</p>
            <p className={styles.task}>Task 2</p>
        </div>
    )
}

export default TasksList