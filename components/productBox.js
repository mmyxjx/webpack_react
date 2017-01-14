import React,{ PropTypes }from 'react';
import Hobby from './Hobby';

const propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: 0,
            hobbies:['read book','music']

        };
        this.likedCallback = this.likedCallback.bind(this);
        this.addHobbyCallback = this.addHobbyCallback.bind(this);
    }
    likedCallback() {
        let liked = this.state.liked;
        liked++;
        this.setState({liked});
    }
    componentDidMount() {
        setTimeout(() => {
            this.likedCallback();
        },0);
    }
    addHobbyCallback() {
        let hobbyInput = this.refs.hobby;
        let newHobby = hobbyInput.value;
        if(newHobby){
           let hobbies = this.state.hobbies;
           hobbies.push(newHobby);

           this.setState({hobbies});
           hobbyInput.value = '';
        }


    }

    render() {
        return (
            <div>
                <h1>我的名字叫{this.props.name}</h1>
                <h1>我的年龄{this.props.age}</h1>
                <button onClick={this.likedCallback}>点击喜欢</button>
                <h1>您喜欢了: {this.state.liked} 次！</h1>
                <ul>
                    {this.state.hobbies.map( (item,i) =>
                    <Hobby hobby={item} key={i} />
                    )}
                </ul>
                <input type="text" ref="hobby"/>
                <button onClick={ this.addHobbyCallback }>添加爱好</button>
            </div>
        )

    }

}
Profile.propTypes = propTypes;

export default Profile;
