import React from 'react'
import { render, screen } from '@testing-library/react'
import TitleSection from './TitleSection'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/light.theme.style'

describe('Title Section test', () => {
  test('Test if the Title Section Component is rendering', () => {
    render(
      <ThemeProvider theme={theme}>
        <TitleSection title="Cart" />
      </ThemeProvider>
    )
    expect(screen.getByText('Cart')).toBeInTheDocument()
  })
})
