import * as React from 'react';
import Save from './save.jsx';
import  { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from './contact.tsx';
import Career from './career.tsx';

class Navigation extends React.Component {
   render() {
      return (
			<div className="row" id="navigation"><center>
			<h4><b>Training plans are shows below</b></h4></center>
			</div>

      );
   }
}
export default Navigation;