import { Link } from 'react-router-dom'

export const NotFoundPage: React.FC = () => {
  return (
    <div className="grid h-screen px-4 bg-light-page-background dark:bg-dark-page-background place-content-center">
        <div className="text-center">
            <h1 className="font-black text-light-text-200 dark:text-dark-text-200 text-9xl">404</h1>
            <p className="text-2xl font-bold tracking-tight font-mono text-light-text-200 dark:text-dark-text-link sm:text-4xl">
            Oops!
            </p>
            <p className="mt-4 text-light-text-200 dark:text-dark-text-200">An error has occurred</p>
            <Link
            to="/"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium bg-light-btn-background dark:bg-dark-btn-background dark:text-dark-text-100 text-light-text-300 focus:outline-none focus:ring"
            >
            Go Back Home
            </Link>
        </div>
    </div>
  )
}
