import React, { Component } from 'react';
import './Skills.scss';
import {SkillItem} from "./skill-item/SkillItem";
import {skills} from '../../data/data';
import {Container} from 'reactstrap'

export class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = { skills, skillsItem: skills["front"] };
    }
    /**
     * @param {MouseEvent} e
     */
    onClickBtn(e) {
        e.preventDefault();       this.setState({skillsItem: skills[e.target.id]});
    }
    render() {

        return (
            <section className="skills section" id="skills">
                <Container className={"container"}>
                    <section className="skills-content">
                        <h2 className="section-title title-center">Mes Compétences</h2>
                        <section className="skills-button">
                            <a href="#" className="btn" id="front" title="Front" onClick={e => this.onClickBtn(e)}>Front</a>
                            <a href="#" className="btn" id="back" title="Back" onClick={e => this.onClickBtn(e)}>Back</a>
                            <a href="#" className="btn" id="other" title="Autres" onClick={e => this.onClickBtn(e)}>Autres</a>
                        </section>
                        <SkillItem skills={this.state.skillsItem}/>
                    </section>
                </Container>
            </section>

        );
    }
}
