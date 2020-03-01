// Formation
import Epitech from '../Assets/images/formations/epitech_logo.png';
import Academy from '../Assets/images/formations/logo_academy.png';
import IPSSI from '../Assets/images/formations/ipssi_logo.png';

// experiences
import ePressPack from "../Assets/images/experiences/epresspack_logo.png";
import adnRealty from '../Assets/images/experiences/adn_realty_logo.png';
import digitalCube from '../Assets/images/experiences/digitalcube_logo.png';

// techs
// front
import html5 from '../Assets/images/techs/html-5.svg';
import css from '../Assets/images/techs/css3.svg';
import js from '../Assets/images/techs/javascript.svg';
import jQuery from '../Assets/images/techs/jquery.svg';
import ReactJS from '../Assets/images/techs/reactjs.svg';
import ReactNative from '../Assets/images/techs/react-native.svg';
// back
import NodeJS from '../Assets/images/techs/nodejs.svg';
import express from '../Assets/images/techs/express.svg';
import php from '../Assets/images/techs/php.svg';
import mongodb from '../Assets/images/techs/mongodb.svg';
import mysql from '../Assets/images/techs/mysql.svg';
import firebase from '../Assets/images/techs/firebase.svg';
// tools
import figma from "../Assets/images/techs/figma.svg";
import github from '../Assets/images/techs/github.svg';
import heroku from "../Assets/images/techs/heroku.svg";
import npm from '../Assets/images/techs/npm.svg';
import visualStudio from '../Assets/images/techs/visual-studio.svg';
import webpack from "../Assets/images/techs/webpack.svg";
import android from '../Assets/images/techs/android.svg';
import xcode from '../Assets/images/techs/xcode.svg';

// PROJECTS
import github_projet from '../Assets/images/projets/github.jpg';
import contactmanager from '../Assets/images/projets/contactmanager.png';
import creasoul from '../Assets/images/projets/creasoul.png';
import cupoftea from '../Assets/images/projets/cupoftea.png';
import johndoe from '../Assets/images/projets/johndoe.png';
import krakenchat from '../Assets/images/projets/krakenchat.png';
import krakenmovie from '../Assets/images/projets/krakenmovie.png';
import krakensinstudio from '../Assets/images/projets/krakensinstudio.png';
import redwolf from '../Assets/images/projets/redwolf.png';

// RS
import codepen from '../Assets/images/rs/codepen.svg';
import githubRS from "../Assets/images/rs/github.svg";
import linkedin from "../Assets/images/rs/linkedin.svg";
import twitter from "../Assets/images/rs/twitter.svg";

export const aboutDatas = {
    formations : [
        {logo : Epitech, altImg : "logo Epitech", title : "Epitech", level : "Bac +1", techs: "C / JS"},
        {logo : Academy, altImg : "logo 3W Academy", title : "3W Academy", level : "Bac +2", techs: "HTML / CSS / JS / PHP/MySQL"},
        {logo : IPSSI, altImg : "logo IPSSI", title : "IPSSI", level : "Bac +4", techs: "MERN Stack & PHP Symfony"},
    ],
    experiences : [
        {logo : ePressPack, altImg : "logo ePressPack", title : "ePressPack", jobTitle: "Developpeur Front-End", year : "2018 - 2019"},
        {logo : adnRealty, altImg : "logo ADN Realty", title : "ADN Realty", jobTitle: "Developpeur Fullstack PHP", year : "Janvier 2019 - Aout 2019"},
        {logo : digitalCube, altImg : "logo DigitalCube", title : "DigitalCube", jobTitle: "Developpeur ReactJS/Native", year : "Septembre 2019 - Mars 2020"}
    ],
    techsFronts : [
        {logo : html5, altImg : 'html5', title : "HTML 5"},
        {logo : css, altImg : 'css3', title : "CSS 3"},
        {logo : js, altImg : 'JS', title : "Javascript"},
        {logo : jQuery, altImg : 'jQuery', title : "jQuery"},
        {logo : ReactJS, altImg : 'reactjs', title : "React JS"},
        {logo : ReactNative, altImg : 'React Native', title : "React Native"},
    ],
    techsBacks : [
        {logo : php, altImg : 'php', title : "PHP"},
        {logo : NodeJS, altImg : 'Nodejs', title : "NodeJS"},
        {logo : express, altImg : 'ExpressJS', title : "ExpressJS"},
        {logo : mongodb, altImg : 'mongodb', title : "MongoDB"},
        {logo : mysql, altImg : 'mysql', title : "MySQL"},
        {logo : firebase, altImg : 'firebase', title : "Firebase"},
    ],
    tools : [
        {logo : figma, altImg : 'Figma', title : "Figma"},
        {logo : github, altImg : 'Github', title : "Github"},
        {logo : heroku, altImg : 'Heroku', title : "Heroku"},
        {logo : npm, altImg : 'NPM', title : "NPM"},
        {logo : webpack, altImg : 'webpack', title : "Webpack"},
        {logo : visualStudio, altImg : "visual studio", title : "Visual Studio Code"},
        {logo : android, altImg : "Android Studio", title : "Android Studio"},
        {logo : xcode, altImg : "Xcode", title : "Xcode"},
    ],
}

