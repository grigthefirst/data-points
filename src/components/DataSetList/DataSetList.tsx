import { useEffect, useState } from "react";
import { DataSet, getDataSets } from "../../api/dataSetApi";
import styles from "./DataSetList.module.css"


const DataSetList = () => {
    const [dataSets, setDataSets] = useState<DataSet[]>([]);
    useEffect(() => {
        const dataSets = getDataSets();
        setDataSets(dataSets);
    }, []);
    //TODO add router logic
    //TODO add loading and error state (react query?)
    return (<div className={styles.container}>
        {dataSets.map(dataSet => (
            <div key={dataSet.id} className={styles.item}>
            {dataSet.name} {dataSet.isDefault ?? '(default)'}
        </div>))}
    </div>);
}
export default DataSetList;