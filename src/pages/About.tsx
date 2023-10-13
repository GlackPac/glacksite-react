import React from 'react';
import { Container} from 'react-bootstrap';
import Clock from '../components/ClockLifecycle';
import LoadingTest from '../components/LoadingEffect';
import Dropdown from '../components/DropdownConditional';
import ExampleForm from '../components/ExampleForm';
import ExampleFormTwo from '../components/ExampleFormTwo';

const About = (props:any) => {
    return (
        <Container>
            <p>Hello, i'm About</p>
            <Clock/>
            <LoadingTest/>
            <Dropdown/>
            <ExampleForm/>
            <br/>
            <ExampleFormTwo/>
        </Container>
    )
}

export default About