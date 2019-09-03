
// In your own app, you would need to use import styles once in the app
// import 'react-sortable-tree/styles.css';

// -------------------------
// Create an drag source component that can be dragged into the tree
// https://react-dnd.github.io/react-dnd/docs-drag-source.html
// -------------------------
// This type must be assigned to the tree via the `dndType` prop as well
import {DragSource} from "react-dnd";
import React, {Component} from "react";
import clock from "../icons/clock.png";
import Radium from "radium";

const externalNodeType = 'yourNodeType';
const externalNodeSpec = {
    // This needs to return an object with a property `node` in it.
    // Object rest spread is recommended to avoid side effects of
    // referencing the same object in different trees.
    beginDrag: componentProps => ({ node: { ...componentProps.node } }),
};
const externalNodeCollect = (connect /* , monitor */) => ({
    connectDragSource: connect.dragSource(),
    // Add props via react-dnd APIs to enable more visual
    // customization of your component
    // isDragging: monitor.isDragging(),
    // didDrop: monitor.didDrop(),
});

class ExternalNodeBaseComponent extends Component {

    render() {
        const { connectDragSource, icon , text,hovered, filterColor} = this.props;
        let imgColor = hovered && {
            webkitFilter: 'opacity(.5) drop-shadow(0 0 0 '+filterColor+')',
            filter: 'opacity(.5) drop-shadow(0 0 0 '+filterColor+')'
        };
         if(icon)
         return connectDragSource(
            <img style = {{...imgColor}} src={icon} height={18} width={18}/>,
            { dropEffect: 'copy' }
        );
         else
             return connectDragSource(
                 <span style={{color: 'black',}}>{text}</span>,
                 { dropEffect: 'copy' }
             );
    }
}
export default DragSource(
    externalNodeType,
    externalNodeSpec,
    externalNodeCollect
)(Radium(ExternalNodeBaseComponent));
