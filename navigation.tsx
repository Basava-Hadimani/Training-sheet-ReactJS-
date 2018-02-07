import * as React from 'react';
import Save from './save.jsx';
import  { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from './contact.tsx';
import Career from './career.tsx';

class Navigation extends React.Component {
   render() {
      return (
			<div id="navigation">
			<h4><b>Training plan sheet</b></h4>
			</div>

      );
   }
}
export default Navigation;