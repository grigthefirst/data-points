import React, { useState } from "react";
import { Reader } from "../../types/types";

type ReaderEditFormProps = {
    model: Reader,
    handleSubmit: (reader: Reader) => void
}
const ReaderEditForm = (props: ReaderEditFormProps) => {
    const [reader, setReader] = useState(props.model);

    return (
        <form onSubmit={(event) => {
            props.handleSubmit(reader);
            event.preventDefault();
        }}>
            <label>
            Reader label: <input type="text" value={reader.label}
            onChange={(event) =>
            setReader({...reader, label: event.target.value})}/>
            </label>
            <label>
            Reader model:
            <select value={reader.model} onChange={(event) =>
                setReader({...reader, model: event.target.value})}>
            <option value="deepset/roberta-base-squad2">deepset/roberta-base-squad2</option>
            <option value="deepset/bert-base-squad2">deepset/bert-base-squad2</option>
            </select>
            </label>
            <input type="submit" value="Submit"/>
            </form>
            );
        }

    export default ReaderEditForm;