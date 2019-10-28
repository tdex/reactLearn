import React, { Component } from 'react';

class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuAtivo: 'Home'
        };
        this.alteraActive = this.alteraActive.bind(this);
    }

    alteraActive(titulo, self) {
        self.setState({ menuAtivo: titulo });
    }

    render() {
        let self = this;

        let lista = this.props.menu.map((item, index) => {
            return (
                <li key={index} onClick={self.alteraActive.bind(null, item.titulo, self)} className={self.state.menuAtivo === item.titulo ? 'active' : ''} >
                    <a href={item.link}>{item.titulo}</a>
                </li>
            )
        });

        return (
            <ul id="nav-mobile" className="right">
                {lista}
            </ul>
        );
    }
}

export default NavMenu;