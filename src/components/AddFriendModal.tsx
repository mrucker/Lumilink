import { useState } from 'react';
import { X, Sprout } from 'lucide-react';

interface AddFriendModalProps {
  onClose: () => void;
  onAdd: (friend: { name: string; relationship: string; lumilinkId: string; plantType?: string }) => void;
  existingRelationships: string[];
  theme?: 'city' | 'garden' | 'desert';
}

export function AddFriendModal({ onClose, onAdd, existingRelationships, theme }: AddFriendModalProps) {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [customRelationship, setCustomRelationship] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [lumilinkId, setLumilinkId] = useState('');
  const [plantType, setPlantType] = useState<'cactus' | 'palm' | 'tropical'>('cactus');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalRelationship = showCustomInput ? customRelationship : relationship;
    if (name.trim() && finalRelationship.trim() && lumilinkId.trim()) {
      onAdd({ 
        name: name.trim(), 
        relationship: finalRelationship.trim(), 
        lumilinkId: lumilinkId.trim(),
        ...(theme === 'desert' && { plantType })
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-[340px] mx-4 overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-5 flex items-center justify-between">
          <h2 className="text-xl text-white flex items-center justify-center flex-1 font-medium">
            Add Connection
          </h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 flex items-center justify-center"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Name Input */}
          <div className="flex flex-col items-center">
            <label className="block text-sm text-gray-700 mb-2 text-center w-full font-medium">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Sarah, Mom, John"
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none text-gray-900 placeholder:text-gray-400 text-center transition-all"
              required
            />
          </div>

          {/* Relationship Type */}
          <div className="flex flex-col items-center">
            <label className="block text-sm text-gray-700 mb-2 text-center w-full font-medium">
              Category
            </label>
            <div className="w-full space-y-2">
              {existingRelationships.map((rel) => (
                <button
                  key={rel}
                  type="button"
                  onClick={() => {
                    setRelationship(rel);
                    setShowCustomInput(false);
                  }}
                  className={`w-full px-4 py-3 rounded-lg border transition-all flex items-center justify-center font-medium ${
                    relationship === rel && !showCustomInput
                      ? 'bg-gray-900 border-gray-900 text-white shadow-md'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-gray-900'
                  }`}
                >
                  {rel}
                </button>
              ))}
              
              {/* Add New Category Option */}
              {!showCustomInput ? (
                <button
                  type="button"
                  onClick={() => {
                    setShowCustomInput(true);
                    setRelationship('');
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-dashed border-gray-400 bg-white text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center font-medium"
                >
                  + Add New Category
                </button>
              ) : (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={customRelationship}
                    onChange={(e) => setCustomRelationship(e.target.value)}
                    placeholder="Enter category name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none text-gray-900 placeholder:text-gray-400 text-center"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setShowCustomInput(false);
                      setCustomRelationship('');
                    }}
                    className="w-full text-sm text-gray-500 hover:text-gray-900 text-center"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Lumilink ID */}
          <div className="flex flex-col items-center">
            <label className="block text-sm text-gray-700 mb-2 text-center w-full font-medium">
              SkyLink ID
            </label>
            <input
              type="text"
              value={lumilinkId}
              onChange={(e) => setLumilinkId(e.target.value)}
              placeholder="@username or user ID"
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none text-gray-900 placeholder:text-gray-400 text-center transition-all"
              required
            />
            <p className="text-xs text-gray-500 mt-2 text-center">
              Sync connection data with your contact
            </p>
          </div>

          {/* Plant Type Selection - Only for Tropical Oasis Theme */}
          {theme === 'desert' && (
            <div className="flex flex-col items-center">
              <label className="block text-sm text-gray-700 mb-2 text-center w-full font-medium flex items-center justify-center gap-2">
                <Sprout className="w-4 h-4" />
                Plant Type
              </label>
              <div className="w-full grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPlantType('cactus')}
                  className={`px-3 py-3 rounded-lg border transition-all flex flex-col items-center justify-center gap-2 ${
                    plantType === 'cactus'
                      ? 'bg-[#4A7C59] border-[#4A7C59] text-white shadow-md'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-[#4A7C59]'
                  }`}
                >
                  <div className="text-2xl">🌵</div>
                  <span className="text-xs font-medium">Cactus</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPlantType('palm')}
                  className={`px-3 py-3 rounded-lg border transition-all flex flex-col items-center justify-center gap-2 ${
                    plantType === 'palm'
                      ? 'bg-[#4A7C59] border-[#4A7C59] text-white shadow-md'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-[#4A7C59]'
                  }`}
                >
                  <div className="text-2xl">🌴</div>
                  <span className="text-xs font-medium">Palm</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPlantType('tropical')}
                  className={`px-3 py-3 rounded-lg border transition-all flex flex-col items-center justify-center gap-2 ${
                    plantType === 'tropical'
                      ? 'bg-[#4A7C59] border-[#4A7C59] text-white shadow-md'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-[#4A7C59]'
                  }`}
                >
                  <div className="text-2xl">🌺</div>
                  <span className="text-xs font-medium">Flower</span>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Choose how this relationship appears in your oasis
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center font-medium"
          >
            Add Connection
          </button>
        </form>
      </div>
    </div>
  );
}