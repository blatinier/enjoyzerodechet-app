import React from 'react';
import { Input } from 'native-base';
import PropTypes from 'prop-types';

const InputCustom = ({ input: { onChange }, refField, ...restInput }) => (
    <Input onChangeText={onChange} ref={refField} {...restInput} />
);

InputCustom.propTypes = {
    input: PropTypes.shape({
        onChange: PropTypes.func,
    }),
    refField: PropTypes.func,
    restInput: PropTypes.shape({}),
};

export default InputCustom;
