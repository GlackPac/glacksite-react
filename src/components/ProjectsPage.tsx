import React from 'react';
import {MOCK_PROJECTS} from '../data/MockProject';

function ProjectsPage() {
    return (
        <>
            <h3>Tutorial from <a href="https://handsonreact.com/docs/labs/react-tutorial-typescript">here</a></h3>
            <br/>
            <p>Json text here:</p>
            <p><em>{JSON.stringify(MOCK_PROJECTS[0], null, " ")}</em></p>
            {/* <pre>{JSON.stringify(MOCK_PROJECTS, null, " ")}</pre> */}
        </>
        );
}

export default ProjectsPage;