import React,{ PropTypes }from 'react';


const propTypes = {
   hobby: PropTypes.string.isRequired
}
class Hobby extends React.Component{
    render() {
        return(
            <div>
                <h1>我的爱好是{ this.props.hobby }</h1>
            </div>
        )
    }


}
Hobby.propTypes = propTypes;
export default Hobby;