import React from 'react';
import ReactDOM from 'react-dom';

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
                <br/><br/>
                <input type="submit" />
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));