import React from 'react';

export default class RandomData extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        obj : ''
      }
    }

     componentDidMount(){
        this.setState({obj: this.props.location.state.rawJson})
       }
     
       backToPost = () =>{
        this.props.history.push('/')
       }
       
    render() { 
        return (
            <>
             <p>{JSON.stringify(this.state.obj)}</p>
             <button  onClick={this.backToPost}>Back to post</button>
            </>
        );
    }
}
 
