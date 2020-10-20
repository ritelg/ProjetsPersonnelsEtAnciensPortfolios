import React, {Component} from 'react';
import './Header.scss';
import {Link} from 'react-scroll';
import {Container} from "reactstrap"




export class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {menuVisible: false};
    }

    /**
     * @param {MouseEvent} e
     */
    onClickOutMenu(e) {
        let btn = document.querySelector('.btn');
        if(e.target !== btn || this.state.menuVisible === true) {
            e.preventDefault();
        }
        let menu = document.querySelector(".topbar-navigation");
        if(e.target !== menu && this.state.menuVisible === true) {
            menu.style.right = "-230px";
            menu.style.display = "none";
            this.setState({menuVisible: false});
        }
    }


    /**
     * @param {MouseEvent} e
     */
    onClickMenu(e) {
        e.preventDefault();
        let menu = document.querySelector(".topbar-navigation");
        if(this.state.menuVisible === false) {
            menu.style.right = "-30px";
            menu.style.display = "flex";
            this.setState({menuVisible: true});
        }
    }
    render() {

        return (
            <header className={"header"} onClick={e => this.onClickOutMenu(e)}>
                <Container className={"container"}>
                    <section className="header-topbar">
                        <a className="topbar-logo" href="https://ritelg.github.io/portfolio/" alt="Gaetan Ritel" title="Gaetan Ritel">
                            <span>Gaetan</span> Ritel
                        </a>
                        <a href="" className="topbar-link-menu" onClick={e => this.onClickMenu(e)}/>
                        <nav className="topbar-navigation">
                            <Link className="topbar-navigation-item" activeClass="active" to="about" spy={true} smooth={true} duration={1000}>Moi</Link>
                            <Link className="topbar-navigation-item" activeClass="active" to="skills" offset={-50} spy={true} smooth={true} duration={1000}>Compétences</Link>
                            <Link className="topbar-navigation-item" activeClass="active" to="experiences" offset={-50} spy={true} smooth={true} duration={1000}>Éxpériences</Link>
                            <Link className="topbar-navigation-item" activeClass="active" to="portfolio" offset={-50} spy={true} smooth={true} duration={1000}>Réalisations</Link>
                        </nav>
                    </section>

                    <section className="header-center">
                        <h1>Développeur Web</h1>
                        <a  rel="nofollow" target="_blank" href="https://ritelg.github.io/portfolio/CvGaetanRitel.pdf" className="btn" >Télecharger Cv</a>
                    </section>
                </Container>
            </header>
        );
    }
}
