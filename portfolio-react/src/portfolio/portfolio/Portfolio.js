import React, { Component } from 'react';
import './Portfolio.scss';
import {PortfolioItem} from "./portfolio-item/PortfolioItem";
import {portfolio} from "../../data/data";
import {Container} from "reactstrap";

export class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = { portfolio, portfolioItems: portfolio };
    }

    render() {
        return (
            <section className="portfolio section" id="portfolio">
                <Container className={"container"}>
                    <section className="portfolio-content">
                        <h2 className="section-title title-center">Mes Réalisations</h2>
                        <PortfolioItem portfolio={this.state.portfolio}/>
                    </section>
                </Container>
            </section>
        );
    }
}
