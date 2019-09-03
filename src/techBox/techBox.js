import React, { Component } from 'react';

export default class TechBox extends Component {
    title = {
        flex: 5,
        fontSize:12,
        color: '#7e87a1',
        fontFamily: 'Myriad Pro',
        display: 'flex',
        alignItems: 'center',
    };

    techBox = {
        height: 40,
        borderRadius: 10,
        display: 'flex',
        flex: 1,
        marginRight: 20,
        alignItems: 'center',
        padding: ' 0 5px',
        background: 'white',
    };
    render() {
        const {icon, title, background } = this.props;
        return (
            <div  style = {this.techBox}>
                <div style={{flex: 1}}>
                    <img src={icon} width={17} width={17}/>
                </div>
                <span style={this.title}> {title} </span>
            </div>
        );
    }
}
