import Epitech from '../Assets/images/epitech_logo.png';
import Academy from '../Assets/images/logo_academy.png';
import IPSSI from '../Assets/images/ipssi_logo.png';

import ePressPack from "../Assets/images/epresspack_logo.png";
import adnRealty from '../Assets/images/adn_realty_logo.png';
import digitalCube from '../Assets/images/digitalcube_logo.png';

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
    ]
}

export default aboutDatas;