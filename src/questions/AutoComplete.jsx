import './App.css';
import React from 'react';

class AutoComplete extends React.Component{
    state={value:'',list:[]}
    names = ['Amy','Adam','Bob','Barley','Carol','Chals','Kumar','Saurabh','Shiv']
    autoComplete=(e)=>{
        let suggestions=[];
        this.names.forEach(n=>{
            if(n.substr(0,e.target.value.length).toUpperCase()===e.target.value.toUpperCase() && e.target.value.length!==0){
                suggestions.push(n);
                this.setState({list:suggestions});
                console.log(suggestions);
            }
        })
        if(e.target.value.length===0){this.setState({list:suggestions});}
        
        this.setState({value:e.target.value})

}

suggestionsClickHandler=(e,l)=>{
    this.setState({value:l});
    this.setState({list:[]});
}
    render(){return (
    <div>
        <input type="text" value={this.state.value} onChange={e=>this.autoComplete(e)}/>
        {this.state.list.map((l,i)=><li key={i} onClick={e=>{this.suggestionsClickHandler(e,l)}}>{l}</li>)}
    </div>)}
}

export default AutoComplete;
