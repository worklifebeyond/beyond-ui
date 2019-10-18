import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Button from './Button/Button'
import Typography from './Typography/Typography'
import {ThemeProvider} from 'styled-components'
import theme from '../theme/theme'

storiesOf('Button', module)
  .add('with text', () => (
    <ThemeProvider theme={theme}>
      <Button onClick={action('clicked')}>Hi Button</Button>
    </ThemeProvider>
  ))
  .add('with some emoji', () => (
    <ThemeProvider theme={theme}>
      <Button onClick={action('clicked')}>Very Cool 😎</Button>
    </ThemeProvider>
  ))

storiesOf('Typography', module).add('heading', () => (
  <ThemeProvider theme={theme}>
    <Typography variant="heading" onClick={action('clicked')}>
      Hi Typography
    </Typography>
  </ThemeProvider>
))

storiesOf('Typography', module).add('paragraph', () => (
  <ThemeProvider theme={theme}>
    <Typography variant="paragraph" onClick={action('clicked')}>
      Hi Typography Paragraph
    </Typography>
  </ThemeProvider>
))
