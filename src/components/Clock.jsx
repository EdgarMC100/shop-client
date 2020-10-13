import React, {Component} from 'react';


class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    
    componentDidMount(){
        //Called immediately after a component is mounted. 
        //Setting state here will trigger re-rendering.
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }

    componentWillUnmount(){
        //Called immediately before a component is destroyed. 
        //Perform any necessary cleanup 
        //in this method, such as cancelled network requests, 
        //or cleaning up any DOM elements created in componentDidMount

    }

    tick() {
        this.setState({
          date: new Date()
        });
    }

    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <h2>It is {this.state.date.toLocalTimeString()}.</h2>
            </div>
        );
    }
}