import React, { useEffect, useRef } from 'react';
import { ProgressBar } from '../progress-bar.component';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

// Css
import "./stylesPages.css"

// Project
import { Project } from './project';
import gsap from 'gsap';

export default function ListOfProjectsPage() {

    const boxRef = useRef(gsap) as unknown as React.MutableRefObject<HTMLInputElement>

    const listOfProjects = [
        { name: "Fridge" },
        { name: "Comics reader" }
    ]

    useEffect(() => {
        gsap.to(boxRef.current, { x: 100 })
    })

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
                <div
                    className='Box'
                    style={{ color: "white" }}
                >
                    <p ref={boxRef}>HEEEEEEEEEEEEEY</p>
                </div>
            </div>
        </section>
    );
}