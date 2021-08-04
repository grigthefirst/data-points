import styles from "./CustomDataPoint.module.css"
import React, { FormEvent, useState } from "react";

type CustomDataPointFormProps = {
    onSubmit: (value: string) => void,
    validate: (value: string) => [],
}
const CustomDataPointForm = (props: CustomDataPointFormProps) => {
    const [value, setValue] = useState<string>();
    const [errors, setErrors] = useState<string[]>([]);
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!value) {
            setErrors(["Value shouldn't be empty"]);
            return;
        }

        const errors = props.validate(value);
        if (errors.length > 0) {
            setErrors(errors);
            return;
        }

        props.onSubmit(value);
    }
    return (<div className={styles.container}>
        {errors.length > 0 && <ul className={styles.errors}>
            {errors.map((error, index) => <li key={index}>{error}</li>)}
        </ul>}
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>Enter custom value:
                <input type='text' value={value}
                       onChange={(event) => setValue(event.target.value)}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    </div>);
}
export default CustomDataPointForm;