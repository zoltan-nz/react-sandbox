import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './layout/App';
import registerServiceWorker from './register-service-worker';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
