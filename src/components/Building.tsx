interface BuildingProps {
  color: string;
  height: number;
  relationshipStrength: number;
}

export function Building({ color, height, relationshipStrength }: BuildingProps) {
  const buildingHeight = Math.min(Math.max(height, 30), 90);

  // Neutral at 50%, dimmer below, brighter above
  // 0% → 0.4, 50% → 0.7, 100% → 1.0
  const brightness = relationshipStrength <= 50
    ? 0.4 + (relationshipStrength / 50) * 0.3
    : 0.7 + ((relationshipStrength - 50) / 50) * 0.3;
  // Halo intensity: 0 below 50, ramps up 50→100
  const haloIntensity = relationshipStrength > 50
    ? (relationshipStrength - 50) / 50
    : 0;

  // Window count scales with strength — accelerates at higher values so strong buildings look full
  const baseWindows = Math.max(0, Math.floor((relationshipStrength - 20) / 3));
  const bonusWindows = relationshipStrength > 70 ? Math.floor((relationshipStrength - 70) / 5) * 2 : 0;
  const totalWindows = baseWindows + bonusWindows;

  // Window sizes per column count
  const windowSizeForCols = (cols: number) =>
    cols <= 1 ? 10 : cols === 2 ? 8 : cols === 3 ? 7 : 6;

  // Calculate how many rows actually fit given a column count
  const verticalPadding = 10; // top (2px) + bottom (8px)
  const rowGap = 4;
  const maxRowsForCols = (cols: number) => {
    const ws = windowSizeForCols(cols);
    return Math.max(1, Math.floor((buildingHeight - verticalPadding + rowGap) / (ws + rowGap)));
  };

  // Start with 1 column and see if we need more
  let columns = 0;
  let maxRowsPerCol = maxRowsForCols(1);
  if (totalWindows > 0) {
    columns = 1;
    // Keep adding columns if windows overflow the available rows
    while (columns < 4 && totalWindows > maxRowsPerCol * columns) {
      columns++;
      maxRowsPerCol = maxRowsForCols(columns);
    }
  }

  const rows = columns > 0 ? Math.min(maxRowsPerCol, Math.ceil(totalWindows / columns)) : 0;
  const windowSize = windowSizeForCols(columns);

  // All buildings same width
  const buildingWidth = 42;

  // Colors dim/brighten with strength
  const adjustColor = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const v = 0.3 + brightness * 0.55;
    return `rgb(${Math.floor(r * v)}, ${Math.floor(g * v)}, ${Math.floor(b * v)})`;
  };

  const darkenColor = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const d = 0.15 + brightness * 0.4;
    return `rgb(${Math.floor(r * d)}, ${Math.floor(g * d)}, ${Math.floor(b * d)})`;
  };

  const mainColor = adjustColor(color);
  const accentColor = darkenColor(color);
  const windowOpacity = relationshipStrength <= 50
    ? 0.3 + (relationshipStrength / 50) * 0.3
    : 0.6 + ((relationshipStrength - 50) / 50) * 0.4;
  const windowGlow = relationshipStrength > 50;
  const isConstruction = totalWindows === 0;

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative"
        style={{
          width: `${buildingWidth}px`,
          height: `${buildingHeight}px`,
          transition: 'width 0.8s ease-out, height 0.8s ease-out',
        }}
      >
        {/* Main building body */}
        <div
          className="absolute bottom-0 w-full rounded-t shadow-xl overflow-hidden"
          style={{
            height: `${buildingHeight}px`,
            background: `linear-gradient(to right, ${accentColor}, ${mainColor})`,
            border: `1px solid ${accentColor}`,
            borderBottom: 'none',
            boxShadow: haloIntensity > 0
              ? `0 0 ${6 + haloIntensity * 14}px rgba(251, 191, 36, ${haloIntensity * 0.4}), 0 0 ${2 + haloIntensity * 6}px rgba(251, 191, 36, ${haloIntensity * 0.2})`
              : 'none',
            transition: 'height 0.8s ease-out, box-shadow 0.8s ease-out',
          }}
        >
          {isConstruction ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full border-2 border-dashed border-white/20 rounded-t" />
            </div>
          ) : (
            <div
              className="absolute bottom-0 left-0 right-0 flex flex-col-reverse items-center"
              style={{ padding: '2px 4px 8px 4px', gap: `${rowGap}px` }}
            >
              {Array.from({ length: rows }).map((_, r) => (
                <div key={r} className="flex justify-evenly" style={{ gap: columns === 2 ? '6px' : columns >= 3 ? '3px' : '0px' }}>
                  {Array.from({ length: columns }).map((_, c) => {
                    // Column-major fill from bottom up
                    const idx = c * maxRowsPerCol + r;
                    return idx < totalWindows ? (
                      <div
                        key={c}
                        className="rounded-[1px] bg-amber-300"
                        style={{
                          width: `${windowSize}px`,
                          height: `${windowSize}px`,
                          opacity: windowOpacity,
                          boxShadow: windowGlow
                            ? `0 0 ${4 + haloIntensity * 6}px rgba(251, 191, 36, ${0.2 + haloIntensity * 0.6})`
                            : 'none',
                          transition: 'all 0.8s ease-out',
                        }}
                      />
                    ) : (
                      <div
                        key={c}
                        style={{ width: `${windowSize}px`, height: `${windowSize}px`, opacity: 0 }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          {/* Rooftop accent */}
          {!isConstruction && (
            <div
              className="absolute -top-1 left-0 right-0 h-1 rounded-t"
              style={{ background: accentColor }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
