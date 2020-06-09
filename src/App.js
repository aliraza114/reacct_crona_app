import React from 'react';

import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';

// import { Cards, Charts, CountryPicker } from './components';

class App extends React.Component {
    render() {
        return (
            <div>
              <Cards />
              <CountryPicker />
              <Charts />
            </div>
        )
    }
}

export default App; 