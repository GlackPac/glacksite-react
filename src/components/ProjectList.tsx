import React from 'react';
import { Image, Card, Row } from 'react-bootstrap';
import { Project } from '../data/Project';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    const items = projects.map(project =>(
        <ProjectCard project={project}/>
    ));
    return <Row>{items}</Row>
}

export default ProjectList;