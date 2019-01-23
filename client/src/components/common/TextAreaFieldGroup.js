import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const TextAreaFieldGroup = ({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    onChange,
    disabled
}) => {
    return (
        <div className="form-group">
            <input  className={classnames('form-control form-control-lg',{'is-invalid': error})}  placeholder={placeholder}  value={value} onChange={onChange} name={name} disabled={disabled} />
            {error && (<div className="invalid-feedback">{error}</div>)}</div>
    )
};

TextFieldGroup.prototype = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string
}



export default TextFieldGroup;