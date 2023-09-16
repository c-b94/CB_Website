
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import PersonalProvider from './api/personalProvider.tsx'
import '../dist/output.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
    <PersonalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersonalProvider>
  ,
)
