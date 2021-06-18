import React, { useState } from 'react';
import ReactFlow, { addEdge, FlowElement, removeElements, updateEdge } from 'react-flow-renderer';
import styles from './Pipeline.module.css'
import { Connection, Edge, Elements } from "react-flow-renderer/dist/types";

type QAElement = {
    label: string;
}

const initialElements: Elements<QAElement> = [
    {id: '1', data: {label: 'Reader'}, position: {x: 250, y: 5}},
    {id: '2', data: {label: 'Receiver'}, position: {x: 100, y: 100}},
];

const Pipeline = () => {
    const [elements, setElements] = useState(initialElements);
    const onEdgeUpdate = (oldEdge: Edge, newConnection: Connection) =>
        setElements((elements) => updateEdge(oldEdge, newConnection, elements));

    const onConnect = (params: Edge | Connection) =>
        setElements((els) => addEdge(params, els));

    const onElementsRemove = (elementsToRemove: Elements) =>
        setElements((els) => removeElements(elementsToRemove, els));

    return (<div className={styles.container}>
        <ReactFlow
            elements={elements}
            onEdgeUpdate={onEdgeUpdate}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
        />
    </div>);
};
export default Pipeline;