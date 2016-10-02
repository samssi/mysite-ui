import React from 'react';

export default React.createClass({
    render() {
        return (<div className="personalInformation">
            <div className="leftColumn">{this.props.data.name}</div><div className="rightColumn">CURRICULUM VITAE</div>
            <div className="leftColumn">{this.props.data.address.street}</div>
            <div className="leftColumn">{this.props.data.address.zipcode} {this.props.data.address.city}</div>
            <div className="leftColumn">{this.props.data.phoneNumber}</div>
            <div className="leftColumn">{this.props.data.dateOfBirth}</div>
        </div>);
    }
});