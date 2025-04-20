import React from 'react'

import styles from './ProjectBoard.module.css'
import Header from '../Header/Header'
import ProjectsList from '../projectsList/ProjectsList'

function ProjectBoard() {
    return (
        <div className={styles.projectBoard}>
            <ProjectsList />
        </div>
    )
}

export default ProjectBoard