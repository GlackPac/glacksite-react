import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectsPage from "../components/ProjectsPage";


const Stuff = (props:any) => {
    return (
        <Container>
            <h3>Stuff</h3>
            <ProjectsPage/>
        </Container>
    )
}

export default Stuff