import React from 'react';
import Photo from './Photo';
import Loader from './Loader';

const PhotoGrid = React.createClass({
    componentDidMount(){
        const { fetchPhotos } = this.props;
        fetchPhotos(0);
    },

    handleClick(){
      //console.log('clicked');
      const { fetchPhotos } = this.props;
      fetchPhotos(this.props.photos.offset + 20);
      //console.log(this.props.list);
    },

    render(){
        return (
            <div>
                <div className="row center-text">
                    {this.props.photos.list.map( (photo, index) => <Photo photo={photo} key={index}/> )}
                    {this.props.photos.isFetching ? <Loader /> : undefined}

                </div>

                {this.props.photos.offset + 20 <= 100? <div className="center-text bottom-margin-30">
                    <button className="more btn btn-success zero-radius pt-sans" onClick= {this.handleClick}>view more</button>
                </div> : undefined}

            </div>
        )
    }
});

export default PhotoGrid;