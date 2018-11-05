import React, {Component} from 'react';


class Menu extends Component{
    render(){
        return (
             
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand mb-0 h1" href="#">{this.props.titulo}
                <span className="badge badge-secondary text-white">{this.props.counter}</span>
                </a>
                
            </nav>
        );
    }

}
export default Menu;


