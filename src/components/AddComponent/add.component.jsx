import React, {Component} from 'react';

// import './add.css';

export class AddComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            comment: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ comment: ''});

    }

    handleChange(event) {
        this.setState({comment: event.target.value})
    }

    render () {
        return(
                <form onSubmit={this.handleSubmit} className={"add-component-wrapper"}>
                    <label>
                        Add a comment
                        <textarea value={this.state.comment} onChange={this.handleChange}/>
                    </label>
                    <input type={"submit"} value={"Add Comment"}/>
                </form>
        );
    }
}
