import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectsPage from "../components/ProjectsPage";


const Stuff = (props:any) => {
    return (
        <Container>
            <p>Hello, i'm Stuff</p>
            <ProjectsPage/>
        </Container>
    )
}

export default Stuff