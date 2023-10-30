import React from 'react';
import { Container} from 'react-bootstrap';
import Clock from '../components/ClockLifecycle';
import LoadingTest from '../components/LoadingEffect';
import Dropdown from '../components/DropdownConditional';
import ExampleForm from '../components/ExampleForm';
import ExampleFormTwo from '../components/ExampleFormTwo';

const Widgets = (props:any) => {
    return (
        <Container>
            <h3>About</h3>
            <Clock/>
            <hr/>
            <LoadingTest/>
            <hr/>
            <Dropdown/>
            <hr/>
            <ExampleForm/>
            <hr/>
            <ExampleFormTwo/>
        </Container>
    )
}

export default Widgets