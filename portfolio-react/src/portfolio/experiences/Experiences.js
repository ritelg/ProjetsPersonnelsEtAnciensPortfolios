import React, {Component} from 'react';
import './Experiences.scss';
import {ExperienceItem} from "./experience-item/ExperienceItem";
import {experiences} from '../../data/data';
import {Container} from "reactstrap";

export class Experiences extends Component {

    constructor(props) {
        super(props);
        this.state = { experiences , experiencesValues: experiences};
    }


    render() {
        return (
            <section className="experiences section" id="experiences">
                <Container className={"container"}>
                    <section className="experiences-content">
                        <h2 className="section-title title-center">Mes Expériences</h2>
                    </section>
                </Container>
                <ExperienceItem experiences={this.state.experiencesValues}/>
            </section>
        );
    }
}
