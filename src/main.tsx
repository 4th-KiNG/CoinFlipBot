import './index.scss'

import { Buffer } from "buffer"
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

// @ts-ignore
window.Buffer = Buffer
declare global {
  interface Window {
      Telegram:any;
  }
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />,
)
