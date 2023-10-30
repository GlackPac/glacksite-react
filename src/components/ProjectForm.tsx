import React, { SyntheticEvent, useState } from 'react';
import { Project } from '../data/Project'
import { Form, Button, Row } from 'react-bootstrap';

interface ProjectFormProps {
    project: Project;
    onSave: (project: Project) => void;
    onCancel: () => void;
}

function ProjectForm({ 
    project: initialProject,
    onSave, 
    onCancel,
}:  ProjectFormProps) {
    const [project, setProject] = useState(initialProject);
    const [errors, setErrors] = useState ({
        name: '',
        description: '',
        budget: '',
    });

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (!isValid()) return;
        onSave(project);
    };

    const handleChange = (event: any) => {
        const { type, name, value, checked } = event.target;
        let updatedValue = type === 'checkbox' ? checked : value;

        if (type === 'number') {
            updatedValue = Number(updatedValue);
        }

        const change = {
            [name]: updatedValue,
        };

        let updatedProject: Project;

        setProject((p) => {
            updatedProject = new Project ({ ...p, ...change});
            return updatedProject;
        })
        
        setErrors(() => validate(updatedProject));
    }

    function validate(project: Project) {
        let errors: any = { name: '', description: '', budget: ''};
        if (project.name.length === 0) {
            errors.name = 'Name is required';
        }
        if (project.name.length > 0 && project.name.length < 3) {
            errors.name = 'Project name must be at least 3 characters long';
        }
        if (project.description.length === 0) {
            errors.description = 'Description is required';
        }
        if (project.budget === 0) {
            errors.budget = 'Budget must be greater than 0';
        }
        return errors;
    }

    function isValid() {
        return (
            errors.name.length === 0 &&
            errors.description.length === 0 &&
            errors.budget.length === 0
        );
    }
    
    return (
        <>
            <Form
                className='m-2' 
                style={{ width: '18rem' }}
                onSubmit={handleSubmit}
            >
                <Row className="mb-2">
                    <Form.Group controlId="formGridName">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder='Enter name'
                            value={project.name}
                            onChange={handleChange}
                        />
                        {errors.name.length > 0 && (
                            <Form.Text>{errors.name}</Form.Text>
                        )}
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group controlId="formGridDescription">
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control
                            name="description"
                            as="textarea" 
                            placeholder='Enter description'
                            value={project.description}
                            onChange={handleChange}
                        />
                        {errors.description.length > 0 && (
                            <Form.Text>{errors.description}</Form.Text>
                        )}
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group controlId="formGridBudget">
                        <Form.Label>Project Budget</Form.Label>
                        <Form.Control
                            type="number"
                            name="budget"
                            placeholder='Enter budget'
                            value={project.budget}
                            onChange={handleChange}
                        />
                        {errors.budget.length > 0 && (
                            <Form.Text>{errors.budget}</Form.Text>
                        )}
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group controlId="formGridCheckActive">
                        <Form.Check 
                            type="checkbox"
                            name="isActive"
                            label="Active?"
                            checked={project.isActive}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Button type='submit' className='m-1'>Submit</Button><Button onClick={onCancel} className='m-1'>Cancel</Button>
            </Form>
        </>
    );
}

export default ProjectForm;