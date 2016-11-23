import React from 'react';
import Photo from './Photo';
import Loader from './Loader';

const PhotoGrid = React.createClass({
    componentDidMount(){
        const { fetchPhotos } = this.props;
        fetchPhotos();
    },

    render(){
        return (
            <div className="row center-text">
                {this.props.photos.isFetching ? <Loader /> : this.props.photos.list.map( (photo, index) => <Photo photo={photo} key={index}/> )}
            </div>
        )
    }
});

export default PhotoGrid;