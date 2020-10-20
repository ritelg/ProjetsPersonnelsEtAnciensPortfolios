/*
        <div className="progress-bar" role="progressbar" aria-valuenow="85"
             aria-valuemin="0"
             aria-valuemax="100" style={{width: props.skill.pourcentage + '%'}} >

            <h5>{props.skill.skill}</h5>
        </div>
*/
import React, { Component } from 'react';
import './SkillItem.scss';

export class SkillItem extends Component {
    draw() {
        let inputs = document.querySelectorAll(".skill-input");
        inputs = [].slice.call(inputs);
        inputs.forEach(input => {
            let pourcentage = input.dataset.pourcentage/100;
            let ctx = input.nextSibling.getContext('2d');
            ctx.beginPath();
            ctx.strokeStyle = "#dadada";
            ctx.arc(100,100,90, 0, 2*Math.PI);
            ctx.lineWidth = "20";
            ctx.shadowBlur = 3;
            ctx.shadowOffsetX = 0;
            ctx.shadowColor = "#dadada";
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = "#2ea8d5";
            ctx.arc(100,100,90, -Math.PI/2, pourcentage*2*Math.PI - Math.PI/2);
            ctx.lineWidth = "20";
            ctx.stroke();
        })

    }
    componentDidMount(){this.draw();}
    componentDidUpdate() {this.draw();}
    render() {

        let portfolioItem = Object
            .keys(this.props.skills)
            .map(key =>
                <div className="skill-item">
                    <input
                        className="skill-input"
                        key={key}
                        value={this.props.skills[key].skill}
                        data-title={this.props.skills[key].skill}
                        data-pourcentage={this.props.skills[key].pourcentage}
                    />
                    <canvas height={"200px"} width={"200px"}/>
                </div>
            );
        return (
            <secion className="skills-values">
                {portfolioItem}
            </secion>
        );
    }
}
