import React, { Component } from 'react';

class Titulo extends Component {
    constructor(props) {
        super(props);
        this.state = { hora: new Date() }
    }

    componentDidMount() {
        this.horaID = setInterval(() => {
            this.atualizarSegundos(), 1000;
        });
    }

    atualizarSegundos() {
        this.setState({ hora: new Date() });
    }

    componentWillUnmount() {
        clearInterval(this.horaID);
    }

    render() {
        return (
            <h1>Curso de React com Gulp {this.state.hora.toLocaleTimeString()} </h1>
        );
    }
}

export default Titulo;