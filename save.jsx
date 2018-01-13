import React from 'react';
import styles from './table.scss';
import Form from './form.jsx';


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
		 this.deleterow = this.deleteRow.bind(this);
		 
     }
	 
	    componentDidMount () {
			
		var axios = require('axios');	
        axios.get('http://localhost:3000/Tasks', {
        	responseType: 'json'
        }).then(response => {
            this.setState({ tableData: response.data });
	
		console.log(this.tableData);
        });
		} 
		
		deleteRow(id){
			var axios = require('axios')
			
			axios.delete('http://localhost:3000/Tasks/'+id)
			.then(function(response){
				console.log('Deleted  successfully')
			}) 
		}
		
	/*	newLocalFunction(id){
			var axios = require('axios')
			
			axios.get('http://localhost:3000/Tasks/'+id).then((response)=>{

				console.log(this.props);
				console.log(response.data[0].sessionName);
				
				this.props.action.bind(this,param1);
				
			}).catch((error)=>{
				/// Log here
			});
		}*/
		
		_renderObject(){
		const { tableData } = this.state;
		console.log(tableData);
		return Object.entries(tableData).map(([key, value], i) => {
			return (
				<div  className="Row" key={key}>
				
				<div className="Cell" >	{value.id}</div>
				<div className=" Cell">	{value.sessionName}</div>
				<div className=" Cell">	{value.topicsCovered}</div>
				<div className=" Cell">	{value.attendee}</div>
				<div className=" Cell">	{value.trainer}</div>
				<div className=" Cell">	{value.date}</div>
				<div className=" Cell">	{value.duration}</div>
				<div className=" Cell">	{value.Status}</div>
				<div className=" Cell">	{value.comment}</div>
				<div className=" Cell">	<input type="button" onClick={this.deleterow.bind(this, value.id)}  value="Delete" /></div>
				<div className=" Cell">	<input type="button" onClick={this.props.action.bind(this, value.id)} value="Edit" /></div>
				</div>
			)
		})
	}
		
		
		
		
		
	render(){

		
		return(
			<div>
			
			

			<div className="Table">
    <div className="Heading">
        <div className="Cell">
            <p>ID</p>
        </div>
        <div className="Cell">
            <p>Session Name</p>
        </div>
        <div className="Cell">
            <p>Topics Covered</p>
        </div>
        <div className="Cell">
            <p>Attendee</p>
        </div>
        <div className="Cell">
            <p>Trainer</p>
        </div>
        <div className="Cell">
            <p>Date</p>
        </div>
        <div className="Cell">
            <p>Duration</p>
        </div>
        <div className="Cell">
            <p>Status</p>
        </div>
        <div className="Cell">
            <p>Comment</p>
        </div>
		<div className="Cell">
            <p>Delete</p>
        </div>
		<div className="Cell">
            <p>Edit</p>
        </div>
	
    </div>
	{this._renderObject()}
	
</div>	
			
			
			
			</div>
		
		);
	}

	
}
