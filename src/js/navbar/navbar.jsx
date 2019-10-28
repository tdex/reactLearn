import React from 'react';
import NavMenu from './nav-menu';

class Navbar extends React.Component {
    render() {
        let menu = [
            { titulo: 'Home', link: '#home' },
            { titulo: 'Sobre', link: '#sobre' },
            { titulo: 'Contato', link: '#contato' }
        ];

        return (
            <nav className={this.props.cor}>
                <div className="nav-wrapper container ">
                    {/* pegando parametros passados na chamada do componente */}
                    <a href="#" className="brand-logo">{this.props.titulo}</a>
                    <NavMenu menu={menu} />
                </div>
            </nav>
        );
    }
}

export default Navbar;