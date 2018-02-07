export function GET(){
	
		var axios = require('axios');	
        return axios.get(window.Database, {
        	responseType: 'json'
        })
}

export function POST(session_Name, topics_Covered, Attendee, Trainer, Planned_Date, Actual_Date , Stat, Duration,  Comment){
			var axios = require('axios');
			axios.post(window.Database, { sessionName : session_Name, topicsCovered:topics_Covered, attendee:Attendee, trainer:Trainer, plannedDate:Planned_Date, actualDate :Actual_Date, duration:Duration, Status:Stat ,comment:Comment })
			.then(function(response){
				console.log('saved successfully')
			})
}

export function DELETE(id){
			var axios = require('axios');
			axios.delete(window.Database+id)
			.then(function(response){
				console.log('Deleted  successfully')
			}).catch((e)=>{
				console.log('Error in deleting')
			})
}

export function GET_ID(id){
	
		var axios = require('axios');	
        return axios.get(window.Database+id, {
        	responseType: 'json'
        }).then(response => {
			console.log(response);
			return response;
	
        });
}