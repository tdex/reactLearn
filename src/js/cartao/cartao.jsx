import React, { Component } from 'react';

class Cartao extends Component {
    render() {
        return (
            <div className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={this.props.info.imagem} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.info.titulo}<i className="material-icons right">more_vert</i></span>
                    <p>{this.props.info.descricao}</p>
                </div>
                <div className="card-action">
                    <a href={this.props.info.link}>Ver mais...</a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.info.titulo}<i className="material-icons right">close</i></span>
                    <p>{this.props.info.detalhe}</p>
                </div>
            </div>
        );
    }
}

export default Cartao;