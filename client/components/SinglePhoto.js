import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router';

let SinglePhoto = React.createClass({

    componentDidMount(){
        const {id} = this.props.params;
        const { fetchSinglePhoto } = this.props;
        fetchSinglePhoto(id);
    },
    render(){

        const {photos} = this.props;

        return (
            <ReactCSSTransitionGroup
                transitionName="react-anime"
                transitionAppear = {true} transitionAppearTimeout = {5000}
                transitionEnter = {false} transitionLeave = {false}
            >
                <div className="back">
                    <Link to="/photos">Go Back to Photos</Link>
                </div>
                <div className="single-photo">
                    <img src={photos.singlePhoto.url}/>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
});


export default SinglePhoto;

