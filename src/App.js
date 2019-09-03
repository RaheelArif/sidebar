import React, {Component} from 'react';
import './App.css';
import Tree from "./sortableTree/sortableTree";
import SideBar from "./sideBar/sideBar";
import Header from "./header/header";
import {DragDropContext} from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend';
import FixedPlugin from "./FixedPlugin/FixedPlugin";
import pallet from "./icons/palette.png";

const container = {
    display: 'flex',
    background: '#f4f5fa',
    height: 660,
};

const treeContainer = {
    flex: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

};

const leftSidebar = {
    flex: 1,
    display: 'flex',
};

const rightSidebar = {
    flex: 1,
    display: 'flex',
};
const colorPicker = {
    height: 10,
   display: 'flex',
    alignItems: 'center',
    marginTop:15,
    width: '90%',
    justifyContent: 'space-between',
};

const header = {
    height: 200,
    width: '100%',
};

const tree = {
    width: '95%',
    marginRight: 45,
};
const popup = {
    zIndex: 1100,
    background: 'white',
    width: '50%',
    position: 'absolute',
    left: '25%',
    top: 270,
    borderRadius: 10,
    height: 200,
};
class App extends Component{
    state = {
        filter: true,
        filterColor: 'white',
    };
    handleColorClick = color => {
        this.setState({  background: color});

    };

    togglePallet = ()=>{
        let {filter} = this.state;
        this.setState({filter : !filter});
    }
    render() {
        let {filter} = this.state;
        return (
            <div className="App" >
                <div style={container}>

                    <div style ={leftSidebar}>
                        <SideBar filterColor={this.state.background}/>
                    </div>
                    <div style={treeContainer}>
                        <img style={{
                            marginRight: '90%',
                            marginTop: 10,
                        }}
                             src = {pallet} height={30} width={50} onClick={this.togglePallet}/>
                        <div hidden={filter}
                             style={{
                                 marginRight: '92%',
                             }}>
                            <FixedPlugin
                                bgColor={this.state.filterColor}
                                handleColorClick={this.handleColorClick}
                            />
                        </div>
                        <div style={header}>
                            <Header/>
                        </div>
                        <div style={tree}>
                            <Tree filterColor/>
                        </div>
                    </div>
                    <div style ={rightSidebar}>
                        <SideBar filterColor={this.state.background} right/>
                    </div>
                </div>
            </div>
        );
    }


}

export default   DragDropContext(HTML5Backend)(App);
