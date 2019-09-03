import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import clock from '../icons/clock.png';
import plus from '../icons/plus.png';
import category from '../icons/category.png';
import item from '../icons/items.png';
import ingredients from '../icons/ingredients.png';
import modiefiers from '../icons/cog.png';
import group from '../icons/group.jpg';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ExternalNodeBaseComponent from "./draggableItem";
import Row from "../row/row";
import ExpandToggle from "./expandToggle";
import Radium from "radium";
import * as nanoid from "nanoid";

class SideBar extends React.Component {
    state = {
        expanded: false,
        open: false,
        itemHovered: [false, false,false,false,false],
    };

    hoverItem = (i) => {
        let {itemHovered} = this.state;
        itemHovered[i] = true;
        this.setState({itemHovered});
    };

    cancelHover = (i) => {
        let {itemHovered} = this.state;
        itemHovered[i] = false;
        this.setState({itemHovered});
    };

     title = {
        flex: 20,
        fontSize:12,
        color: '#7e87a1',
        fontFamily: 'Myriad Pro',
        display: 'flex',
        alignItems: 'center',
        border: 'none',
    };
     right =  this.props.right && {
        right: 0,
        left: 'unset',
         float: 'right',
         marginRight: 10,
    };
    navItem = {
        margin: '15px 0',
    };

