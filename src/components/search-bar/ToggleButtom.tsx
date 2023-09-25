import { useEffect, useState } from 'react'
export const ToggleButtom = (): JSX.Element => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = (): void => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }
  return (
    <label htmlFor="AcceptConditions" className="relative h-8 w-14 cursor-pointer">
  <input
    type="checkbox"
    id="AcceptConditions"
    className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
    checked={theme === 'dark'}
    onChange={handleChangeTheme}
  />

  <span
    className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-light-text-link transition-all peer-checked:start-6 peer-checked:text-dark-text-link"
  >
    <svg
    data-unchecked-icon
    xmlns="http://www.w3.org/2000/svg"
    fill="none" viewBox="0 0 24 24"
    strokeWidth="1.5" stroke="currentColor"
    className="w-4 h-4">
    <path strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>

    <svg
    data-checked-icon
    xmlns="http://www.w3.org/2000/svg"
    fill="none" viewBox="0 0 24 24"
    strokeWidth="1.5" stroke="currentColor"
    className="hidden w-4 h-4">
    <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>

  </span>

  <span
    className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-toggle-buttom"
  ></span>
</label>
  )
}
