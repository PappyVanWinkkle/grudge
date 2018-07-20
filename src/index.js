import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './Application';

import Amplify from 'aws-amplify';
import Config from './aws-exports';

// Link front and Back end
Amplify.configure(Config);

ReactDOM.render(<Application />, document.getElementById('root'));
