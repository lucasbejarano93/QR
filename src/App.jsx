import { useState, useEffect } from "react";
import QRCode from "qrcode";

export default function App() {
  const [phone, setPhone] = useState("");
  const [waLink, setWaLink] = useState("");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    if (waLink) {
      QRCode.toDataURL(waLink)
        .then(url => {
          setQrCode(url);
        })
        .catch(err => console.error(err));
    }
  }, [waLink]);

  const handleGenerate = () => {
    const sanitizedPhone = phone.replace(/\D/g, ""); // elimina espacios, guiones, etc.
    const link = `https://wa.me/${sanitizedPhone}`;
    setWaLink(link);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Generador de QR para WhatsApp</h1>

      <input
        type="text"
        placeholder="Número de teléfono"
        className="p-2 border border-gray-400 rounded w-full max-w-md mb-4"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        Generar
      </button>

      {waLink && (
        <div className="text-center">
          <p className="mb-2 text-blue-600">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              {waLink}
            </a>
          </p>
          {qrCode && <img src={qrCode} alt="QR Code de WhatsApp" className="mx-auto" />}
        </div>
      )}
    </div>
  );
}

