import React, { Component } from 'react';
export default class Row extends Component {


    toggle = () => {
        let { open } = this.state;
        this.setState({ open: !open,})
    };


    render() {
        const {icon, title,id } = this.props;

        return (
            <div>
                <div id={id} style = {{display:'flex'}}>
                    <div style={{flex: 1}}>
                        <img src={icon} width={20} width={20}/>
                    </div>
                     {title}
                </div>
            </div>
        );
    }
}
