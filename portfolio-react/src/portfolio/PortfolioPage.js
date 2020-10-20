import React, { Component } from 'react';
import './PortfolioPage.scss';


/** COMPONENTS **/
import {Header} from './header/Header';

import {Experiences} from './experiences/Experiences';
import {Skills} from './skills/Skills';
import {Portfolio} from './portfolio/Portfolio';
import {About} from "./about/About";

export class PortfolioPage extends Component {

    componentDidMount(){
        document.title = "Portfolio - Gaetan Ritel"
    }
    render() {
        return (
            <div>
                <Header/>
                <About/>
                <Skills/>
                <Experiences/>
                <Portfolio/>
            </div>
        );
    }
}
