import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import App from './App.tsx'

const renderApp = () => {
  const div = document.createElement('div');
  div.id = 'donation-portal';
  document.body.appendChild(div);

  createRoot(div).render(
    <StrictMode>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </StrictMode>,
  )
}

if (document.readyState === 'loading') {
  // DOM还在加载中,等待DOMContentLoaded事件
  document.addEventListener('DOMContentLoaded', renderApp)
} else {
  // DOM已经加载完成,直接执行
  renderApp()
}
