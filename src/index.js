import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import MovieCatalog from './components/MovieCatalog';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MovieCatalog />, document.getElementById('root'));
registerServiceWorker();
