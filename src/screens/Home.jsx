import { Scanner, useDevices } from '@yudiel/react-qr-scanner'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const devices = useDevices()
    const navigate = useNavigate()

    console.log(devices);

    return <Scanner onScan={() => {
        navigate('/test')
    }} />;
};

export default Home;
