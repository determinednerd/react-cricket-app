import React, {Component} from 'react';
import './header.css'

class Header extends Component{
    render(){
        return (
            <div className='header'>
                <ul>
                    <li><a href='#'>Home</a> </li>
                    <li><a href='#'>Scorecard</a></li>
                    <li><a href='#'>Statistics</a></li>
                    <li><a href='#'>Fixtures</a></li>
                </ul>
            </div>
        )
    }
}

export default Header;