import React from 'react'
import PropTypes from 'prop-types'

import './Heading.css'
import classNames from 'classnames';

const Heading = ({children,color,size})=><h1 className={classNames('heading',{
    [`color-${color}`]:color,
    [`size-${size}`]:size})}
    >
        {children}
    </h1>

Heading.prototype={
    children:PropTypes.node.isRequired,
    color:PropTypes.oneOf['primary'],
    size:PropTypes.oneOf(['xs','sm','md']),
};

Heading.defaultProps = {
    color: 'default',
    size:'md',
}

export default Heading;