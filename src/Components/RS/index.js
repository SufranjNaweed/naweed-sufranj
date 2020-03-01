import React from 'react';
import {reseauxDatas} from '../../Datas';

export default function index() {
    const RS = reseauxDatas.map(reseau =>
        <a href={reseau.url} rel="noopener noreferrer" target="_blank">
            <img src={reseau.logo} alt={reseau.title} />
            <span>{reseau.pseudo}</span>
        </a>
    )
    return (
        <div id="rs">
            {RS}
        </div>
    )
}
