import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Project } from '../data/Project';
import { BsPencil } from "react-icons/bs";

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

interface ProjectCardProps {
    project: Project;
  }

function ProjectCard(props: ProjectCardProps) {
    const { project } = props;
    const handleEditClick = (projectBeingEdited: Project) => {
        console.log(projectBeingEdited);
    }
    return (
        <Card>
            <Card.Img variant="top" src={project.imageUrl} alt={project.name}/>
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                    {formatDescription(project.description)}
                </Card.Text>
                <Card.Text>
                    Budget: ${project.budget.toLocaleString()}
                </Card.Text>
                <Button
                    variant="secondary"
                    onClick={() => {
                        handleEditClick(project);
                    }}
                >
                    <BsPencil/> Edit
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;