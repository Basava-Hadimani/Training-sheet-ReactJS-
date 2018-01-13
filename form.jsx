import React from 'react';
import Save from './save.jsx';
import styles from './table.scss';

export default class Form extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			sessionName : '',
			topicsCovered : '',
			attendee : '',
			trainer :'',
			date :'',
			duration :'',
			Status :'',
			comment :''
			
		}
		this.clear = this.Clear.bind(this);
		this.updateSessionName = this.UpdateSessionName.bind(this);
		this.updateTopicsCovered = this.UpdateTopicsCovered.bind(this);
		this.updateAttendee = this.UpdateAttendee.bind(this);
		this.updateTrainer = this.UpdateTrainer.bind(this);
		this.updateDate = this.UpdateDate.bind(this);
		this.updateDuration = this.UpdateDuration.bind(this);
		this.updateStatus = this.UpdateStatus.bind(this);
		this.updateComment = this.UpdateComment.bind(this);
		this.store = this.Store.bind(this);	
		this.handler = this.handler.bind(this);		
		
	}
	
	Store(){
		
		if((this.state.sessionName != '' ) && (this.state.attendee != '') && (this.state.trainer != '') && (this.state.date != '' ) && (this.state.Status != '')){
			var axios = require('axios')
			
			axios.post('http://localhost:3000/Tasks', { sessionName : this.state.sessionName, topicsCovered:this.state.topicsCovered, attendee:this.state.attendee, trainer:this.state.trainer, date:this.state.date, duration:this.state.duration, Status:this.state.Status ,comment:this.state.comment })
			.then(function(response){
				console.log('saved successfully')
			})
			
		this.setState({sessionName : ''});
		this.setState({topicsCovered : ''});
		this.setState({attendee : ''});
		this.setState({trainer : ''});
		this.setState({date : ''});
		this.setState({duration : ''});
		this.setState({Status : ''});
		this.setState({comment : ''});
		}else{
			alert("Please fill the required field");
		}
	}

	
	
	Clear(){
		
		this.setState({sessionName : ''});
		this.setState({topicsCovered : ''});
		this.setState({attendee : ''});
		this.setState({trainer : ''});
		this.setState({date : ''});
		this.setState({duration : ''});
		this.setState({Status : ''});
		this.setState({comment : ''});
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

	UpdateDate(e){
		this.setState({date : e.target.value})
	}
	
	UpdateDuration(e){
		this.setState({duration : e.target.value})
	}
	
	
	UpdateStatus(e){
		this.setState({Status : e.target.value})
	}
	
	UpdateComment(e){
		this.setState({comment : e.target.value})
	}
    handler(id) {
		var axios = require('axios')
			
		axios.get('http://localhost:3000/Tasks/'+id).then((response)=>{

			console.log(response.data[0].sessionName);
				
			this.setState({
				sessionName : response.data[0].sessionName,
				topicsCovered : response.data[0].topicsCovered,
				attendee : response.data[0].attendee,
				trainer :response.data[0].trainer,
				date :response.data[0].date,
				duration :response.data[0].duration,
				Status :response.data[0].Status,
				comment :response.data[0].comment
				
			});
				
			}).catch((error)=>{
				
			});
	
    }
	
   render() {
	   
	   
      return (
	           <div >
				  <div >
					<Save action={this.handler}/>
				</div>
				  <form>
				  <div className="form-group">
				  <hr />
				  <label className={"col-sm-4 control-label" + " session-name-label"}><b>Add a new training plan:</b></label>
				  <hr />
                  <div><label className={"col-sm-4 control-label" + " session-name-label"}>Session name:*</label></div>
                  <input type="text" className={"form-control"+" session-name"} value={this.state.sessionName}  onChange={this.updateSessionName} autoFocus />
                  </div>
               <div className="form-group">
                  <label className={"col-sm-4 control-label"+" topics-covered-label"}>Topics covered:</label>
                  <input type="text" className={"form-control"+" topics-covered"} value={this.state.topicsCovered}  onChange={this.updateTopicsCovered} />
              </div>
               <div className="form-group">
                  <label className={"col-sm-4 control-label"+" attendee-label"}>Attendee:*</label>
				<input type="text" className={"form-control"+" attendee"} value={this.state.attendee}  onChange={this.updateAttendee}/>
              </div>
               <div className="form-group">
			 <label className={"col-sm-4 control-label"+" trainer-label"}>Trainer:*</label>
			<input type="text" className={"form-control"+" trainer"} value={this.state.trainer}  onChange={this.updateTrainer}/>
              </div>
               <div className="form-group">
                  <label className={"col-sm-4 control-label"+" date-label"}>date:*</label>
                  <input type="date" className={"form-control"+" date"} value={this.state.date}  onChange={this.updateDate} />
              </div>
               <div className="form-group">
                  <label className={"col-sm-4 control-label"+" duration-label"}>Duration:</label>
                  <input type="text" className={"form-control"+" duration"} value={this.state.duration}  onChange={this.updateDuration} />
              </div>
               <div className="form-group">
                  <label className={"col-sm-4 control-label"+" Status-label"}>Status:*</label>
                  <input type="text" className={"form-control"+ " Status"} value={this.state.Status}  onChange={this.updateStatus} />
              </div>
               <div className="form-group">
                  <label className={"col-sm-4 control-label"+" comment-label"}>Comments:</label>
				  <div>
				  <textarea className = "comment" rows="4" cols="173" value={this.state.comment}  onChange={this.updateComment}  ></textarea>
				  </div>
              </div>			  
                  </form>
			<center>
			<button id="save" onClick = {this.store}>Save</button>	  
			<button id="clear" onClick = {this.clear} >Clear</button>
		   </center>

			  </div>

      );
   }
}
