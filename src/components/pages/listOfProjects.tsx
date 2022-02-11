import React, { useEffect, useRef, useState } from 'react';
import { ProgressBar } from '../progress-bar.component';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

import testPhoto from '../../images/img-1.jpg'

// Css
import "./stylesPages.css"

// Project
import { Project }  from './project';
import gsap from 'gsap';

export default function ListOfProjectsPage() {

    // const [nameOfProject, setProject] = useState("Fridge")
    // let content = "";

    // if (nameOfProject == "Fridge") {
    //     content = "Aloha ella"
    // }
    // if (nameOfProject == "Comics reader") {
    //     content = "Commico"
    // }

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
                <div className='prjects-items'>
                    <div className='projects-container-div-pos2'>
                        {listOfProjects.map((item, idx) => (
                            <Project key={idx} name={item.name} />
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
                                <Card.Title>Ale</Card.Title>
                                <Card.Text>
                                    Radost
                                </Card.Text>
                                <Button>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>
        </section>
    );
}