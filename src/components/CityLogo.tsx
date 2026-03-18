export function CityLogo() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-end gap-1.5 mb-3">
        {/* Building skyline logo */}
        <div className="w-7 h-16 bg-gradient-to-b from-[#374151] to-[#1F2937] rounded-t border border-[#1F2937] relative">
          <div className="absolute inset-0 p-1 flex flex-col gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-amber-400 rounded-sm" />
              <div className="w-1 h-1 bg-amber-400 rounded-sm" />
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-amber-400 rounded-sm" />
              <div className="w-1 h-1 bg-amber-400 rounded-sm" />
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-amber-400 rounded-sm" />
              <div className="w-1 h-1 bg-amber-400 rounded-sm" />
            </div>
          </div>
        </div>
        <div className="w-5 h-10 bg-gradient-to-b from-[#4B5563] to-[#374151] rounded-t border border-[#374151] relative">
          <div className="absolute inset-0 p-1 flex flex-col gap-1">
            <div className="flex gap-0.5 justify-center">
              <div className="w-1 h-1 bg-amber-300 rounded-sm" />
            </div>
            <div className="flex gap-0.5 justify-center">
              <div className="w-1 h-1 bg-amber-300 rounded-sm" />
            </div>
          </div>
        </div>
        <div className="w-8 h-20 bg-gradient-to-b from-[#1F2937] to-[#111827] rounded-t border border-[#111827] relative">
          <div className="absolute inset-0 p-1 flex flex-col gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-amber-400 rounded-sm" />
              <div className="w-1 h-1 bg-amber-400 rounded-sm" />
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-amber-400 rounded-sm" />
              <div className="w-1 h-1 bg-amber-400 rounded-sm" />
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-amber-400 rounded-sm" />
              <div className="w-1 h-1 bg-amber-400 rounded-sm" />
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-amber-400 rounded-sm" />
              <div className="w-1 h-1 bg-amber-400 rounded-sm" />
            </div>
          </div>
        </div>
        <div className="w-6 h-12 bg-gradient-to-b from-[#374151] to-[#1F2937] rounded-t border border-[#1F2937] relative">
          <div className="absolute inset-0 p-1 flex flex-col gap-1">
            <div className="flex gap-1 justify-center">
              <div className="w-1 h-1 bg-amber-300 rounded-sm" />
            </div>
            <div className="flex gap-1 justify-center">
              <div className="w-1 h-1 bg-amber-300 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">Social Skyline</h1>
      <p className="text-sm text-gray-600 mt-1">Track and strengthen your connections</p>
    </div>
  );
}