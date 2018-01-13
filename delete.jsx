import React from 'react';



export default class Delete extends React.Component {
	constructor(){
		super();
		this.state = {
			row : ''
			
		
		}
		
		this.rowUpdate = this.RowUpdate.bind(this);
		this.deleteRow = this.DeleteRow.bind(this);
	}
	RowUpdate(e){
		
		ths.setState({row: e.target.value});
	}
	DeleteRow(){
		
		    var axios = require('axios')
			
			axios.delete('http://localhost:3000/Tasks/'+this.state.row)
			.then(function(response){
				console.log('Deleted  successfully')
			}) 
	}

   render() {
      return (
	  <div>
	    <form>
    <div class="form-group">
      <label for="row">Enter the row number to be edited::</label>
      <input type="number" class="form-control" id="row" placeholder="Enter row number" onChange={this.rowUpdate}/>
    </div>
    <button   class="btn btn-default"  onClick={this.deleteRow}>Delete</button>
  </form>
	</div>

      );
   }
}
