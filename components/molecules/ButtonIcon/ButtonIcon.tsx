import React from 'react'
import Button from '../../atoms/Button'
import PropTypes from 'prop-types'
import Icon from '../../atoms/icon'

const ButtonIcon = ({children, type, icon}) =>(
    <Button type={type}>
        {children}
        <Icon type={icon}/>
    </Button>
);

ButtonIcon.PropTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['primary','secondary','tertiary']),
    icon: PropTypes.string.isRequired,
}

ButtonIcon.defaultProps = {
    type:'secondary',
};
export default ButtonIcon