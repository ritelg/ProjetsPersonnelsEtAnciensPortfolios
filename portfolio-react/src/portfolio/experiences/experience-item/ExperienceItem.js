import React, {Component} from 'react';
import './ExperienceItem.scss';



export class ExperienceItem extends Component {

    render() {
        let experiencesValues = Object.keys(this.props.experiences)
            .map(key =>

                <article className="experience-item" >
                    <section className="experience-date">
                        <p className="experience-date-value">
                            {this.props.experiences[key].date}
                        </p>
                    </section>
                    <section className="experience-content">
                        <h3 className="experience-content-title">{this.props.experiences[key].titre}</h3>
                        <p className="experience-content-lieux">{this.props.experiences[key].lieux}</p>
                        <p className="experience-content-description">{this.props.experiences[key].description}</p>
                    </section>
                </article>
            );
        return (
            <div className="experience-items">
                {experiencesValues}
            </div>
        );
    }
}