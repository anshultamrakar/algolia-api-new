import React from 'react';
import { BASE_URL } from './config/api'
import axios from 'axios'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import InfiniteScroll from "react-infinite-scroll-component";

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      oldPosts: [],
      newPosts: [],
      count: 0
    }
  }
  


  componentDidMount(){
    this.getPost();
    this.timerId = setInterval(() => this.getPost(), 10000); 
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }


  getRawJSON = (json_obj) =>{
    this.props.history.push({ 
      pathname: '/RandomData',
      state: { 
      rawJson : json_obj
      }
    });
  }


  getPost =()=>{
    
    if(this.state.oldPosts.length<1000){
    axios.get(BASE_URL+this.state.count).then(response => {
    this.setState({newPosts: response.data.hits});
    this.setState({oldPosts: [...this.state.oldPosts, ...this.state.newPosts]});
          
  })
  .catch((error) => {

  });
  this.setState({count: this.state.count+1});
}
}

  render() { 
    return (
      <TableContainer component={Paper} >
         <InfiniteScroll
           dataLength={this.state.oldPosts.length}
           next={this.getPost}
           hasMore={true}
           loader={<center>Loading...</center>}
         >
      <Table aria-label="simple table">
        <TableHead style = {{ backgroundColor : "#333"}}>
          <TableRow >
            <TableCell style = {{ color : "#fff"}} align="left">Title </TableCell>
            <TableCell style = {{ color : "#fff"}} align="left">Author</TableCell>
            <TableCell style = {{ color : "#fff"}} align="left">Created_at</TableCell>
            <TableCell style = {{ color : "#fff"}} align="left">URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.oldPosts.map((data,index) => (
            <TableRow  key={index}  onClick={()=>this.getRawJSON(this.state.oldPosts[index])}>
              <TableCell align="left">{data.title}</TableCell>
               <TableCell align="left">{data.author}</TableCell>
               <TableCell align="left">{data.created_at}</TableCell>
               <TableCell align="left">{data.url}</TableCell>
           </TableRow>
           ))}
        </TableBody>
      </Table>
      </InfiniteScroll>
    </TableContainer>
    );
  }
}
 





