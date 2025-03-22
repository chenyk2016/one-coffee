import { Button, Tooltip, Modal, Flex } from 'antd'
import github from './assets/app_th.jpeg'
import app_wx from './assets/app_wx.jpeg'
import wx from './assets/wx.jpg'
import tb from './assets/tb.jpg'
import './App.css'
import { useState } from 'react'
import { PayCircleOutlined } from '@ant-design/icons'

function App() {
  const [payModal, setPayModal] = useState(false)
  const [showWx, setShowWx] = useState(false)

  return (
    <div className="one-coffee">
      <Tooltip title="赞赏一下">
        <PayCircleOutlined onClick={() => setPayModal(true)} />
      </Tooltip>
      <Tooltip title="联系作者">
        <img src={app_wx} alt="联系作者" onClick={() => setShowWx(true)}/>
      </Tooltip>
      <Tooltip title="github">
        <img src={github} alt="github" />
      </Tooltip>

      <Modal open={payModal} onCancel={() => setPayModal(false)}>
        <Flex justify="center" align="center" gap={60}>
          <img style={{ width: '200px' }} src={wx} alt="" />
          <img style={{ width: '200px' }} src={tb} alt="" />
        </Flex>
        <p style={{ textAlign: 'center',fontSize: 16,marginTop: 60 }}>赞赏作者喝杯咖啡</p>
      </Modal>
      
      <Modal open={showWx} onCancel={() => setShowWx(false)}>
        <img src={app_wx} style={{width: 80}} alt="联系作者" />
      </Modal>
    </div>
  )

}

export default App
