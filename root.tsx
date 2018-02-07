import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  Header from './header.tsx';
import Footer from './footer.tsx';
import Navigation from './navigation.tsx';
import Form from './form.jsx';


ReactDOM.render(<Header />, document.getElementById('head'));

ReactDOM.render(<Navigation />, document.getElementById('navigation'));

ReactDOM.render(<Form />, document.getElementById('form'));


ReactDOM.render(<Footer />, document.getElementById('foot'));