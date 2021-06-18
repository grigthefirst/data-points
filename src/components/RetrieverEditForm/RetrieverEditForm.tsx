import React, { useState } from "react";
import { Retriever } from "../../types/types";

type RetrieverEditFormProps = {
    model: Retriever,
    handleSubmit: (reader: Retriever) => void
}
const RetrieverEditForm = (props: RetrieverEditFormProps) => {
    const [retriever, setRetriever] = useState(props.model);

    return (
        <form onSubmit={(event) => {
            props.handleSubmit(retriever);
            event.preventDefault();
        }}>
            <label>
                Reader label: <input type="text" value={retriever.label}
                                     onChange={(event) =>
                                         setRetriever({...retriever, label: event.target.value})}/>
            </label>
            <label>
                Reader model:
                <select value={retriever.type} onChange={(event) =>
                    setRetriever({...retriever, type: event.target.value})}>
                    <option value="DensePassageRetriever">DensePassageRetriever</option>
                    <option value="ElasticsearchRetriever">ElasticsearchRetriever</option>
                </select>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default RetrieverEditForm;