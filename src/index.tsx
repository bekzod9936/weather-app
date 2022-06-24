import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from 'app'
import { QueryClientProvider } from 'react-query'
import { CreateGlobalStyle } from 'shared/config/style'
import { queryClient } from 'shared/config/react-query'
import { ToastContainer } from 'react-toastify'
import reportWebVitals from './reportWebVitals'
import 'swiper/css/bundle'
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CreateGlobalStyle />
      <App />
      <ToastContainer />
    </QueryClientProvider>
  </StrictMode>,
)

reportWebVitals()
