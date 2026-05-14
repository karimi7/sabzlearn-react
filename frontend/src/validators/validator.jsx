import rules from './rules';
import regex from './regex';

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
            !regex.testEmail(value) && validationsResauls.push(false);
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
