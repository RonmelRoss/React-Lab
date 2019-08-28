import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import myformstyle from './myform.module.css';

class MyForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            age: null,
            errormessage: '',
            city: 'Cebu',
            description: 'The content of text area goes in the value attribute.'
        };
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';

        if (nam === "age") {
            if (val !== "" && !Number(val)) {
                err = <strong>Your age must be a number.</strong>;
            }
        }

        //this.setState({ username: event.target.value });
        this.setState({errormessage:err});
        this.setState({[nam]:val});
        //this.setState({ city: event.target.value });
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("Data to be submitted.\nName: " + this.state.username + "\nAge: " + this.state.age + "\nCity: " + this.state.city);
    }

    render() {
        let header = '';
        if (this.state.username) {
            header = <h1>Hello, {this.state.username}</h1>;
        } else {
            header = '';
        }
        const mystyle = {
            color: "white",
            border: "2px solid blue",
            //backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <form onSubmit={this.mySubmitHandler}>
                {header}
                <p>Enter your name:</p>
                <input type="text" name="username" onChange={this.myChangeHandler} />
                <p>Enter your age:</p>
                <input type="text" name="age" onChange={this.myChangeHandler} />
                &nbsp;{this.state.errormessage}
                <p>
                    Select city:&nbsp;
                    <select name="city" onChange={this.myChangeHandler}>
                        <option value="Cebu">Cebu</option>
                        <option value="Davao">Davao</option>
                        <option value="Manila">Manila</option>
                    </select>
                </p>
                <p>Add your comments below:</p>
                <textarea value={this.state.description} />
                <ol>
                    <li>List 1</li>
                    <li>List 1</li>
                    <li>List 1</li>
                </ol>
                <table style={{backgroundColor: "lightblue",border:"2px solid black"}}>
                    <tr>
                        <th className={myformstyle.biggreen}>Name</th>
                        <th className={myformstyle.biggreen}>Age</th>
                    </tr>
                    <tr>
                        <td style={mystyle}>Ronmel Ross</td>
                        <td style={mystyle}>30</td>
                    </tr>
                </table>
                <br/>
                <input type="submit" />
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));