import React, { Component } from "react";
import Counter from "./Counter";
import Display from "./Display";


class Main extends Component {

    constructor(props){
        super(props);

        this.state = {
            total: 0
        }
    }

    updateTotal = (number) => {
        this.setState({
            total: this.state.total + number
        })
    }


    render() {
        return (
            <div>
                <p>Total number of clicks: {this.state.total}</p>
                <Display name={"Brendan"} email={"b@dojo.com"} username={"brendancodes"}/>
                <Counter number={0} total={this.state.total} updateTotal={this.updateTotal}/>
                <Counter number={0} total={this.state.total} updateTotal={this.updateTotal}/>
                <Counter number={0} total={this.state.total} updateTotal={this.updateTotal}/>
                <Counter number={0} total={this.state.total} updateTotal={this.updateTotal}/>
            </div>
        )
    }

}

export default Main;