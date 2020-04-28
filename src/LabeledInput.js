import React from 'react';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LabeledInput.css";


// function LabeledInput(props) { 
//     function handleClick(e) {
//         console.log('The link was clicked.');
//       }
//     return <div className="labels" onClick= {handleClick}> {props.name} </div>;

// }



// export default LabeledInput; 


class LabeledInput extends React.Component {

  state = {};

  constructor(props){
    super(props);

    this.state.value = this.props.defaultValue;
    console.log('LabeledInput - Inside constructor');
  }

  static getDerivedStateFromProps(props, state){
    console.log('LabeledInput - Inside getDerivedStateFromProps', props, state);
  
    return null;

  }

  componentDidMount(){
    console.log('LabeledInput - Inside componentDidMounts');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('LabeledInput - Inside shouldComponentUpdate');
    return true;

  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LabeledInput - Inside getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('LabeledInput - Inside componentDidUpdate');
   
  }

  componentWillUnmount(){

    console.log('LabeledInput - componentWillUnmount');
  }

    onChangeHandler = e => {
        console.log(e.target.value);
        // value = e.target.value
        this.setState({
          value: e.target.value
        });   
    };

    render() {

      console.log('LabeledInput - Inside render');

      const style = {
          marginBottom: '10px',
          color: '#929292',
          fontSize: '18px'

      };

        return (
          <div className="input-group labeled-input">
            
            
            <label htmlFor = { this.props.id }
            style={style}
            >
            { this.props.label } 
            </label> 
            <input 
            type = "text"
            placeholder = { this.props.placeholder }
            id = { this.props.id }
            value = {this.state.value}
            onChange = { this.onChangeHandler }
            className = "form-control"
            /> 
            <span>

            <i className="fas fa-home"></i>

            </span>
            </div>
            
        );

    }
}

export default LabeledInput;