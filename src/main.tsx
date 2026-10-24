import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  type Theme,
} from '@mui/material/styles'
import {CssBaseline} from '@mui/material'
import * as Sentry from '@sentry/react'

import '#styles/index.scss'
import '#utils/i18n'
import App from '#components/App'
import ScrollToTop from '#components/base/ScrollToTop'
import {logConsoleWelcomeMessage} from '#utils/base'
import {ROOT} from '#utils/constants'
import THEME from '#styles/theme'

const theme: Theme = createTheme(THEME as object)

// Sentry is only enabled when VITE_SENTRY_DSN is set (see .env.example).
// Safe to leave unset — the site works normally without it.
const sentryDsn = import.meta.env.VITE_SENTRY_DSN
if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,
    environment: import.meta.env.MODE,
    integrations: [Sentry.browserTracingIntegration()],
    tracesSampleRate: 0.2,
  })
}

logConsoleWelcomeMessage()

createRoot(ROOT).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <ScrollToTop />
        <Sentry.ErrorBoundary fallback={<ErrorFallback />}>
          <App />
        </Sentry.ErrorBoundary>
      </Router>
    </ThemeProvider>
  </StyledEngineProvider>
)

function ErrorFallback() {
  return (
    <div style={{padding: 40, textAlign: 'center'}}>
      <h1>Something went wrong</h1>
      <p>Please refresh the page. This error has been reported.</p>
    </div>
  )
}
