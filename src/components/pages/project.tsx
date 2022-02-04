import React from 'react';
import { ProgressBar } from '../progress-bar.component';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

// Css
import "./stylesPages.css"

export const Project = (props: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {

    return (
        // Did put hero-container CSS -> if wrong need to create own css class name
        <div>
            <h2>{props.name}</h2>
        </div>
    );
}

