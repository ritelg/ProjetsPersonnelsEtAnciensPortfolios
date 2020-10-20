import React, {Component} from 'react';
import './PortfolioItem.scss';

export class PortfolioItem extends Component {

    render() {
        let portfolioValues = Object.keys(this.props.portfolio)
            .map(key =>

                <article className="portfolio-item">
                    <img src={this.props.portfolio[key].img} alt={this.props.portfolio[key].title} title={this.props.portfolio[key].title} className="portfolio-item-img"/>
                    <div className="portfolio-item-content">
                        <h3 className="portfolio-item-content-title">
                            {this.props.portfolio[key].title}
                        </h3>
                        <div className="portfolio-item-content-links">
                            <a className="btn" href={this.props.portfolio[key].link} alt={this.props.portfolio[key].title}
                               title={this.props.portfolio[key].title}>
                                Lien
                            </a>
                            <a className="btn" href={this.props.portfolio[key].link_github} alt="Github" title="Github">
                                Lien Github
                            </a>
                        </div>
                    </div>
                </article>
            );
        return (
            <div className="portfolio-items">
                {portfolioValues}
            </div>
        );
    }
}