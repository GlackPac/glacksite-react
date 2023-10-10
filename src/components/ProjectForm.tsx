import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';

interface ProjectFormProps {
    onCancel: () => void;
}

function ProjectForm({ onCancel}:  ProjectFormProps) {
    return (
        <>
            <Form className='m-2' style={{ width: '18rem' }}>
                <Row className="mb-2">
                    <Form.Group controlId="formGridName">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control placeholder='Enter name'/>
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group controlId="formGridDescription">
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control as="textarea" placeholder='Enter description'/>
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group controlId="formGridBudget">
                        <Form.Label>Project Budget</Form.Label>
                        <Form.Control placeholder='Enter budget'/>
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group controlId="formGridCheckActive">
                        <Form.Check type="checkbox" label="Active?"/>
                    </Form.Group>
                </Row>
                <Button className='m-1'>Submit</Button><Button onClick={onCancel} className='m-1'>Cancel</Button>
            </Form>
        </>
    );
}

export default ProjectForm;