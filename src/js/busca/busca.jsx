import React, { Component } from 'react';

class Busca extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    atualizaBusca(evento) {
        this.props.atualizaBusca(evento);
    }

    onSubmit(evento) {
        this.props.onSubmit(evento);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="input-field col s6">
                    <input name='busca' type="text" placeholder="Digite sua busca" value={this.props.busca} onChange={this.atualizaBusca} />
                    <label htmlFor="busca">Busca</label>
                </div>
            </form>
        );
    }
}

export default Busca;