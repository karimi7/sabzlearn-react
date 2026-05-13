import rules from './rules';

const validator = (value, validations) => {
    console.log(rules);

    console.log('Validator => ', value, validations);

    let validationsResauls = [];

    for (const validator of validations) {
        if (validator.value == rules.requiredValue) {
            value.trim().length == 0 && validationsResauls.push(false);
        }
        if (validator.value == rules.minValue) {
            value.trim().length < validator.min &&
                validationsResauls.push(false);
        }
        if (validator.value == rules.maxValue) {
            value.trim().length > validator.max &&
                validationsResauls.push(false);
        }
        if (validator.value == rules.emailValue) {
            !value.trim().includes('@') && validationsResauls.push(false);
        }
    }

    console.log(validationsResauls);

    if (validationsResauls.length) {
        return false;
    } else {
        return true;
    }
};

export default validator;
