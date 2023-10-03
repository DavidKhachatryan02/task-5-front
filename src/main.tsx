import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Fragment>
    <ToastContainer />
    <App />
  </Fragment>
)
