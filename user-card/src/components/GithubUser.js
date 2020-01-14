import React from 'react';
import FollowersList from './FollowersList';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from 'react-gsap';


class GithubUser extends React.Component {
    // constructor(){
    // super();
    // this.state = {
    //     thing: 'thingyyyy'
    // }
    // }
    
    
    
    render(){
        const cardStyle = {
            color: 'black'
        }
        return(
            <div className='userCard'>
                <Card style={cardStyle}>
                    <Timeline
                        target={<CardImg top width="100%" src={this.props.userData.avatar_url} alt="Card image cap" />}
                        >
                        
                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                        <Tween to={{ x: '50px' }} />
                        </Timeline>
                    <CardBody>
                        <Tween
                        wrapper={
                        <ul style={{ perspective: '1000px', fontSize: '1.5rem' }} />
                        }
                        staggerFrom={{
                        opacity: 0,
                        cycle: {
                            rotationX: [-90, 90],
                            transformOrigin: ['50% top -100', '50% bottom 100']
                        },
                        }}
                        duration={1}
                        stagger={0.5}
                        >
                        <h1>{this.props.userData.login}</h1>
                        <h3>id = {this.props.userData.id}</h3>
                        <h2>Bio: {this.props.userData.bio}</h2>
                        <h2>current status: {this.props.userData.hireable ? 'Hirable' : 'Employed'}</h2>
                            <FollowersList followers={this.props.followers} />
                        </Tween>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default GithubUser;