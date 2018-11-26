import React, { Component } from 'react'
import { Jumbotron , Container} from 'react-bootstrap'

class CurrentNetworkInfo extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
      
      }

    }

    componentWillMount() {
        console.log('componentWillMount MainApp');

    }

    componentDidMount(){
        console.log('componentDidMount MainApp');
      
    }
    
    render() {

        var styles = {

            background: "#ffffff",
       
            whiteSpace: "nowrap",
            
        }
        return (

            <div style={styles}>
                <strong>Your Address</strong>: {this.props.address}   <strong>Current NetWork</strong>: {this.props.currentnetwork}

                <strong>Balance</strong>: <span id="TTBalance"></span> {this.props.storageValue} Ang Token<br/><br/>
            </div>
           

        );

    }
}


export default CurrentNetworkInfo
