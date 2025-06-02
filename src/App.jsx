import { useState, useRef } from 'react';
import QRCode from 'qrcode';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [waLink, setWaLink] = useState('');
  const canvasRef = useRef(null);

  const handleGenerate = async () => {
    const link = `https://wa.me/${phoneNumber}`;
    setWaLink(link);
    await QRCode.toCanvas(canvasRef.current, link, { width: 200 });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Generador QR para WhatsApp</h1>
      <input
        type="tel"
        placeholder="Ingresá un número"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{ padding: '0.5rem', fontSize: '1rem', marginRight: '1rem' }}
      />
      <button onClick={handleGenerate} style={{ padding: '0.5rem 1rem' }}>
        Generar
      </button>
      {waLink && (
        <div style={{ marginTop: '2rem' }}>
          <p>Link generado:</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer">{waLink}</a>
          <div style={{ marginTop: '1rem' }}>
            <canvas ref={canvasRef} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
