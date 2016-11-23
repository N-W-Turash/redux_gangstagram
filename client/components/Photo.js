import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Photo = React.createClass({

    render(){const {photo} = this.props;

        return (
            <ReactCSSTransitionGroup
                transitionName="react-anime"
                transitionAppear = {true} transitionAppearTimeout = {5000}
                transitionEnter = {false} transitionLeave = {false}
            >
                <div className="col-lg-3 col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <Link to={"/photos/" + photo.id} ><img src={photo.thumbnailUrl} alt="..." /></Link>
                        <div className="">
                            <h4>{photo.title.substr(0,20)+"..."}</h4>
                        </div>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
});

export default Photo;