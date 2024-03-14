import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'
import classNames from 'classnames'

const Button = ({type,children})=><button className={classNames("button",{
[`type-${type}`]:type
})}
>
    {children}
</button>

Button.prototype={
    children:PropTypes.node.isRequired,
    type:PropTypes.oneOf(['primary','secondary'])
};

Button.defaultProps ={
    type:'primary'
}
export default Button;