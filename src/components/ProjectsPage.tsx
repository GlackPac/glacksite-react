import React from 'react';
import {MOCK_PROJECTS} from '../data/MockProject';
import { Project } from '../data/Project';
import ProjectList from './ProjectList';

function ProjectsPage() {
    const saveProject = (project: Project) => {
        console.log('Saving project: ', project);
    };

    return (
        <>
            <h3>Tutorial from <a href="https://handsonreact.com/docs/forms">here</a></h3>
            <h5 className='fst-italic'>Currently between Labs C and D</h5>
            <br/>
            <p>Content here:</p>
            <ProjectList 
                onSave={saveProject}
                projects={MOCK_PROJECTS} />
        </>
        );
}

export default ProjectsPage;