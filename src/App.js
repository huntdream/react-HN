import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import LatestStory from './component/LatestStory'
import Search from './component/Search'
import Home from './component/Home'

class Nav extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <header>
                        <ul className='nav justify-content-center nav-tabs'>
                            <li className='nav-item mr-2'><NavLink exact to="/" className='nav-link' activeClassName='active'>Home</NavLink></li>
                            <li className='nav-item mr-2'><NavLink to="/search" className='nav-link' activeClassName='active'>Search</NavLink></li>
                            <li className='nav-item'><NavLink to="/latest-story" className='nav-link' activeClassName='active'>Latest Story</NavLink>
                            </li>
                        </ul>
                    </header>
                    <div className="container px-md-1 py-1">
                        <Route path='/' component={Home} />
                        <Route path='/search' component={Search}/>
                        <Route path='/latest-story' component={LatestStory}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Nav