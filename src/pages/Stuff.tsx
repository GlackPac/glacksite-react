import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectsPage from "../components/ProjectsPage";
import FuncHello from "../components/FunctionHello";
import ClassHello from "../components/ClassHello";
import StateHello from "../components/StateHello";


const Stuff = (props:any) => {
    return (
        <Container fluid>
            <p>Hello, i'm Stuff</p>
            <ProjectsPage/>
            {/* <FuncHello name="function" enthusiasmLevel={3}/>
            <ClassHello name="class" enthusiasmLevel={2}/>
            <StateHello name="state"/> */}
        </Container>
    )
}

export default Stuff