import React from 'react'
import datas from '../../Datas';


export default function index() {
    const formations = datas.formations.map(formation => 
        <div className="card">
            <img src={formation.logo} alt={formation.altImg}></img>
            <h4 className="title">{formation.title}</h4>
            <p className="poste">{formation.level}</p>
            <p>{formation.techs}</p>
        </div>
    );

    const experiences  = datas.experiences.map(experience => 
        <div className="card">
            <img src={experience.logo} alt={experience.altImg}></img>
            <h4 className="title">{experience.title}</h4>
            <p className="jobTitle">{experience.jobTitle}</p>
            <p>{experience.year}</p>
        </div>
    );

    return (
        <section id="about">
            <h2>A Propos</h2>
            <div className="container">
                <div className="part one">
                    <h3>Qui suis-je</h3> 
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium nobis a nostrum aspernatur, rem, tenetur recusandae quo inventore adipisci voluptas cupiditate porro. Aspernatur, repellendus hic? Ex culpa blanditiis alias, repudiandae maxime saepe! Aliquid nulla, quod asperiores possimus exercitationem laboriosam laudantium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum eos maiores fugit animi sequi ratione voluptatum, quaerat minima nesciunt mollitia fugiat voluptates voluptate maxime, accusantium perspiciatis excepturi, sed aperiam hic nobis. Vitae quidem quibusdam aut molestias quam expedita esse.
                    </p>
                </div>
                <div className="part two">
                    <h3>Formation & Expériences</h3> 
                    <div className="cardContainer formations">
                        {formations}
                    </div>
                    <div className="cardContainer experiences">
                        {experiences}
                    </div>
                </div>
                <div className="part three">
                    <h3>Stack Technique</h3> 
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium nobis a nostrum aspernatur, rem, tenetur recusandae quo inventore adipisci voluptas cupiditate porro. Aspernatur, repellendus hic? Ex culpa blanditiis alias, repudiandae maxime saepe! Aliquid nulla, quod asperiores possimus exercitationem laboriosam laudantium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum eos maiores fugit animi sequi ratione voluptatum, quaerat minima nesciunt mollitia fugiat voluptates voluptate maxime, accusantium perspiciatis excepturi, sed aperiam hic nobis. Vitae quidem quibusdam aut molestias quam expedita esse.
                    </p>
                </div>
                </div>
        </section>
    )
}
