import React, { Component } from 'react';
import searchiIcon from '../icons/searchIcon.png';
import settings from '../icons/settings.png';
import notfications from '../icons/notfications.png';
import profil from '../icons/profil.png';
import TechBox from "../techBox/techBox";
import folderIcon from '../icons/folder icon.ico';
export default class Header extends Component {
    searchBar = {
        background: 'white',
        margin: '40px 50px 20px 50px',
        height: 80,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        ':hover':{
            background: 'red',
        },
        flex:2,
    };
    input = {
        height : '90%',
        border: 'none',
        fontFamily: 'Myriad Pro',
        fontSize: 24,
        flex:20,
    };
    search = {
        flex : 1,
    };
    notifications = {
        flex : 1,
    };
    settings = {
        flex : 1,
    };
    profil = {
        flex : 1,
    };
    focusedInput = {
        border: 'none',
    };
    container= {
        display: 'flex',
        flexDirection: 'column',
    };
    boxes={
        flex: 1,
        display: 'flex',
        margin: '0px 50px 20px 50px'
    };

    render() {
        return (
            <div style={this.container}>
               <div style={this.searchBar}>
                   <img src={searchiIcon} style={this.search} />
                   <input placeholder='Search' type='text' style={this.input}/>
                   <div style={this.notifications}>
                        <img src={notfications} height = {20} width={15}/>
                   </div>
                   <div style={this.settings}>
                        <img src={settings} height = {20} width={20}/>
                   </div>
                   <div style={this.profil}>
                       <img src={profil} height = {20} width={20}/>
                   </div>
               </div>
                <div style={this.boxes}>
                    <TechBox  icon={folderIcon} title='Angular'/>
                    <TechBox  icon={folderIcon} title='Vue js'/>
                    <TechBox  icon={folderIcon} title='React js'/>
                    <TechBox  icon={folderIcon} title='Laravel'/>
                    <TechBox  icon={folderIcon} title='Drupal'/>
                </div>
            </div>
        );
    }
}
