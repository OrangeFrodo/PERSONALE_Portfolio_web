import React from 'react';
import { ProgressBar } from '../progress-bar.component';

// Css
import "./stylesPages.css"

export default function Skills() {

    // Map througout every item in list
    const testData = [
        { name: "Java", bgcolor: "#6553FF", completed: 72 },   // Java
        { name: "C", bgcolor: "#6553FF", completed: 56 },      // C
        { name: "React", bgcolor: "#6553FF", completed: 53 },  // React
        { name: "React Native", bgcolor: "#6553FF", completed: 86 },   // React Native
        { name: "Kotlin", bgcolor: "#6553FF", completed: 42 },      // Kotlin
        { name: "Flutter", bgcolor: "#6553FF", completed: 36 },     // Flutter
        { name: "Dart", bgcolor: "#6553FF", completed: 33 },        // Dart
    ];

    return (
        // Did put hero-container CSS -> if wrong need to create own css class name
        <section id='skills'>
            <div className="skills-container">
                <h1 className='skills-container-h1-pos1'>Skills</h1>
                <div style={{ marginTop: 30 }}>
                    {testData.map((item, idx) => (
                        <><ProgressBar name={item.name} key={idx} bgcolor={item.bgcolor} completed={item.completed} /> </>
                    ))}
                </div>
            </div>
        </section>
    );
}

