import { Validation } from "../api/dataSetApi";

const validators = {
    'NUMBER': (_?: string) => (value: string) => !isNaN(+value),
    'MAX_VALUE': (parameter?: string) => (value: string) => {
        const number = Number(value);
        return !isNaN(number) && number <= Number(parameter)
    },
    'MIN_VALUE': (parameter?: string) => (value: string) => {
        const number = Number(value);
        return !isNaN(number) && number >= Number(parameter)
    },
    'REGEX': (parameter?: string) => (value: string) => {
        return parameter && new RegExp(parameter).test(value)
    },
}

const createValidate = (validations: Validation[]) => {
    return validations.reduce(
        (validator, validation) => (value: string) => validator(value) && validators[validation.type](validation.parameter)(value),
        (_: string) => true
    )
}