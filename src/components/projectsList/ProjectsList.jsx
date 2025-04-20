import React from 'react'

import Project from '../project/Project'

import styles from './ProjectsList.module.css'

function ProjectsList() {
    return (
        <div className={styles.list}>
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    )
}

export default ProjectsList