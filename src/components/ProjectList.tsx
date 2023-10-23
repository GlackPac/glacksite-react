import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Project } from '../data/Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList({ projects, onSave }: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleEdit = (project: Project) => {
        console.log(project);
        setProjectBeingEdited(project);
    }

    const cancelEditing = () => {
        setProjectBeingEdited({});
    }

    const items = projects.map(project =>(
            <Col key={project.id}>
            {project === projectBeingEdited ? (
                <ProjectForm
                    project={project}
                    onSave={onSave}
                    onCancel={cancelEditing}
                />
            ) : (
                <ProjectCard project={project} onEdit={handleEdit} />
            )}
            </Col>
    ));
    return <Row sm='auto' className='g-0'>{items}</Row>
}

export default ProjectList;