export type DataSet = {
    id: string,
    name: string,
    isDefault: boolean,
}
const getDataSets = (): DataSet[] => {
    return [
        {id: 'first_id', name: 'First dataset', isDefault: false},
        {id: 'second_id', name: 'Second dataset', isDefault: false},
        {id: 'third_id', name: 'Third dataset', isDefault: true},
    ];
}

export type Validation = {
    type: 'NUMBER' | 'MAX_VALUE' | 'MIN_VALUE' | 'REGEX',
    parameter?: string
}

export type DataSetDetails = DataSet & {
    allowCustomValue: boolean,
    trackLocation: boolean,
    description?: string,
    validations: Validation[],
}

const getDataSetDetails = (dataSetId: string): DataSetDetails => {
    return {
        id: 'first_id',
        name: 'First dataset',
        isDefault: false,
        allowCustomValue: true,
        trackLocation: true,
        description: 'How are you?',
        validations: [{type: "NUMBER"}, {type: "MIN_VALUE", parameter: '0'}, {type: "MAX_VALUE", parameter: '100'}]
    }
}
export { getDataSets, getDataSetDetails }