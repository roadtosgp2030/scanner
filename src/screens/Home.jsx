import { Scanner, useDevices } from '@yudiel/react-qr-scanner'

const Home = () => {
    const devices = useDevices()
    console.log(devices);

    return <Scanner onScan={result => console.log(result)} />;
};

export default Home;
