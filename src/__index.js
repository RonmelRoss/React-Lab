import React from 'react';
import ReactDOM from 'react-dom';

// const myelement = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//     <li>This is an expression: {10+10}</li>
//   </ul>
// );

//const secondElement = <input type="text" />;

// ReactDOM.render(myelement, document.getElementById('root'));
//ReactDOM.render(secondElement, document.getElementById('input-value'));

class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.brand}!</h2>;
    }
}

class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my garage?</h1>
                <Car brand="Ford" />
                Comment: <input type="text" />
                <input type="button" value="Submit" />
            </div>
        )
    }
}

ReactDOM.render(<Garage />, document.getElementById('root'));