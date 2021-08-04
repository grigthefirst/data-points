export type NamedDataPoint = {
    name: string,
    value: string,
    color: string,
}

export type DataPoint = {
    value: string,
    location?: {
        x: number,
        y: number,
    }
}

const getNamedDataPoints = (dataSetId: string): NamedDataPoint[] => {
    return [
        { name: 'Bad', value: '0', color: 'red' },
        { name: 'Normal', value: '1', color: 'blue' },
        { name: 'Great', value: '2', color: 'green' },
    ];
};

const submitDataPoint = (dataSetId: string, point: DataPoint) => {
    console.log('Point submitted', point);
}

export { getNamedDataPoints, submitDataPoint }