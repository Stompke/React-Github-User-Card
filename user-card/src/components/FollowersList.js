import React from 'react';
import axios from 'axios';





class FollowersList extends React.Component {
    
//     constructor(){
//         super();
//         this.state = {
//             followersUrl: ''
//         }
//         // console.log(this.props)
// }




componentDidMount(){
    console.log('component mounted')
    
    
}


render(){
        return(
            <div>
                {this.props.followers.map(item => (
                    (
                        <div>
                           {item.login}
                        </div>
                    )
                ))}
            </div>
        )
    }
}

export default FollowersList;