import React, { Component } from 'react';
import { Input } from 'antd';

class Search extends Component{
	constructor(props){
		super(props);
		this.state={
			results:[],
		};
	}

	handleOnInputChange = (event) => {
		const query=event.target.value;
		let results=[];
		
		if(query.length)
		{
			this.props.songs.map((item,idx)=>{
				if(item.name.includes(query)){
					results[idx]=item;
				}
			});
		this.state.results=results;
		// console.log(results);
		}else this.state.results=this.props.songs;
		
		this.props.callbackFromParent(this.state.results);
	}

	

	render(){
		return(
  		<label>
    	
    	<Input placeholder="Song Search" onChange={this.handleOnInputChange} enterButton />
    	
    	
  		</label>
  )
	}
}
export default Search;
