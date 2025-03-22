import { Tooltip, Modal, Flex } from 'antd'
import './App.css'
import app_wx from './assets/app_wx.jpeg'
import wx from './assets/wx.jpg'
import tb from './assets/tb.jpg'
import { useState } from 'react'
import { PayCircleOutlined } from '@ant-design/icons'
import imageMe from './assets/me.jpg'

const  pcStyles: Record<string, React.CSSProperties> = {
  container: {
    position: 'fixed',
    top: '20px',
    right: '80px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    gap: '12px',
  },
  icon: {
    fontSize: '30px',
  },
  image: {
    width: '30px',
    height: '30px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  modalImage: {
    width: '240px',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 60,
  },
  authorImage: {
    height: 500,
  }
}


const mobileStyles: Record<string, React.CSSProperties> = {
  container: {
    position: 'fixed',
    bottom: '40px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
    gap: '12px',
  },
  icon: {
    fontSize: '24px'
  },
  image: {
    width: '24px',
    height: '24px',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  modalImage: {
    width: '140px'
  },
  modalText: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 40
  },
  authorImage: {
    width: '100%',
    height: 'auto'
  }
}


function App() {
  const [payModal, setPayModal] = useState(false)
  const [showWx, setShowWx] = useState(false)

  const isMobile = window.innerWidth < 768
  const styles = isMobile ? mobileStyles : pcStyles

  return (
    <div className="one-coffee" style={styles.container}>
      <Tooltip title="赞赏一下">
        <PayCircleOutlined className='move-animation' onClick={() => setPayModal(true)} style={styles.icon} />
      </Tooltip>
      <Tooltip title="联系作者">
        <img 
          className='move-animation'
          src={app_wx} 
          alt="联系作者" 
          onClick={() => setShowWx(true)}
          style={styles.image}
        />
      </Tooltip>
      {/* <Tooltip title="github">
        <img 
          src={github} 
          alt="github"
          style={styles.image}
        />
      </Tooltip> */}

      <Modal 
        title="感谢支持" 
        open={payModal} 
        onCancel={() => setPayModal(false)}
        width={700}
      >
        <Flex justify="center" align="center" gap={20}>
          <img style={styles.modalImage} src={wx} alt="" />
          <img style={styles.modalImage} src={tb} alt="" />
        </Flex>
        <p style={styles.modalText}>请作者喝杯咖啡</p>
      </Modal>
      
      <Modal open={showWx} onCancel={() => setShowWx(false)}>
        <img src={imageMe} style={styles.authorImage} alt="联系作者" />
      </Modal>
    </div>
  )
}

export default App
