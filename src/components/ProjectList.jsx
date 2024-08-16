import React, { useState } from 'react';

const ProjectList = ({ projects, onSelectProject }) => {
    return (
        <ul>
            {projects.map((project, index) => (
                <li key={index} onClick={() => onSelectProject(project)}>
                    {projects.name}
                    <ul>
                        {project.task.map((task, i) =>(
                            <li key={i}>{task.name}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default ProjectList;