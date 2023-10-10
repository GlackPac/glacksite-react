import React from 'react';
import {MOCK_PROJECTS} from '../data/MockProject';
import ProjectList from './ProjectList';

function ProjectsPage() {
    return (
        <>
            <h3>Tutorial from <a href="https://handsonreact.com/docs/labs/react-tutorial-typescript">here</a></h3>
            <h5 className='fst-italic'>Currently on Lab 11</h5>
            <br/>
            <p>Content here:</p>
            <ProjectList projects={MOCK_PROJECTS} />
        </>
        );
}

export default ProjectsPage;