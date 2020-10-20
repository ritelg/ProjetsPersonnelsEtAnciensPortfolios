import React, {Component} from 'react';
import './App.scss';
import * as marked from 'marked';

const sampleText = '# Titre\n## Sous-Titre \n### Titre plus profond\n \nLes paragraphes sont séparés\npar une ligne vide.\n\nLaissé deux espaces à la fin d\'une ligne pour  \naller à la ligne.\n\nAttributs *italique*, **gras**, \n`monospace`, ~~rayé~~.\n\nListe:\n\n  * pommes\n  * oranges\n  * poires\n\nListe numérotée:\n\n  1. jambon\n  2. cornichon\n  3. pain\n\n *[Anthony Welc](https://www.youtube.com/channel/UChhPkjgG1-iLUOmURGdgQrw)* \n\n Lien automatique : https://www.facebook.com/anthonywelc/ \n\n```\n console.log("hello"); \n``` ';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {content: sampleText};
    }
    setChange(e) {
        this.setState({content: e.target.value});
    }
    renderText() {
        console.log(this.state.content);
        return { __html: marked(this.state.content, {sanitize: true}) };
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('content', nextState.content);
    }
    componentWillMount() {
        if(localStorage.getItem('content') === null || localStorage.getItem('content') === undefined) {
            return;
        }
        this.setState({content: localStorage.getItem('content')});
    }
    render() {
        return (
            <div className="body">
                <header className="header">
                    <h1 className="title">Mon Èditeur de Makdown</h1>
                    <p className="description">
                        Ceci est un project du Freecodecamp
                    </p>
                </header>
                <section className="markdown">
                    <div className="markdown-edit">
                        <textarea
                            onChange={e => this.setChange(e)}
                            name="markdown-edit-content"
                            id="markdown-edit-content"
                            cols="30"
                            rows="10"
                            value={this.state.content}
                        />
                    </div>
                    <div className="markdown-result" dangerouslySetInnerHTML={this.renderText()}/>

                </section>
            </div>
        );
    }
}

export default App;
