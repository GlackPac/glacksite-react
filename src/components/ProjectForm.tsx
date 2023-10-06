import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';

function ProjectForm() {
    return (
        <>
            <Form>
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
                <Button>Submit</Button>
            </Form>
        </>
    );
}

export default ProjectForm;