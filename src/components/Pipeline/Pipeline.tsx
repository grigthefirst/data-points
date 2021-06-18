import React, { MouseEvent as ReactMouseEvent, useState } from 'react';
import ReactFlow, { addEdge, removeElements, updateEdge } from 'react-flow-renderer';
import styles from './Pipeline.module.css'
import { Connection, Edge, Elements, Node } from "react-flow-renderer/dist/types";
import { Popup } from 'reactjs-popup';
import { v4 as uuidv4 } from 'uuid';
import { NodeTypes, Reader, Retriever } from "../../types/types";
import ReaderEditForm from "../ReaderEditForm/ReaderEditForm";
import RetrieverEditForm from "../RetrieverEditForm/RetrieverEditForm";

const initialElements: Elements<Reader | Retriever> = [
    {
        id: '1',
        data: {id: '1', label: 'Reader', model: 'deepset/roberta-base-squad2', nodeType: 'reader'},
        position: {x: 250, y: 5}
    },
    {
        id: '2',
        data: {id: '2', label: 'Receiver', type: 'DensePassageRetriever', nodeType: 'retriever'},
        position: {x: 100, y: 100}
    },
];

const Pipeline = () => {
    const [elements, setElements] = useState(initialElements);
    const [editModel, setEditModel] = useState<Retriever | Reader | null>(null);

    const onEdgeUpdate = (oldEdge: Edge, newConnection: Connection) =>
        setElements((elements) => updateEdge(oldEdge, newConnection, elements));

    const onConnect = (params: Edge | Connection) =>
        setElements((els) => addEdge(params, els));

    const onElementsRemove = (elementsToRemove: Elements) =>
        setElements((els) => removeElements(elementsToRemove, els));

    const onElementClick = (event: ReactMouseEvent, element: Node | Edge) => {
        if (element.data !== null) {
            setEditModel(element.data);
        }
    }

    const closeModal = () => {
        setEditModel(null);
    }

    const handleEditFromSubmit = (model: Reader | Retriever) => {
        const index = elements.findIndex(e => e.data?.id === model.id);
        if (index < 0) {
            setElements([...elements, {id: model.id, data: model, position: {x: 10, y: 10}}]);
        } else {
            setElements([...elements.slice(0, index), {...elements[index], data: model}, ...elements.slice(index + 1)]);
        }
        closeModal();
    }

    const handleCreate = (nodeType: NodeTypes) => {
        if (nodeType === 'reader') {
            setEditModel({
                label: 'New reader',
                nodeType: nodeType,
                model: 'deepset/roberta-base-squad2',
                id: uuidv4()
            });
        } else if (nodeType === 'retriever') {
            setEditModel({
                label: 'New retriever',
                nodeType: nodeType,
                type: 'DensePassageRetriever',
                id: uuidv4()
            });
        }
    }
    return (
        <>
            <div className={styles.container}>
                <ReactFlow
                    elements={elements}
                    onEdgeUpdate={onEdgeUpdate}
                    onConnect={onConnect}
                    onElementsRemove={onElementsRemove}
                    onElementClick={onElementClick}
                />
            </div>
            <button className={styles.createButton} onClick={() => handleCreate('reader')}>Create reader</button>
            <button className={styles.createButton} onClick={() => handleCreate('retriever')}>Create retriever</button>
            <Popup open={editModel !== null} closeOnDocumentClick onClose={closeModal}>
                <div className={styles.modal}>
                    <button className={styles.close} onClick={closeModal}>
                        &times;
                    </button>
                    {editModel?.nodeType === 'reader' && (
                        <ReaderEditForm model={editModel} handleSubmit={handleEditFromSubmit}/>)}
                    {editModel?.nodeType === 'retriever' && (
                        <RetrieverEditForm model={editModel} handleSubmit={handleEditFromSubmit}/>)}
                </div>
            </Popup>
        </>
    );
};
export default Pipeline;