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

    const fronts = datas.techsFronts.map(front => 
        <div className="card-tech">
            <img src={front.logo} alt={front.altImg}></img>
            <p>{front.title}</p>
        </div>
    );
    
    const backs = datas.techsBacks.map(back => 
        <div className="card-tech">
            <img src={back.logo} alt={back.altImg}></img>
            <p>{back.title}</p>
        </div>
    );

    const tools = datas.tools.map(tool => 
        <div className="card-tech">
            <img src={tool.logo} alt={tool.altImg}></img>
            <p>{tool.title}</p>
        </div>
    );
    return (
        <section id="about">
            <h2>A Propos</h2>
            <div className="container">
                <div className="part one">
                    <h3>Qui suis-je</h3> 
                    <p>
                        Je suis Naweed SUFRANJ 26 ans Développeur FullStack 
                        Javascript MERN Bac+4 avec 2 ans d’expérience en agence web.
                    </p>
                    <p>Game Developpeur amateur</p>
                    <p>Membre du staff de la communauté Open Source Godot Francophone</p>
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
                    <h4>- Front End -</h4>
                    <div className="cardContainer fronts">
                        {fronts}
                    </div>
                    <h4>- Back End -</h4>
                    <div className="cardContainer backs">
                        {backs}
                    </div>
                    <h4>- Outils -</h4>
                    <div className="cardContainer tools">
                        {tools}
                    </div>
                </div>
                </div>
        </section>
    )
}
