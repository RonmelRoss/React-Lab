import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }

    changeColor = () => {
        this.setState({color:"black"});
    }

    render() {
        return (<div>
            <h1>My {this.state.brand}</h1>
            <p>
                It is a {this.state.color} {this.state.model} from
                {this.state.year}.
            </p>
            <input type="button" value="Change color" onClick={this.changeColor} />
        </div>
        );
    }
}

ReactDOM.render(<Car />, document.getElementById('root'));