export const reseauxDatas = [
    {logo:  codepen, url: "https://codepen.io/sufranjnaweed", title: "codepen", pseudo: "@sufranjnaweed"},
    {logo:  githubRS, url: "https://github.com/SufranjNaweed", title: "Github", pseudo: "SufranjNaweed"},
    {logo:  linkedin, url: "https://www.linkedin.com/in/naweed-sufranj-483629121/", title: "Linkedin", pseudo: "Sufranj Naweed"},
    {logo:  twitter, url: "https://twitter.com/krakensin", title: "Twitter", pseudo: "@KrakenSin"},
];

export const projets = [
    {
        img: krakenmovie, alt: "Kraken Movie", 
        sourceUrl: "https://github.com/SufranjNaweed/KrakenMovie-JS", productionUrl : "https://krakenmovie.herokuapp.com", 
        title:"Kraken Movie", description: "", 
        tag : "BackEnd NodeJS ",techs : ["Nodejs", "ExpressJS", "Handlebar"]
    },
    {
        img: krakenchat, alt: "Kraken Chat IO", 
        sourceUrl: "https://github.com/SufranjNaweed/Kraken_Chat_NodeJS", productionUrl : "", 
        title:"Kraken Chat", description: "Un chat en NodeJS", 
        tag : "Backend NodeJS" ,techs : ["NodeJS", "ExpressJS", "SocketIO"]
    },
    {
        img: github_projet, alt: "Giphy API Fetcher", 
        sourceUrl: "https://github.com/SufranjNaweed/giphy-api", productionUrl : "", 
        title:"Giphy API Fetcher", description: "", 
        tag : "BackEnd NodeJS" ,techs : ["NodeJS", "ExpressJS"]
    },
    {
        img: github_projet, alt: "NodeJS API Boilerplate", 
        sourceUrl: "https://github.com/SufranjNaweed/nodejs-api-boilerplate", productionUrl : "", 
        title:"NodeJS API Boilerplate", description: "Template d'API ExpressJS & Mongodb", 
        tag : "BackEnd NodeJS" ,techs : ["NodeJS", "ExpressJS", "MongoDB"]
    },
    {
        img: github_projet, alt: "Rollfate API", 
        sourceUrl: "https://github.com/SufranjNaweed/rollfate-api", productionUrl : "", 
        title:"Rollfate API", description: "API Rollfate, Projet de fin de Master 1, API Gestion de personnage de jeu de role papier", 
        tag : "BackEnd NodeJS" ,techs : ["NodeJS", "ExpressJS", "MongoDB"]
    },
    {
        img: contactmanager, alt: "contact manager", 
        sourceUrl: "https://github.com/SufranjNaweed/pwa-contact-manager", productionUrl : "https://sufranjnaweed.github.io/pwa-contact-manager/", 
        title:"Contact Manager PWA", description: "", 
        tag : "FrontEnd ReactJS" ,techs : ["ReactJS", "PWA"]
    },
    {
        img: krakensinstudio, alt: "Krakensin Studio", 
        sourceUrl: "https://github.com/SufranjNaweed/kraken-sin-studio", productionUrl : "https://sufranjnaweed.github.io/kraken-sin-studio/", 
        title:"Krakensin Studio", description: "", 
        tag : "FrontEnd Integration" ,techs : ["HTML5", "CSS3", "JS", "VueJS"]
    },
    {
        img: github_projet, alt: "Kraken Movie Mobile", 
        sourceUrl: "https://github.com/SufranjNaweed/kraken-movie-react-native", productionUrl : "", 
        title:"Kraken Movie Mobile", description: "", 
        tag : "Mobile Android - IOS" ,techs : ["React Native", "Expo"]
    },

    {
        img: github_projet, alt: "Claps", 
        sourceUrl: "https://github.com/SufranjNaweed/ClapsRNA", productionUrl : "", 
        title:"Claps", description: "", 
        tag : "Mobile Android - IOS" ,techs : ["React Native", "Android", "IOS"]
    },
    {
        img: redwolf, alt: "redwolf", 
        sourceUrl: "https://github.com/SufranjNaweed/redwolf", productionUrl : "https://sufranjnaweed.github.io/redwolf/", 
        title:"Redwolf", description: "exercice étudiant d'intéragration d'une maquette vers une template", 
        tag : "FrontEnd Integration", techs : ["HTML5", "CSS3"]
    },
    {
        img: johndoe, alt: "johnDoePortfolio", 
        sourceUrl: "https://github.com/SufranjNaweed/john-doe-portfolio", productionUrl : "https://sufranjnaweed.github.io/john-doe-portfolio/", 
        title:"john doe portfolio", description: "exercice étudiant d'intéragration d'une maquette vers une template", 
        tag : "FrontEnd Integration",techs : ["HTML5", "CSS3"]
    },
    {
        img: cupoftea, alt: "cup of tea", 
        sourceUrl: "https://github.com/SufranjNaweed/cupoftea", productionUrl : "https://sufranjnaweed.github.io/cupoftea/", 
        title:"Cup of tea", description: "exercice étudiant d'intéragration d'une maquette vers une template", 
        tag : "FrontEnd Integration",techs : ["HTML5", "CSS3"]
    },
    {
        img: creasoul, alt: "creasoul", 
        sourceUrl: "https://github.com/SufranjNaweed/creasoul-integration", productionUrl : "https://sufranjnaweed.github.io/creasoul-integration/", 
        title:"Creasoul", description: "exercice étudiant d'intéragration d'une maquette vers une template", 
        tag : "FrontEnd Integration",techs : ["HTML5", "CSS3"]
    },
];
