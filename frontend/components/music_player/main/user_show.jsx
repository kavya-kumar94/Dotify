import React from 'react';
import { connect } from 'react-redux';

class UserShow extends React.Component {
    render() {
        let { currentUser } = this.props
        return(
            <div className="username-show">Made for {currentUser}</div>
        )
    }
}

const msp = ({ entities, session }) => {
    return {
        currentUser: entities.users[session.id].username
    }
}

export default connect(msp, null)(UserShow)