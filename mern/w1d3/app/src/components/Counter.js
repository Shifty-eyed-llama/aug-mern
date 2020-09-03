import React from "react";


class Counter extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            clickCount: props.number,
            total: props.total
        }

        this.updateTotal = props.updateTotal;
    }

    clickHandler = event => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
        this.updateTotal(1);
    }


    render() {
        return (
            <div>
                <p>Hello this is an app! You have clicked: {this.state.clickCount}</p>
                <button onClick={this.clickHandler}>Please click me!</button>
            </div>
        )
    }

}

export default Counter;