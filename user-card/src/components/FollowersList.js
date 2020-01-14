import React from 'react';
import axios from 'axios';





class FollowersList extends React.Component {
    
    constructor(){
        super();
        this.state = {
            followersUrl: ''
        }
        // console.log(this.props)
}




componentDidMount(){
    console.log('component mounted')
    axios
    // doesnt work here
    .get(this.props.followersUrl)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log('there was an error loading followers list ',err)
    })
    
}


render(){
        return(
            <div>
                {/* Works here */}
                <h1>{this.props.followersUrl}</h1>
            </div>
        )
    }
}

export default FollowersList;