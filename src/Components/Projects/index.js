import React from 'react'
import { projets } from '../../Datas';

export default function index() {
    const Projets = projets.map(projet => 
        <div className="card">
            <img src={projet.img} alt={projet.alt} />
            <div className="overlay">
                <h4>{projet.title}</h4>
                <p>{projet.description}</p>
                <p>{projet.tag}</p>
                {
                    projet.techs.map(tech => <span>{tech} </span>)
                }
                <div className="btnContainerProject">
                    <a className="btnSource" href={projet.sourceUrl} rel="noopener noreferrer" target="_blank">code source</a>
                    { projet.productionUrl ? <a className="btnProd" href={projet.productionUrl} rel="noopener noreferrer" target="_blank">production</a> : "" }
                </div>
            </div>
        </div>
    ) 
    return (
        <section id="projects">
            <div className="container">
                <h2>Projets</h2>
                <div className="cardProjectContainer">
                    {Projets}
                </div>
            </div>

        </section>
    )
}