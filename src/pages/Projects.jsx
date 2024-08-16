import React, { useState } from 'react'; 
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';
import TaskForm from '../components/TaskForm';

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [currentProject, setCurrentProject] = useState(null);

    const handleCreateProject = (project) => {
        setProjects([...projects, project]);
    };

    const handleAddTask = (task) => {
        const updatedProjects = projects.map((project) => {
            if (project === currentProject) {
                return { ...projects, tasks: [...project.tasks, task] };
            }
            return projects;
        });
        setProjects(updatedProjects);
    }
    return (
        <div className="container">
            <h1 className="my-4">Project</h1>
            <div className="row">
                <div className="col-md-6">
            <ProjectForm onCreateProject={handleCreateProject} />
            </div>
            <div className="col-md-6">
            {currentProject && (
                <TaskForm onAddTask={handleAddTask} />
            )}
            <ProjectList 
            projects={projects}
            onSelectProject={setCurrentProject}
            />
                </div>
            </div>
        </div>
    );
};

export default Project;