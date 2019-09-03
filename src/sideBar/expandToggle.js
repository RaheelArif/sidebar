import React from 'react';
import expandToggle from '../icons/expandToggle.png';

export default class ExpandToggle extends React.Component {


    render() {
        return (
            <div style={{marginTop: 15}}>
                <img src={expandToggle}/>
            </div>
        );
    }
}
