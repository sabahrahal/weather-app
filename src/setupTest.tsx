import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
// import '@testing-library/jest-dom/extend-expect'

interface options {
  route: string
}

// fetchMock.enableMocks()

const renderWithProviders = (ui: any, options = {}): any => {
  const { route = '/' } = options as options

  const uiTree = (
        <MemoryRouter initialEntries={[route]}>
          {ui}
        </MemoryRouter>
  )
  return render(uiTree, options)
}

// re-export everything
export * from '@testing-library/react'

export { renderWithProviders }
