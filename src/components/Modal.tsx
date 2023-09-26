export const Modal: React.FC = () => {
  return (
        <div className="p-8 text-center sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest font-mono text-light-text-200 dark:text-dark-text-link">
            Oops! your searches are over
            </p>

            <h2 className="mt-6 text-3xl font-bold text-light-text-200 dark:text-dark-text-200">
            To continue checking the weather in our application, subscribe to the premium plan
            </h2>

            <a
            className="mt-8 inline-block rounded-3xl bg-light-btn-background dark:bg-dark-btn-background dark:text-dark-text-100 p-4 text-sm font-bold text-light-text-300 shadow-xl"
            href="/"
            >
            subscribe now!
            </a>
        </div>
  )
}
