import React from 'react';
import { ProgressBar } from '../progress-bar.component';

// Css
import "./stylesPages.css"

// Project
import { Project } from './project';

export default function ListOfProjectsPage() {

    const listOfProjects = [
        { name: "Fridge" },
        { name: "Comics reader" }
    ]

    return (
        // Did put hero-container CSS -> if wrong need to create own css class name
        <section id='projects'>
            <div className="projects-container">
                <h1 className='projects-container-div-pos1'>List of projects</h1>
                <div className='projects-container-div-pos2'>
                    {listOfProjects.map((item, idx) => (
                        <Project key={idx} name={item.name} />
                    ))}
                </div>
            </div>
        </section>
    );
}