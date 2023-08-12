import { Component } from 'react';
import React from 'react';
import './cardcss.css'
import { Link } from 'react-router-dom';

export default class Cards extends Component {
    render() {
    return (
     <div data-aos={this.props.aos} data-aos-offset={this.props.aos_offset} class="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div id='cartes' className='card p-0 overflow-hidden h-100 shadow'  >
                <img src={this.props.img} class="card-img-top" />
                <div class="card-body">
                    <p class="card-text">{this.props.desc}</p>
                    <Link to={'/Login'} id='bouton1' className='btn btn-success  '> <i class="fas fa-comment"></i>Commenter</Link>
                    <Link to={'/Plusdev'} id='bouton1' className='btn btn-success  '> <i class="fas fa-plus"></i>Voir Plus</Link>
                </div>
            </div>
     </div>
    );
}
};

