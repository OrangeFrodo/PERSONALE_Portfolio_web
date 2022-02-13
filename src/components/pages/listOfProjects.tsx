import React, { useEffect, useRef, useState } from 'react';
import { ProgressBar } from '../progress-bar.component';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

import testPhoto from '../../images/img-1.jpg'

// Css
import "./stylesPages.css"
import jsonData from '../content.json'

import gsap from 'gsap';

export default function ListOfProjectsPage() {

    // Set state for fridge
    const [nameOfProject, setProject] = useState(0)
    const [contentOfProject, setContentOfProject] = useState(jsonData.Fridge)

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
                <h1 className='projects-list-projects'>List of projects</h1>
                <div className='projects-items'>
                    <div className='projects-container-div-pos2'>
                        {listOfProjects.map((item, idx) => (
                            // On click function, was not able to move it to separate function
                            <div className='project-set'>
                                <a onClick={() => {
                                    // Set fridge
                                    if (idx == 0) {
                                        setContentOfProject(jsonData.Fridge)
                                    }
                                    // Set comic
                                    if (idx == 1) {
                                        setContentOfProject(jsonData.Comics)
                                    }
                                }
                                }><h1>{item.name}</h1></a>
                            </div>
                        ))}
                    </div>
                    <div
                        className='projects-card'
                        style={{ color: "white" }}
                    >
                        <Card style={{
                            width: '30rem',
                            height: '50rem',
                            backgroundColor: "white",
                            textAlign: "center",
                            borderRadius: 50
                        }} ref={boxRef}>
                            <Card.Img variant="top" src={testPhoto} style={{
                                width: 300
                            }} />
                            <Card.Body style={{
                                color: "black"
                            }}>
                                <Card.Title>
                                    {contentOfProject.header}
                                </Card.Title>
                                <Card.Text>
                                    {contentOfProject.content}
                                </Card.Text>
                                <Button>
                                    {contentOfProject.button}
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>
        </section>
    );
}