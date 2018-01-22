class Agenda extends React.Component {
  render() {
    const contatos = this._getContatos();

    if (contatos.length == 0) {
      return (<p><i className="fas fa-exclamation-circle"></i> Nenhum contato disponível</p>);
    } else {
      return (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <input type="text" className="form-control" placeholder="Pesquisar" aria-label="Pesquisar contato" aria-describedby="basic-addon1" />
          </div>
          <ul className="list-group">
            {contatos}
          </ul>
        </div>
      );
    }
  }

  _getContatos() {
    const lista = [
      {
        "id": "1",
        "number": ['997832836', '34934632'],
        "nome": "Tarcísio Deschamps",
        "email": "tardchamps94@gmail.com",
        "endereco": "Rua canela"
      },
      {
        "id": "2",
        "number": ['997832836', '34934632'],
        "nome": "Mayra Oliveira",
        "email": "mayra@gmail.com",
        "endereco": "Rua Arthur Barreto Lins"
      },
      {
        "id": "3",
        "number": ['9978322222'],
        "nome": "Livya K. Menezes",
        "email": "livya@accenture.com",
        "endereco": "Av. Norte"
      }
    ];

    return lista.map((item) => {
      return <Contatos contato={item} key={item.id} />
    });
  }
}

class Contatos extends React.Component {
  constructor() {
    super();

    this.state = {
      showDetalheContato : false
    };
  }
  render() {
    let detalheContato;
    if (this.state.showDetalheContato) {
      detalheContato =
        <div>
          <p className="m-0"><strong>Email: </strong> {this.props.contato.email}</p>
          <p className="m-0"><strong>Endereço: </strong> {this.props.contato.endereco}</p>
        </div>;
    }
    return (
      <li className="list-group-item list-group-item-action" onClick={this._exibeDetalheContato.bind(this)}>
        <div className="w-100 d-flex justify-content-between align-items-center">
          {this.props.contato.nome}  <strong className="badge badge-primary badge-pill">{this.props.contato.number.length}</strong>
        </div>
        {detalheContato}
      </li>
    );
  }

  _exibeDetalheContato(){
    this.setState({showDetalheContato: !this.state.showDetalheContato});
  }
}

ReactDOM.render(<Agenda />, document.getElementById('root'));
