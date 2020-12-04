//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import ProfessionalCard from "./components/ProfessionaCard"

//Containers
const container = document.getElementById('root');

ReactDOM.render(<ProfessionalCard 
    characterName="Tokio" 
    firstName="Úrsula" 
    lastName="Corveró Delgado"
    description="“La Casa de Papel ha sido un viaje maravilloso.
    Es uno de los proyectos que más me han enseñado
    y con los que más he disfrutado.”"
    avatarUrl = "https://i.pinimg.com/originals/ab/02/a8/ab02a827820743f73186a3e6eeddbe7f.jpg"
    articleUrl = "https://la-casa-de-papel.fandom.com/es/wiki/%C3%9Arsula_Corber%C3%B3"
    imgCreditsUrl = "https://www.talenthouse.com/item/2253716/695e99bb"
    imgCredits = "Wawo Murillo"
    />, 
    container);