import React from "react";

class AboutItems extends React.Component {
    render() {
        return (
            <li className={this.props.className}>
                <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={this.props.image} alt="" />
                </div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>{this.props.date}</h4>
                        <h4 className="subheading">{this.props.title}</h4>
                    </div>
                    <div className="timeline-body">
                        <p className="text-muted">{this.props.content}</p>
                    </div>
                </div>
            </li>
        )
    }
}

export default AboutItems;