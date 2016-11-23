import React from 'react';
import {Link} from 'react-router';
import NavLink from './NavLink';

const Main = React.createClass({

    render(){
        return (
            <div>
                <h1>
                    <Link to="/">Gangstagram</Link>
                </h1>
                <nav className="navbar navbar-default navbar-deep-blue zero-radius left-right-margin-hack" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle zero-radius" data-toggle="collapse" data-target="#collapse">
                            <span className="sr-only">Toggle Navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="collapse">
                        <ul className="nav navbar-nav">
                            <li ><NavLink to="/" onlyActiveOnIndex className="pt-sans"><span className="glyphicon glyphicon-home"
                                                                                             aria-hidden="true"></span>Home</NavLink></li>
                            <li ><NavLink to="/posts" className="pt-sans"><span className="glyphicon glyphicon-comment"
                                                                                aria-hidden="true"></span>Posts</NavLink></li>
                            <li ><NavLink to="/photos" className="pt-sans"><span className="glyphicon glyphicon-camera"
                                                                                 aria-hidden="true"></span>Photos</NavLink></li>
                            <li ><NavLink to="/users" className="pt-sans"><span className="glyphicon glyphicon-user"
                                                                                aria-hidden="true"></span>Users</NavLink></li>
                            <li ><NavLink to="/contact" className="pt-sans"><span className="glyphicon glyphicon-envelope"
                                                                                  aria-hidden="true"></span>Contact</NavLink></li>
                        </ul>
                    </div>
                </nav>

                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main;