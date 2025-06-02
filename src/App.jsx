import { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {
  const [phone, setPhone] = useState('');
  const [waLink, setWaLink] = useState('');

  const generateLink = () => {
    if (phone) {
      const cleanPhone = phone.replace(/[^0-9]/g, '');
      setWaLink(`https://wa.me/${cleanPhone}`);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20, fontFamily: 'Arial' }}>
      <h2>Generador de QR para WhatsApp</h2>
      <input
        type="text"
        placeholder="Ingresá número de teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ width: '100%', padding: 10, marginBottom: 10 }}
      />
      <button onClick={generateLink} style={{ width: '100%', padding: 10 }}>Generar</button>

      {waLink && (
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <p><a href={waLink} target="_blank" rel="noopener noreferrer">{waLink}</a></p>
          <QRCode value={waLink} size={200} />
        </div>
      )}
    </div>
  );
}

export default App;