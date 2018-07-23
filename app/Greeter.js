import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入

class Line extends Component {
	render(){
		return(<p>Hello!</p>);
	}
}

export default class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
		<Line />
      </div>
    );
  }
}