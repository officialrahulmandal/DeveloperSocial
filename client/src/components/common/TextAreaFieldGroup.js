import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const TextAreaFieldGroup = ({
    name,
    placeholder,
    value,
    error,
    info,
    onChange,
}) => {
    return (
        <div className="form-group">
            <textarea  className={classnames('form-control form-control-lg',{'is-invalid': error})}  placeholder={placeholder}  value={value} onChange={onChange} name={name}  />
            {error && (<div className="invalid-feedback">{error}</div>)}</div>
    )
};

TextAreaFieldGroup.prototype = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}



export default TextAreaFieldGroup;