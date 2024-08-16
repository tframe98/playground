import React, { useState } from 'react';

const ProjectForm = ({ onCreateProject }) => {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateProject({ name: projectName, description: projectDescription, tasks: []});
        setProjectName('');
        setProjectDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <div className="mb-3">
                <label htmlFor="projectName" className="form-label">Project Name</label>
            <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            />
            </div>
            <div className="mb-3">
                <label htmlFor="projectDescription" className="form-label">Project Description</label>
            <textarea
            placeholder="Project Description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="form-control"
            />
            </div>
            <button type="submit" className="btn-custom-submit">Create Project</button>
        </form>
    );
}

export default ProjectForm; 