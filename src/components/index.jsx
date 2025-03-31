import React, { useState } from "react";
import QRCode from "react-qr-code";
import "../style.css";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput(""); 
  }

  return (
    <div className="qr-container">
      <h1>QR Code Generator</h1>

      {/* Input and Button Container */}
      <div className="qr-input-container">
        <input
          className="qr-input"
          type="text"
          placeholder="Enter your value here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="qr-button"
          disabled={!input.trim()}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>

     
      {qrCode && (
        <div className="qr-code">
          <QRCode id="qr-code-value" value={qrCode} size={200} bgColor="#fff" />
        </div>
      )}
    </div>
  );
}
