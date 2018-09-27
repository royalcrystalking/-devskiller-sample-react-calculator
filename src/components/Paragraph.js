import React from "react";

/** @namespace React.Component */
export default class Paragraph extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <p className="panel-heading">Result</p>

                <p className="panel-body">
                    {this.props.content}
                </p>
            </div>
        );
    }
}