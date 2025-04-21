import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Layout from '../Layout';
import ProjectBoard from "../projectBoard/ProjectBoard";
import TasksBoard from "../tasksBoard/TasksBoard";
import styles from './MainBoard.module.css';


function MainBoard() {
    return (
        <div className={styles.board}>
            <Header />
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<MainBoard />} />
                    <Route path='projectBoard' element={<ProjectBoard />} />
                    <Route path='tasksBoard' element={<TasksBoard />} />
                </Route>
            </Routes>
        </div>
    )
}

export default MainBoard