    render() {
        const {expanded, open, itemHovered, itemHovered1} = this.state;
        const {filterColor} = this.props;

        let navItemHover =  {
            borderLeft: '4px ' + filterColor+ ' solid',

        };
        return (
            <SideNav
                style={ { background:'white',...this.right}}
                expanded={expanded || open}
                onMouseEnter={()=> this.setState({open: true})}
                onMouseLeave={()=> this.setState({open: false})}

            >
                <div onClick={()=> this.setState((prev)=>{ return {expanded: !prev.expanded}})} style={{float: 'left', marginLeft: 10, ...this.right}}>
                    <SideNav.Toggle componentClass={ExpandToggle} />
                </div>
                <SideNav.Nav  >
                    <NavItem eventKey="cat" style={{...this.navItem, ...(itemHovered[0] && navItemHover)}}
                             onMouseEnter={()=> this.hoverItem(0)}
                             onMouseLeave={()=> this.cancelHover(0)}
                    >

                        <NavIcon >
                            <ExternalNodeBaseComponent
                                icon = {category}
                                hovered={itemHovered[0]}
                                filterColor={this.props.filterColor}
                                node={{ title: <Row
                                    title={ <input
                                        style={this.title}
                                        placeholder="Category"/> } icon={category}/>, type:'Category', name:'Category', id:'id' + nanoid() }} />
                        </NavIcon>
                        <NavText style={{color: 'black'}}>
                            <ExternalNodeBaseComponent
                                text = "Category"
                                node={{ title: <Row
                                    title={ <input
                                        style={this.title}
                                        placeholder="Category"/> } icon={category}/>,type:'Category', name:'Category', id: 'id' + nanoid()  }} />
                        </NavText>
                        <NavItem eventKey="home" style={{...this.navItem, ...(itemHovered[0] && navItemHover)}}
                                 onMouseEnter={()=> this.hoverItem(0)}
                                 onMouseLeave={()=> this.cancelHover(0)}
                        >
                            <NavText style={{color: 'black'}}>
                                <ExternalNodeBaseComponent
                                    text = "Favorite meals"
                                    node={{ title: <Row
                                            title={ <input
                                                style={this.title}
                                                placeholder="Favorite meals"/> } icon={category}/>,type:'Category', name:'Favorite meals',id:'id' + nanoid()  }} />
                            </NavText>

                        </NavItem>
                        <NavItem eventKey="home" style={{...this.navItem, ...(itemHovered[0] && navItemHover)}}
                                 onMouseEnter={()=> this.hoverItem(0)}
                                 onMouseLeave={()=> this.cancelHover(0)}
                        >
                            <NavText style={{color: 'black'}}>
                                <ExternalNodeBaseComponent
                                    text = "Desserts"
                                    node={{ title: <Row
                                            title={ <input
                                                style={this.title}
                                                placeholder="Desserts"/> } icon={category}/>,type:'Category', name:'Desserts', id:'id' + nanoid()  }} />
                            </NavText>

                        </NavItem>
                        <NavItem eventKey="home" style={{...this.navItem, ...(itemHovered[0] && navItemHover)}}
                                 onMouseEnter={()=> this.hoverItem(0)}
                                 onMouseLeave={()=> this.cancelHover(0)}
                        >
                            <NavText style={{color: 'black'}}>
                                <ExternalNodeBaseComponent
                                    text = "Beverages"
                                    node={{ title: <Row
                                            title={ <input
                                                style={this.title}
                                                placeholder="Beverages"/> } icon={category}/>,type:'Category', name:'Beverages',id:'id' + nanoid()   }} />
                            </NavText>
                    </NavItem>
                    </NavItem>
                    <NavItem
                        eventKey="item"
                             style={{...this.navItem, ...(itemHovered[1] && navItemHover)}}
                             onMouseEnter={()=> this.hoverItem(1)}
                             onMouseLeave={()=> this.cancelHover(1)}
                    >
                        <NavIcon>
                            <ExternalNodeBaseComponent
                                icon = {item}
                                hovered={itemHovered[1]}
                                filterColor={this.props.filterColor}
                                node={{ title: <Row
                                    title={ <input
                                        style={this.title}
                                        placeholder="Item"/> } icon={item}/>,type:'Item' ,name:'Item', id:'id' + nanoid()   }} />
                        </NavIcon>
                        <NavText style={{color: 'black'}}>
                            <ExternalNodeBaseComponent text = "Item" node={{ title: <Row
                                    title={ <input
                                        style={this.title}
                                        placeholder="Item"/> } icon={item}/>,type:'Item',name:'Item', id:'id' + nanoid()   }} />
                        </NavText>
                        <NavItem style={{...this.navItem, ...(itemHovered[1] && navItemHover)}}
                                 onMouseEnter={()=> this.hoverItem(1)}
                                 onMouseLeave={()=> this.cancelHover(1)}
                        >
                            <NavText style={{color: 'black'}}>
                                <ExternalNodeBaseComponent
                                    text = "sandwich"
                                    node={{ title: <Row
                                            title={ <input
                                                style={this.title}
                                                placeholder="sandwich"/> } icon={item}/>,type:'Item', name:'sandwich',id:'id' + nanoid()  }} />
                            </NavText>

                        </NavItem>
                        <NavItem style={{...this.navItem, ...(itemHovered[1] && navItemHover)}}
                                 onMouseEnter={()=> this.hoverItem(1)}
                                 onMouseLeave={()=> this.cancelHover(1)}
                        >
                            <NavText style={{color: 'black'}}>
                                <ExternalNodeBaseComponent
                                    text = "cocacola"
                                    node={{ title: <Row
                                            title={ <input
                                                style={this.title}
                                                placeholder="cocacola"/> } icon={item}/>,type:'Item', name:'cocacola',id:'id' + nanoid()  }} />
                            </NavText>

                        </NavItem>
                        <NavItem style={{...this.navItem, ...(itemHovered[1] && navItemHover)}}
                                 onMouseEnter={()=> this.hoverItem(1)}
                                 onMouseLeave={()=> this.cancelHover(1)}
                        >
                            <NavText style={{color: 'black'}}>
                                <ExternalNodeBaseComponent
                                    text = "cookies"
                                    node={{ title: <Row
                                            title={ <input
                                                style={this.title}
                                                placeholder="cookies"/> } icon={item}/>,type:'Item', name:'cookies',id:'id' + nanoid()  }} />
                            </NavText>

                        </NavItem>
                    </NavItem>
                    <NavItem
                        eventKey="ing"
                             style={{...this.navItem, ...(itemHovered[2] && navItemHover)}}
                             onMouseEnter={()=> this.hoverItem(2)}
                             onMouseLeave={()=> this.cancelHover(2)}>
                        <NavIcon>
                            <ExternalNodeBaseComponent
                                icon = {ingredients}
                                hovered={itemHovered[2]}
                                filterColor={this.props.filterColor}
                                node={{ title: <Row
                                    title={ <input
                                        style={this.title}
                                        placeholder="Ingredient"/> } icon={ingredients}/>,type:'Ingredient',name:'Ingredient',id:'id' + nanoid()   }} />
                        </NavIcon>
                        <NavText style={{color: 'black'}}>
                            <ExternalNodeBaseComponent text = "Ingredients" node={{ title: <Row
                                    title={ <input
                                        style={this.title}
                                        placeholder="Ingredient"/> } icon={ingredients}/>,type:'Ingredient',name:'Ingredient',id:'id' + nanoid()     }} />
                        </NavText>
                        <NavItem
                            style={{...this.navItem, ...(itemHovered[2] && navItemHover)}}
                            onMouseEnter={()=> this.hoverItem(2)}
                            onMouseLeave={()=> this.cancelHover(2)}>
                            <NavText style={{color: 'black'}}>
                                <ExternalNodeBaseComponent text = "onion" node={{ title: <Row
                                        title={ <input
                                            style={this.title}
                                            placeholder="onion"/> } icon={ingredients}/>,type:'Ingredient',name:'onion',id:'id' + nanoid()     }} />
                            </NavText>

                        </NavItem>
                        <NavItem
                            style={{...this.navItem, ...(itemHovered[2] && navItemHover)}}
                            onMouseEnter={()=> this.hoverItem(2)}
                            onMouseLeave={()=> this.cancelHover(2)}>
                            <NavText style={{color: 'black'}}>
                                <ExternalNodeBaseComponent text = "cheese" node={{ title: <Row
                                        title={ <input
                                            style={this.title}
                                            placeholder="cheese"/> } icon={ingredients}/>,type:'Ingredient',name:'cheese',id:'id' + nanoid()     }} />
                            </NavText>

                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="mod"
                             style={{...this.navItem, ...(itemHovered[3] && navItemHover)}}
                             onMouseEnter={()=> this.hoverItem(3)}
                             onMouseLeave={()=> this.cancelHover(3)}>
                        <NavIcon>
                            <ExternalNodeBaseComponent
                                icon = {modiefiers}
                                hovered={itemHovered[3]}
                                filterColor={this.props.filterColor}
                                node={{ title: <Row
                                    title={ <input
                                        style={this.title}
                                        placeholder="Modifier"/> } icon={modiefiers}/>,type:'Modifier',name:'Modifier',id:'id' + nanoid()     }} />
                        </NavIcon>
                        <NavText style={{color: 'black'}}>
                            <ExternalNodeBaseComponent text = "Modifier" node={{ title: <Row
                                    title={ <input
                                        style={this.title}
                                        placeholder="Modifier"/> } icon={modiefiers}/>,type:'Modifier',name:'Modifier',id:'id' + nanoid()    }} />
                        </NavText>
                        <NavItem
                                 style={{...this.navItem, ...(itemHovered[3] && navItemHover)}}
                                 onMouseEnter={()=> this.hoverItem(3)}
                                 onMouseLeave={()=> this.cancelHover(3)}>
                            <NavText style={{color: 'black'}}>
                                <ExternalNodeBaseComponent text = "double up" node={{ title: <Row
                                        title={ <input
                                            style={this.title}
                                            placeholder="double up"/> } icon={modiefiers}/>,type:'Modifier',name:'double up',id:'id' + nanoid()    }} />
                            </NavText>
                        </NavItem>
                        <NavItem
                            style={{...this.navItem, ...(itemHovered[3] && navItemHover)}}
                            onMouseEnter={()=> this.hoverItem(3)}
                            onMouseLeave={()=> this.cancelHover(3)}>
                            <NavText style={{color: 'black'}}>
                                <ExternalNodeBaseComponent text = "upsize" node={{ title: <Row
                                        title={ <input
                                            style={this.title}
                                            placeholder="upsize"/> } icon={modiefiers}/>,type:'Modifier',name:'upsize',id:'id' + nanoid()    }} />
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="grp"
                             style={{...this.navItem, ...(itemHovered[4] && navItemHover)}}
                             onMouseEnter={()=> this.hoverItem(4)}
                             onMouseLeave={()=> this.cancelHover(4)}>
                        <NavIcon>
                            <ExternalNodeBaseComponent
                                icon = {group}
                                hovered={itemHovered[4]}
                                filterColor={this.props.filterColor}
                                node={{ title: <Row
                                    title={ <input
                                        style={this.title}
                                        placeholder="Group"/> } icon={group}/>,type:'Group',name:'Group',id:'id' + nanoid()  }} />
                        </NavIcon>
                        <NavText style={{color: 'black'}}>
                            <ExternalNodeBaseComponent text = "Group" node={{ title: <Row
                                    title={ <input
                                        style={this.title}
                                        placeholder="Group"/> } icon={group}/>,type:'Group',name:'Group', id:'id' + nanoid()    }} />
                        </NavText>
                        <NavItem
                                 style={{...this.navItem, ...(itemHovered[4] && navItemHover)}}
                                 onMouseEnter={()=> this.hoverItem(4)}
                                 onMouseLeave={()=> this.cancelHover(4)}>
                            <NavText style={{color: 'black'}}>
                                <ExternalNodeBaseComponent text = "Group 1" node={{ title: <Row
                                        title={ <input
                                            style={this.title}
                                            placeholder="Group 1"/> } icon={group}/>,type:'Group',name:'Group 1', id:'id' + nanoid()    }} />
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        );
    }
}

export  default  Radium(SideBar);
