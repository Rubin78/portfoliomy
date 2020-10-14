// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { wait } from '@testing-library/react';




// function App() {



//   state={
// loading:true,
// person:null,
//   };

//   async componentDidMount() {

//     const url="https://randomuser.me/"
    
// const response  = wait fetch(url)

//   };

  
//   return (
//     <div className="App">
//       {/* <header className="App-header"> */}
    
//         {/* <p>
//           Edit <code>src/App.js</code> welcome is this th.
//         </p> */}
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >hello htis is my first app
//         </a> */}
//       {/* </header> */}


// <div> user ...</div>





//     </div>
//   );
// }






// export default App;









import { wait } from "@testing-library/react";
import React from "react";

export default class FetchRandomUser extends React.Component {
 

state={
loading:true,
person:null


}


async componentDidMount() {

const url= "https://api.randomuser.me/";
const response = await fetch(url);
const data = await response.json();
this.setState({ person: data.results[0], loading: false });


}
  
  render() {
if(this.state.loading) {
  return <div>loading.....</div>

  
}

if(this.state.person) {
  return<div>lno page found</div>
  
  
}

    return (
      <div>

<div>{this.state.person.name.title}</div>
        <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <img src={this.state.person.picture.large} />





        </div>
    );
  }
}
