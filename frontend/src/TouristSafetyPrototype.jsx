import React, { useState } from "react";
import { MapPin, Shield, PhoneCall, Cpu } from "lucide-react";

export default function TouristSafetyPrototype() {
  const [showID, setShowID] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">
        Smart Tourist Safety System (Prototype)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Digital ID */}
        <div className="shadow-lg rounded-2xl">
          <div className="p-6 text-center">
            <Shield className="mx-auto text-blue-600" size={48} />
            <h2 className="text-xl font-semibold mt-4">Blockchain Digital ID</h2>
            <p className="text-gray-600 mt-2">
              Tourists receive secure, temporary digital IDs stored on blockchain.
            </p>
            <button
              onClick={() => setShowID(true)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
            >
              View Sample ID
            </button>
          </div>
        </div>

        {/* Mobile App */}
        <div className="shadow-lg rounded-2xl">
          <div className="p-6 text-center">
            <PhoneCall className="mx-auto text-red-500" size={48} />
            <h2 className="text-xl font-semibold mt-4">Tourist Mobile App</h2>
            <p className="text-gray-600 mt-2">
              Features include SOS panic button, geo-fencing alerts, and family tracking.
            </p>
            <button
              onClick={() => alert("Launching Tourist Mobile App... 🚀")}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
            >
              Launch App
            </button>
          </div>
        </div>

        {/* AI */}
        <div className="shadow-lg rounded-2xl">
          <div className="p-6 text-center">
            <Cpu className="mx-auto text-green-600" size={48} />
            <h2 className="text-xl font-semibold mt-4">AI Anomaly Detection</h2>
            <p className="text-gray-600 mt-2">
              Detects unusual patterns like sudden drop-offs or prolonged inactivity.
            </p>
          </div>
        </div>

        {/* Dashboard */}
        <div className="shadow-lg rounded-2xl">
          <div className="p-6 text-center">
            <MapPin className="mx-auto text-purple-600" size={48} />
            <h2 className="text-xl font-semibold mt-4">Dashboard for Authorities</h2>
            <p className="text-gray-600 mt-2">
              Real-time maps of tourist safety, alerts, and heat zones.
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Sample ID */}
      {showID && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-96 text-center">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Sample Tourist ID</h2>
            <p className="text-gray-700">Name: John Doe</p>
            <p className="text-gray-700">ID: TST-123456</p>
            <p className="text-gray-700">Validity: 15 Days</p>
            <p className="text-gray-700">Blockchain Hash: 0xA1B2C3D4...</p>
            <button
              onClick={() => setShowID(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
