import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Splash from './splash';

class Landing extends React.Component {
    render() {
        return (
            <div>
                <GreetingContainer />
                <Splash />
            </div >
        )
    }
}

export default Landing;