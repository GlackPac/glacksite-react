import React, { useState, useEffect } from 'react';
import { Project } from '../data/Project';
import { projectAPI } from './ProjectAPI';
import { FiAlertTriangle } from 'react-icons/fi';
import ProjectList from './ProjectList';
import { Row, Spinner, Button, Col } from 'react-bootstrap';

function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState(1);

    const saveProject = (project: Project) => {
        projectAPI
            .put(project)
            .then((updatedProject) => {
                let updatedProjects = projects.map((p: Project) => {
                    return p.id === project.id ? new Project(updatedProject) : p;
                });
                setProjects(updatedProjects);
            })
            .catch((e) => {
                if (e instanceof Error) {
                    setError(e.message);
                }
            });
    };

    useEffect(() => {
        async function loadProjects() {
            setLoading(true);
            try {
                const data = await projectAPI.get(currentPage);
                setError('');
                if (currentPage === 1) {
                    setProjects(data);
                } else {
                    setProjects((projects) => [...projects, ...data]);
                }
            }
            catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
            }} finally {
                setLoading(false);
            }
        }
        loadProjects();
    }, [currentPage]);

    const handleMoreClick = () => {
        setCurrentPage((currentPage) => currentPage + 1);
    }

    return (
        <>
            <h3>Tutorial from <a href="https://handsonreact.com/docs/forms">here</a></h3>
            <h5 className='fst-italic'>Currently between Labs C and D</h5>
            <br/>
            <p>Content here:</p>

            {error && (
                <Row>
                        <p>
                            <FiAlertTriangle className='me-2'/>
                            {error}
                        </p>
                </Row>
            )}

            <ProjectList 
                onSave={saveProject}
                projects={projects} />
             
            {!loading && !error && (
                <Row className="justify-content-md-center my-3">
                    <Col className='text-center' sm lg='2'>
                        <Button variant='secondary' onClick={handleMoreClick}>
                        More...
                        </Button>
                    </Col>
                </Row>
            )}

            {loading && (
                <Row className="justify-content-md-center">
                    <Spinner/>
                </Row>
            )}
        </>
        );
}

export default ProjectsPage;