import React, { Component } from 'react'
import FileExplorerTheme from 'react-sortable-tree-theme-minimal';
import styles from './sortableStyle.scss';
import Category from '../icons/category.png';
import Row from "../row/row";
import {changeNodeAtPath, removeNodeAtPath, SortableTreeWithoutDndContext} from "react-sortable-tree";
import trash from "../icons/trash.png";
import edit from "../icons/edit.png";
import ModalBtn from "./modal";
import {} from "antd";
import "antd/dist/antd.css";
import {Modal} from "antd";
import {Input} from "antd";
import * as nanoid from "nanoid";

const title = {
    flex: 20,
    fontSize:12,
    color: '#7e87a1',
    fontFamily: 'Myriad Pro',
    display: 'flex',
    alignItems: 'center',
    border: 'none',
};


class Tree extends Component {
    constructor(props) {
        super(props);
        this.rowsExample =  [
            <Row title={ <input
                style={title}
                placeholder="Category"/>}
                 icon={Category}/>,
        ];


        this.state = {
            treeData: [{ title: this.rowsExample[0], type:'rootCategory' ,id:'id' + nanoid() , name: 'Category' },
            ],
            popup: false,
        };
    }
    editContainer = {
        flex: 1,
        cursor: 'pointer',
    };
    edit = {
        marginRight: 20,
        height: 15,
        width : 15,
        opacity: 0.5,
        cursor: 'pointer',
    };
    optionsContainer = {
        flex: 1,
    };
    options = {
        marginRight: 10,
        height: 15,
        width : 15,
        opacity:0.5,
        cursor: 'pointer',
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
    generateNodeProps = ({ node, path }) => {
        const buttons = [];
        const getNodeKey = ({ treeIndex }) => treeIndex;

        buttons.push(
                <ModalBtn
                    onEdit={(name) => {
                        this.setState(state => ({
                            treeData: changeNodeAtPath({
                                treeData: state.treeData,
                                path: path,
                                getNodeKey,
                                newNode: {
                                    ...node,
                                    name,
                                    title :  <input
                                        style={this.title}
                                        placeholder={name}/>,
                                }
                            })
                        }));
                        this.setState({popup: false})
                    }}
                    onCancel={()=> this.setState({popup: false})}
                    treeData={this.state.treeData}
                    visible={this.state.popup}
                    node={node}
                    render={show => (
                        <img src={edit}
                             onClick={()=> {
                                 this.setState({popup: true});
                                 show();
                             }}
                             style={this.edit} />
                    )}
                />

        );
        if (node.type !== "rootCategory") {
            buttons.push(
                <img
                    onClick={() => {
                        this.setState(state => ({
                            treeData: removeNodeAtPath({
                                treeData: state.treeData,
                                path,
                                getNodeKey,
                            })
                        }));
                    }}
                    src={trash} style={this.options}
                />
            );
        }

        return {
            style: {},
            buttons: buttons
        };
    };


    canDrop = ({ node, nextParent, prevPath, nextPath }) => {

        if (
            node.type === "Category" &&
            nextParent === null
        ) {
            return true;
        }
        if (
            node.type === "rootCategory" &&
            nextParent === null
        ) {
            return true;
        }
        if (
            node.type === "Item" &&
            nextParent &&
            (nextParent.type === "Category" || nextParent.type === "rootCategory")
        ) {
            return true;
        }

        if (
            node.type === "Ingredient" &&
            nextParent &&
            nextParent.type === "Item"
        ) {
            return true;
        }

        if (node.type === "Group" && nextParent && nextParent.type === "Item") {
            return true;
        }

        if (node.type === "Item" && nextParent && nextParent.type === "Group") {
            return true;
        }

        if (
            node.type === "Ingredient" &&
            nextParent &&
            nextParent.type === "Group"
        ) {
            return true;
        }

        if (
            node.type === "Modifier" &&
            nextParent &&
            nextParent.type === "Group"
        ) {
            return true;
        }

        if (
            node.type === "Modifier" &&
            nextParent &&
            nextParent.type === "Item"
        ) {
            return true;
        }
        if (
            node.type === "Item" &&
            nextParent &&
            nextParent.type === "Modifier"
        ) {
            return true;
        }

        return false;
    };

    render() {
        const mappedData = this.state.treeData
            .filter(data => data.type === "Category" || data.type === "rootCategory")
            .map(categ => {
                const { id, name, children, subtitle, type } = categ;

                function getChildren(children) {
                    return children
                        ? children.map(child => {
                            if (child.type === "Item" || child.type === "Group"|| child.type === "Ingredient" || child.type === "Modifier" ) {
                                const data = {
                                    id: child.id,
                                    name: child.name,
                                    type: child.type,
                                    children: getChildren(child.children),
                                    child_id: child.children
                                        ? child.children.map(child => child.id)
                                        : []
                                };
                                if (data.children.length === 0) delete data.children;
                                if (data.child_id.length === 0) delete data.child_id;

                                return data;
                            } else {
                                return {
                                    id: child.id,
                                    name: child.name,
                                    type: child.type
                                };
                            }
                        })
                        : [];
                }

                const data = {
                    id: id,
                    name: name,
                    type: type,
                    children: getChildren(children),
                    child_id: children ? children.map(child => child.id) : []
                };

                if (data.children.length === 0) delete data.children;
                if (data.child_id.length === 0) delete data.child_id;
                if(data.type === 'rootCategory'){
                    data.type = 'Category';
                }
                return data;
            });

        //  console.log(mappedData);
        //   console.log(this.state.treeData);
        /* */

        var request = new XMLHttpRequest();
        request.open("POST", "https://reqres.in/api/users", true);
        request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        request.send(JSON.stringify(mappedData, undefined, 4));

        return (
            <div style={{ height: 400 }}
            >
                <SortableTreeWithoutDndContext
                    treeData={this.state.treeData}
                    onChange={treeData => this.setState({ treeData })}
                    theme={FileExplorerTheme}
                    canDrop={this.canDrop}
                    generateNodeProps={this.generateNodeProps}
                    dndType='yourNodeType'
                />

            </div>
        );
    }
}

export default (Tree);
