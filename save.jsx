import React from 'react';
import styles from './table.scss';
import Form from './form.jsx';
import {GET, POST, DELETE, GET_ID} from './CRUD.jsx';

export default class Save extends React.Component {
			


		constructor (props) {
         super(props);

         this.state = {
             tableData: [{
					id:0,
					sessionName : '',
					topicsCovered : '',
					attendee : '',
					trainer :'',
					date :'',
					duration :'',
					Status :'',
					comment :'',
             }],
         };
		
     }
	 
	    componentDidMount () {
			
			GET().then((response)=> {
				this.setState({ tableData: response.data });
			})
		
	}		
		_renderObject(){
		const { tableData } = this.state;
		return Object.entries(tableData).map(([key, value], i) => {
			return (
				<div  className="table_row" key={key}>
				
				<div className='table_small'>
				<div className="table_cell" >	<p>ID</p></div>
				<div className="table_cell" >	{value.id}</div>
				</div>
				<div className='table_small'>
				<div className="table_cell" >	<p>Session Name</p></div>
				<div className="table_cell" >	{value.sessionName}</div>
				</div>
				<div className='table_small'>
				<div className="table_cell" >	<p>Topics Covered</p></div>
				<div className="table_cell" >	{value.topicsCovered}</div>
				</div>
				<div className='table_small'>
				<div className="table_cell" >	<p>Attendee</p></div>
				<div className="table_cell" >	{value.attendee}</div>
				</div>
				<div className='table_small'>
				<div className="table_cell" >	<p>Trainer</p></div>
				<div className="table_cell" >	{value.trainer}</div>
				</div>
				<div className='table_small'>
				<div className="table_cell" >	<p>Planned date</p></div>
				<div className="table_cell" >	{value.plannedDate}</div>
				</div>
				<div className='table_small'>
				<div className="table_cell" >	<p>Actual date</p></div>
				<div className="table_cell" >	{value.actualDate}</div>
				</div>
				<div className='table_small'>
				<div className="table_cell" >	 <p>Duration</p></div>
				<div className="table_cell" >	{value.duration}</div>
				</div>
				<div className='table_small'>
				<div className="table_cell" >	<p>Status</p></div>
				<div className="table_cell" >	{value.Status}</div>
				</div>
				<div className='table_small'>
				<div className="table_cell" >	<p>Comment</p></div>
				<div className="table_cell" >	{value.comment}</div>
				</div>
				<div className='table_small'>
				<div className="table_cell" >	<p>Edit</p></div>
				<div className=" table_cell">	<button onClick={this.props.action.bind(this, value.id)}>Edit</button></div>
				</div>
				</div>
			)
		})
	}
		
		
		
		
		
	render(){

		
		return(
			<div>
			<div className="table" id="results">
				<div className="theader">
				<div className="table_header">
					<p>ID</p>
				</div>
				<div className="table_header">
					<p>Session Name</p>
				</div>
				<div className="table_header">
					<p>Topics Covered</p>
				</div>
				<div className="table_header">
					<p>Attendee</p>
				</div>
				<div className="table_header">
					<p>Trainer</p>
				</div>
				<div className="table_header">
					<p>Planned date</p>
				</div>
				<div className="table_header">
					<p>Actual date</p>
				</div>
				<div className="table_header">
					<p>Duration</p>
				</div>
				<div className="table_header">
					<p>Status</p>
				</div>
				<div className="table_header">
					<p>Comment</p>
				</div>
				<div className="table_header">
					<p>Edit</p>
				</div>
			
				</div>
					{this._renderObject()}
			</div>		
		</div>
		
		);
	}

	
}
