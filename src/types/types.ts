export type NodeTypes = 'reader' | 'retriever';

export type Reader = {
    id: string;
    label: string;
    model: string;
    nodeType: 'reader';
}

export type Retriever = {
    id: string;
    label: string;
    type: string;
    nodeType: 'retriever';
}