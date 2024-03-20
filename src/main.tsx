import './index.scss'

import { Buffer } from "buffer"
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

// @ts-ignore
window.Buffer = Buffer

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />,
)
