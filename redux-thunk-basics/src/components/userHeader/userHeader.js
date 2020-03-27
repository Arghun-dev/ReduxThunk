import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../store/Actions/index';

class userHeader extends React.Component {
    componentDidMount(){
        this.props.dispatch(Actions.fetchUsers(this.props.userId))
    }
    render() {
        const user = this.props.users.find(user => user.id === this.props.userId)
        return (
            <div>{user.name}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(userHeader);