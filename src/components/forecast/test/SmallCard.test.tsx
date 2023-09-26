import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../../setupTest'
import { mockDataDaily, mockDataWeekly } from './mockData'
import { SmallCard } from '../SmallCard'

describe('test in SmallCard.tsx', () => {
  test('SmallCard render in daily view component with data', () => {
    renderWithProviders(
        <SmallCard {...mockDataDaily}/>
    )

    expect(screen.getByRole('img')).toBeTruthy()
    expect(screen.getByText(mockDataDaily.description)).toBeTruthy()
    expect(screen.getByText(mockDataDaily.time)).toBeTruthy()
    expect(screen.getByText(mockDataDaily.temperature)).toBeTruthy()
  })

  test('SmallCard render in weekly view component with data', () => {
    renderWithProviders(
        <SmallCard {...mockDataWeekly}/>
    )

    expect(screen.getByRole('img')).toBeTruthy()
    expect(screen.getByText(mockDataWeekly.time)).toBeTruthy()
    expect(screen.getByText(mockDataWeekly.temperatureMax)).toBeTruthy()
    expect(screen.getByText(mockDataWeekly.temperatureMin)).toBeTruthy()
  })
})
