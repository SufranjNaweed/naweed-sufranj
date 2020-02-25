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
import xcode from '../Assets/images/techs/xcode.svg'

import codepen from '../Assets/images/rs/codepen.svg';
import githubRS from "../Assets/images/rs/github.svg";
import gmail from "../Assets/images/rs/gmail.svg";
import linkedin from "../Assets/images/rs/linkedin.svg";
import twitter from "../Assets/images/rs/twitter.svg";

const aboutDatas = {
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
    ]
}

const reseauxDatas = [
    {logo:  codepen, url: "https://codepen.io/sufranjnaweed", title: "codepen"},
    {logo:  githubRS, url: "https://github.com/SufranjNaweed", title: "Github"},
    {logo:  gmail, url: "sufranj.naweed@gmail.com", title: "Gmail"},
    {logo:  linkedin, url: "https://www.linkedin.com/in/naweed-sufranj-483629121/", title: "Linkedin"},
    {logo:  twitter, url: "https://twitter.com/krakensin", title: "Twitter"},
];

const projets = [
    {img: "", url: "", title:"", description: "", techs : ["", ""]}, 
];

export default aboutDatas;