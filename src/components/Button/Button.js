import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class Button extends React.Component {
  render() {
    const {className} = this.props

    return <button className={className}>{this.props.children}</button>
  }
}

Button.propTypes = {}

Button.defaultProps = {}

const StyledButton = styled(Button)`
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: none;
  border: none;
  vertical-align: top;
  background: #035;
  color: ${props => props.theme.text.color};
  font-family: ${props => props.theme.text.fontFamily};
  font-size: ${props => props.theme.text.fontSize};
  margin: 0em ${props => props.theme.button.margin.horizontal}
    ${props => props.theme.button.margin.vertical} 0em;
  padding: ${props => props.theme.button.margin.vertical}
    ${props => props.theme.button.margin.horizontal}
    (
      ${props => props.theme.button.padding.vertical} +
        ${props => props.theme.button.shadow.offset}
    );
  font-style: normal;
  text-align: center;
  text-decoration: none;
  user-select: none;
  border-radius: 5px;
`

export default StyledButton
