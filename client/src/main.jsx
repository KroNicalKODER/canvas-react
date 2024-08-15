import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { NodeProvider } from './components/NodeContext';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NodeProvider>
    <App />
    </NodeProvider>
  </StrictMode>,
)
