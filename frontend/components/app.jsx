import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
    <div>
        <h2>Dotify</h2>
        <GreetingContainer />
    </div>
);

export default App;