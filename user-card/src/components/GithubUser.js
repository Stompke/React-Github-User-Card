import React from 'react';
import FollowersList from './FollowersList';

class GithubUser extends React.Component {
    // constructor(){
    // super();
    // this.state = {
    //     thing: 'thingyyyy'
    // }
    // }
    


    render(){
        return(
            <div className='userCard'>
                <h1>{this.props.userData.login}</h1>
                <h2>id = {this.props.userData.id}</h2>
                <h3>Bio: {this.props.userData.bio}</h3>
                <h2>{this.props.userData.hireable ? 'Hirable' : 'Employed'}</h2>

                <FollowersList followers={this.props.followers} />


            </div>
        )
    }
}

export default GithubUser;