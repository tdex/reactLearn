import React, { Component } from 'react';
import Cartao from './cartao';
import Busca from '../busca/busca';
import axios from 'axios';

class ListaCartao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busca: '',
            dados: [],
            servidor: []
        };
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    atualizaBusca(evento) {
        this.setState({ busca: evento.target.value });
        if (!event.target.value) {
            this.setState({ dados: this.state.servidor });
        }
    }

    onSubmit(evento) {
        let busca = this.state.busca;
        let dados = this.state.servidor;

        let novaLista = dados.filter((item) => {
            if (item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1
                || item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1
                || item.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > -1) {
                return item;
            }
        });

        this.setState({ dados: novaLista });
        evento.preventDefault();
    }

    componentDidMount() {
        let self = this;
        /**
         * Requisição http com o axios
         * o React sozinho não consegue fazer as requisições
         */
        axios.get('http://localhost:8080/dados').then(res => {
            self.setState({
                dados: res.data,
                servidor: res.data
            });
        });
    }

    render() {
        let noticias = this.state.dados;

        let lista = noticias.map(item => {
            let colSize = `col m${this.props.col}`;
            return (
                <div className={colSize} key={item.titulo}>
                    <Cartao info={item} />
                </div>
            );
        })

        return (
            <div>
                <div className="row">
                    <Busca atualizaBusca={this.atualizaBusca} busca={this.state.busca} onSubmit={this.onSubmit} />
                </div>
                <div className="row">
                    {lista}
                </div>
            </div>
        );
    }
}

export default ListaCartao;