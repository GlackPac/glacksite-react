import React from 'react';
import { Container} from 'react-bootstrap';
import Clock from '../components/ClockLifecycle';
import LoadingTest from '../components/LoadingEffect';
import Dropdown from '../components/DropdownConditional';
import ExampleForm from '../components/ExampleForm';

const About = (props:any) => {
    return (
        <Container>
            <p>Hello, i'm About</p>
            <Clock/>
            <LoadingTest/>
            <Dropdown/>
            <ExampleForm/>
        </Container>
    )
}

export default About