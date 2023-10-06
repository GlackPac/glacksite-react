import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Project } from '../data/Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    const items = projects.map(project =>(
        <Row key={project.id}>
            <Col>
                <ProjectCard project={project}/>
            </Col>
            <Col>
                <ProjectForm/>
            </Col>
        </Row>
    ));
    return <Container>{items}</Container>
}

export default ProjectList;