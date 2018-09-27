import React from "react";
import Paragraph from "./Paragraph";
import Calculation from "../logic/calculation";

/** @namespace React.Component */
export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
            value: ''
        };

        /**
         * @TODO Implement it
         */
    }

    handleChange(event) {
        // @TODO Implement it
    }

    handleSubmit(event) {
        event.preventDefault();

        let calculation = new Calculation(this.state.value);

        let result = null/* @TODO Implement it */;

        let content = 'Wrong input!';

        if (result !== false) {
            // @TODO Implement it
        }

        /**
         * @TODO Implement it
         */
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h1 className="col-md-8 col-md-offset-2 text-center">Devskiller React calculator</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <form className="col-md-6 col-md-offset-3 text-center" onSubmit={this.handleSubmit}>
                            <input type="text" className="form-control col-md-9" placeholder="expression..."
                                   /* @TODO Implement it *//>
                            <input className="btn btn-success" type="submit" value="Submit"/>
                        </form>
                    </div>

                    <Paragraph /* @TODO Implement it *//>
                </div>
            </div>
        )
    }
}
