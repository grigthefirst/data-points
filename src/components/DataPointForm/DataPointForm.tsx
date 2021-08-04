import { useEffect, useState } from "react";
import { DataSetDetails, getDataSetDetails } from "../../api/dataSetApi";
import styles from "./DataPointForm.module.css"
import { getNamedDataPoints, NamedDataPoint } from "../../api/dataPointApi";
import CustomDataPointForm from "../CustomDataPointForm/CustomDataPointForm";


const DataPointForm = () => {
    //TODO useParameters
    const dataSetId = 'first_id';

    const [dataSetDetails, setDataSetDetails] = useState<DataSetDetails | null>();
    const [namedDataPoints, setNamedDataPoints] = useState<NamedDataPoint[]>([]);

    const

    useEffect(() => {
        const dataSetDetails = getDataSetDetails(dataSetId);
        setDataSetDetails(dataSetDetails);
        const namedDataPoints = getNamedDataPoints(dataSetId);
        setNamedDataPoints(namedDataPoints);

    }, [dataSetId]);
    //TODO add router logic
    //TODO add loading and error state (react query?)
    return (<div className={styles.container}>
        {dataSetDetails?.description && <p>{dataSetDetails?.description}</p>}
        {namedDataPoints.length > 0 && <form></form>}
        {namedDataPoints.length > 0 && dataSetDetails?.allowCustomValue && <CustomDataPointForm onSubmit={} validate={} />}
        {dataSets.map(dataSet => (
            <div key={dataSet.id} className={styles.item}>
            {dataSet.name} {dataSet.isDefault ?? '(default)'}
        </div>))}
    </div>);
}
export default DataSetList;