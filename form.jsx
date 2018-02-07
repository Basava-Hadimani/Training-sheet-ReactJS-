import React from 'react';
import Save from './save.jsx';
import styles from './table.scss';
import {GET, POST, DELETE, GET_ID} from './CRUD.jsx';

export default class Form extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			sessionName : '',
			topicsCovered : '',
			attendee : '',
			trainer :'',
			plannedDate :'',
			actualDate :'',
			duration :'',
			Status :'',
			comment :'',
			dis:false,
			mandatoryComplete:'',
			mandatoryCancel : '',
			mandatoryPlan : '',
			mandatoryDefer : ''
			
		}
		this.clear = this.Clear.bind(this);
		this.updateSessionName = this.UpdateSessionName.bind(this);
		this.updateTopicsCovered = this.UpdateTopicsCovered.bind(this);
		this.updateAttendee = this.UpdateAttendee.bind(this);
		this.updateTrainer = this.UpdateTrainer.bind(this);
		this.updatePlannedDate = this.UpdatePlannedDate.bind(this);
		this.updateActualDate = this.UpdateActualDate.bind(this);
		this.updateDuration = this.UpdateDuration.bind(this);
		this.updateStatus = this.UpdateStatus.bind(this);
		this.updateComment = this.UpdateComment.bind(this);
		this.store = this.Store.bind(this);	
		this.handler = this.handler.bind(this);	
		this.display = this.display.bind(this);
		this.save = this.save.bind(this);
		
	}
	
	save(){
		console.log(this.state);
		POST( this.state.sessionName,this.state.topicsCovered, this.state.attendee, this.state.trainer, this.state.plannedDate, this.state.actualDate, this.state.Status ,this.state.duration, this.state.comment);
		this.clear();
	}
	
	Store(){
		
			
			switch(this.state.Status){
				
				case 'Planned' : 	if(this.state.sessionName  && this.state.topicsCovered && this.state.plannedDate && this.state.Status){
										this.save();
									}else{
										alert("please fill the mandatory field");
									}
									break;
				
				case 'Completed' :
									if(this.state.sessionName  && this.state.topicsCovered && this.state.attendee && this.state.trainer && this.state.actualDate && this.state.duration ){
										this.save();
									}
									else{
										alert("Please fill the required field");
									}									
									break;
				
				case 'Deferred' :
									if(this.state.comment && this.state.sessionName){
										this.save();		
									}
									else{
										alert("Please fill the required field");
									}
									break;									
				
				case 'Canceled' :
									if(this.state.comment && this.state.sessionName){
										this.save();		
									}
									else{
										alert("Please fill the required field");
									}
									break;
				default : 
									alert("Please fill the required field");
					
			}

	}

	
	
	Clear(){
		
		this.setState({
			sessionName : '',
			topicsCovered : '',
			attendee : '',
			trainer :'',
			plannedDate :'',
			actualDate :'',
			duration :'',
			Status :'',
			comment :'',
			mandatory : '',
			mandatoryComplete:'',
			mandatoryCancel : '',
			mandatoryPlan : '',
			mandatoryDefer : '',
			dis:false
		});
	}
	
	UpdateSessionName(e){
		
		this.setState({sessionName : e.target.value})
	}
	
	UpdateTopicsCovered(e){
	
		this.setState({topicsCovered : e.target.value})
	}	
	
	UpdateTrainer(e){
		this.setState({trainer : e.target.value})
	}
	UpdateAttendee(e){
		this.setState({attendee : e.target.value})
	}

	UpdatePlannedDate(e){
		this.setState({plannedDate : e.target.value})
	}
	
	UpdateActualDate(e){
		this.setState({actualDate : e.target.value})
	}
	
	UpdateDuration(e){
		this.setState({duration : e.target.value})
	}
	
	
	UpdateStatus(e){
		this.setState({Status : e.target.value})
		if(e.target.value === 'Completed'){
		this.setState({mandatoryComplete: '*'})
		this.setState({mandatoryCancel: ''})
		this.setState({mandatoryPlan : ''})
		this.setState({mandatoryDefer : ''})
		}
		else if(e.target.value === 'Canceled'){
			this.setState({mandatoryCancel: '*'})
			this.setState({mandatoryComplete: ''})
			this.setState({mandatoryPlan : ''})
			this.setState({mandatoryDefer : ''})
		}
		else if(e.target.value === 'Planned'){
			this.setState({mandatoryPlan: '*'})
			this.setState({mandatoryComplete: ''})
			this.setState({mandatoryCancel : ''})
			this.setState({mandatoryDefer : ''})
		}	
		else if(e.target.value === 'Deferred'){
			this.setState({mandatoryCancel: '*'})
			this.setState({mandatoryComplete: ''})
			this.setState({mandatoryPlan : ''})
			this.setState({mandatoryDefer : ''})
		}		
	}
	
	UpdateComment(e){
		this.setState({comment : e.target.value})
	}
	
    handler(id) {
		GET_ID(id).then((response)=>{ 

			this.setState({
				sessionName : response.data[0].sessionName,
				topicsCovered : response.data[0].topicsCovered,
				attendee : response.data[0].attendee,
				trainer :response.data[0].trainer,
				plannedDate :response.data[0].plannedDate,
				actualDate :response.data[0].actualDate,
				duration :response.data[0].duration,
				Status :response.data[0].Status,
				comment :response.data[0].comment
				
			});
		
		
		}).catch((e)=>{
			console.log("Error in editing");
		});
		
		DELETE(id);
	
    }
	
	display(){
		if(this.state.dis === false){
		this.setState({dis : true});
		}
		else{
			this.setState({dis : false});
		}
			
	}
	componentWillMount () {
		window.Database = 'http://localhost:3000/Tasks/';
	};
	
   render() {
	   
      return (
	           <div >
				  <form>
				  <div className="form-group">
				  <hr />
				  <label className={"col-sm-4 control-label" + " session-name-label"}><b>Add a new training plan:</b></label>
				  </div>
				  <hr />
				  

			  <div className="row">
               <div className="form-group col-6">
                  <label className={"control-label"+" session-name-label"}>Session name:*</label>
				<input type="text"  className={"form-control"+" session-name"} value={this.state.sessionName}  onChange={this.updateSessionName} autoFocus/>
              </div>
               <div className="form-group col-6">
			 <label className={"control-label"+" trainer-label"}>Topics covered:{this.state.mandatoryComplete}{this.state.mandatoryPlan}</label>
			<input type="text"  className={"form-control"+" topics-covered"} value={this.state.topicsCovered}  onChange={this.updateTopicsCovered}/>
              </div>
			  </div>


			  
			  
			  
			  <div className="row">
               <div className="form-group col-6">
                  <label className={"control-label"+" attendee-label"}>Attendee:{this.state.mandatoryComplete}</label>
				<input type="text"  className={"form-control"+" attendee"} value={this.state.attendee}  onChange={this.updateAttendee}/>
              </div>
               <div className="form-group col-6">
			 <label className={"control-label"+" trainer-label"}>Trainer:{this.state.mandatoryComplete}</label>
			<input type="text" className={"form-control"+" trainer"} value={this.state.trainer}  onChange={this.updateTrainer}/>
              </div>
			  </div>
				
				
				<div className="row">
               <div className="form-group col-6">
                  <label className={"control-label"+" date-label"}>Planned date:{this.state.mandatoryPlan}</label>
                  <input  type="date" className={"form-control"+" date"} value={this.state.plannedDate}  onChange={this.updatePlannedDate} />
              </div>
			  
               <div className="form-group col-6">
                  <label className={"control-label"+" date-label"}>Actual date:{this.state.mandatoryComplete}</label>
                  <input type="date" className={"form-control"+" date"} value={this.state.actualDate}  onChange={this.updateActualDate} />
              </div>
			 
			  </div>

			  

			<div className="row">  
               <div className="form-group col-6">
                  <label className={"control-label"+" Status-label"}>Status:*</label>
				  <select  className={"form-control"+ " Status"} value={this.state.Status}  onChange={this.updateStatus}>
							<option value="select">Select Status</option>
							<option value="Planned">Planned</option>
							<option value="Completed">Completed</option>
							<option value="Deferred">Deferred</option>
							<option value="Canceled">Canceled</option>
				  </select>
              </div>
			  
               <div className="form-group col-6">
                  <label className={"control-label"+" duration-label"}>Duration:{this.state.mandatoryComplete}</label>
                  <input type="text" className={"form-control"+" duration"} value={this.state.duration}  onChange={this.updateDuration} />
              </div>

			</div>			  
			  
			 <div className="row">  
			  <div className="form-group col-12">
                  <label className={"control-label"+" comment-label"}>Comments:{this.state.mandatoryCancel}</label>
				  <textarea className={"form-control"+" comment"} value={this.state.comment}  onChange={this.updateComment} >
				  </textarea>
			  </div>
			 </div>
			  		  
            </form>
			
			
			<center>
			<button id="save" onClick = {this.store}>Save</button>	  
			<button id="clear" onClick = {this.clear} >Clear</button>
			<button id="clear" onClick = {this.display} >Display</button>
				{this.state.dis?<div><Save action={this.handler} /></div>:<div></div>}
		   </center>

			  </div>

      );
   }
}
