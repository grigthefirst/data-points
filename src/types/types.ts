export type NodeTypes = 'reader' | 'retriever';

export type Reader = {
    id: string;
    label: string;
    model: string;
    connectedNodes: [{type: 'reader', id: '1231231'},123123]
    nodeType: 'reader';
}

export type Retriever = {
    id: string;
    label: string;
    type: string;
    nodeType: 'retriever';
}