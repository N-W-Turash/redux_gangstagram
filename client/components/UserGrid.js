import React from 'react';
import User from './User';
import Loader from './Loader';

const UserGrid = React.createClass({
    componentDidMount(){
        const { fetchUsers } = this.props;
        fetchUsers();
    },

    render(){
        return (
            <div className="row center-text">
                {this.props.users.isFetching ? <Loader /> : this.props.users.list.map( (user, index) => <User user={user} key={index}/> )}
            </div>
        )
    }
});

export default UserGrid;