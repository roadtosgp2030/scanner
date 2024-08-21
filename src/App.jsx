import './App.css'
import { Scanner, useDevices } from '@yudiel/react-qr-scanner'

function App() {
  const devices = useDevices()
  console.log(devices);

  return (
    <>
      <Scanner onScan={result => console.log(result)} />
    </>
  )
}

export default App
