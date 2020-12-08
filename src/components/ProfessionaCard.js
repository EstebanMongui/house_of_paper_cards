//React
import React from "react";
//Icons
import diamond from "../icons/Diamond.svg";
import like from "../icons/like.svg";
import menuIcon from "../icons/Menu.svg";
import smallDiamond from "../icons/SmallDiamond.svg";
import logo from "../icons/logo.svg"
//Styles
import "../components/styles/ProfessionalCard.css"

class ProfessionalCard extends React.Component{
    render(){
        const {
            characterName,
            firstName,
            lastName,
            description,
            avatarUrl,
            articleUrl,
            imgCredits,
            imgCreditsUrl,
        } = this.props
        return(
            <section className="window">
                <div className="ProfessionalCard">
                    <header>
                        <div className="logo"> <img src={logo} alt="logo"/></div>
                        <button className="menu-icon"> <img src={menuIcon} alt="munú"/> </button>
                    </header>
                    <div className="mini-diamond"><img src={smallDiamond} alt="small diamond"/></div>
                    <section className="information">
                        <div className="texts">
                            <h3>{characterName}</h3>
                            <h1> <strong>{firstName} <br/>{lastName} </strong> </h1>
                            <h5> {description} </h5>
                            <a href={articleUrl} target="_blank">
                                <button className="see-more" src>
                                    Ver más
                                </button>
                            </a>
                        </div>
                        <figure className="avatar">
                            <img src={avatarUrl} alt="Fotografía"/>
                            <a href={imgCreditsUrl} target="_blank">{imgCredits}</a>
                        </figure>
                    </section>
                    <div className="icons">
                        <figure className="diamond">
                            <img src={diamond} alt="diamond"/>
                        </figure>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProfessionalCard;