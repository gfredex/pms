import React from 'react';

import TasksList from '../TasksList/TasksList';

import styles from "./TaskBoard.module.css";

function TasksBoard() {
    return (
        <div className={styles.tasksBoard}>
            <TasksList />
        </div>
    )
}

export default TasksBoard