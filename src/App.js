import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import LatestStory from './component/LatestStory'
import Search from './component/Search'
import Home from './component/Home'

class Nav extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header>
                        <ul className='nav justify-content-center'>
                            <li className='nav-item mr-2'><Link to="/" className='nav-link'>Home</Link></li>
                            <li className='nav-item mr-2'><Link to="/search" className='nav-link'>Search</Link></li>
                            <li className='nav-item'><Link to="/latest-story" className='nav-link'>Latest Story</Link>
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