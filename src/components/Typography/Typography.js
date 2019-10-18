import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class Typography extends React.Component {
  render() {
    const {className, variant} = this.props
    console.log(variant)
    if (variant === 'heading') {
      return <h3 className={className}>{this.props.children}</h3>
    } else {
      return <p className={className}>{this.props.children}</p>
    }
  }
}

Typography.propTypes = {}

Typography.defaultProps = {}

const StyledTypography = styled(Typography)`
  font-family: ${props => props.theme.text.fontFamily};
  font-size: ${props => props.theme.text.fontSize};
  font-style: normal;
  text-align: center;
`

export default StyledTypography
