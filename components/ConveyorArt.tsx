// Hand-drawn style illustration of the sorter: fruit rides the belt under the camera.
const fruits = [
  { fill: "#7cb342", delay: "0s", bad: false },
  { fill: "#e8892b", delay: "-1.8s", bad: false },
  { fill: "#8a5a2b", delay: "-3.6s", bad: true },
  { fill: "#d94f3a", delay: "-5.4s", bad: false },
  { fill: "#f2c230", delay: "-7.2s", bad: false },
];

export default function ConveyorArt() {
  return (
    <svg viewBox="0 0 520 330" className="h-auto w-full" role="img" aria-label="Ilustrasi buah berjalan di konveyor melewati kamera VleeFruit">
      {/* floor shadow */}
      <ellipse cx="260" cy="300" rx="240" ry="14" fill="#163a27" opacity="0.07" />

      {/* belt */}
      <rect x="10" y="222" width="500" height="34" rx="17" fill="#1d4a32" />
      <clipPath id="beltClip">
        <rect x="24" y="228" width="472" height="22" rx="11" />
      </clipPath>
      <g clipPath="url(#beltClip)">
        <g className="belt-stripes">
          {Array.from({ length: 24 }).map((_, i) => (
            <rect key={i} x={20 + i * 24} y="228" width="10" height="22" fill="#255e40" />
          ))}
        </g>
      </g>
      <circle cx="27" cy="239" r="9" fill="#0f2a1c" />
      <circle cx="493" cy="239" r="9" fill="#0f2a1c" />
      <rect x="40" y="256" width="10" height="38" fill="#163a27" />
      <rect x="470" y="256" width="10" height="38" fill="#163a27" />

      {/* fruit */}
      {fruits.map((f, i) => (
        <g key={i} className="belt-item" style={{ animationDelay: f.delay }}>
          <circle cx="0" cy="205" r="17" fill={f.fill} />
          {f.bad && (
            <>
              <circle cx="-5" cy="200" r="4" fill="#4a2f17" />
              <circle cx="6" cy="210" r="3" fill="#4a2f17" />
            </>
          )}
          <path d="M0 188c0-5 3-8 7-9" stroke="#163a27" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M2 186c4-3 9-2 11 1-4 2-8 2-11-1z" fill="#3f8a5f" />
        </g>
      ))}

      {/* sorter frame */}
      <rect x="196" y="70" width="12" height="160" rx="3" fill="#163a27" />
      <rect x="312" y="70" width="12" height="160" rx="3" fill="#163a27" />
      <rect x="182" y="52" width="156" height="46" rx="10" fill="#163a27" />
      <rect x="246" y="98" width="28" height="12" rx="3" fill="#0f2a1c" />
      <circle cx="260" cy="75" r="11" fill="#0f2a1c" />
      <circle cx="260" cy="75" r="6" fill="#e8892b" />
      <circle cx="320" cy="64" r="3" fill="#7cb342" />
      <text x="198" y="80" fontFamily="var(--font-bricolage)" fontWeight="700" fontSize="11" fill="#cfe3d3">VF-01</text>

      {/* camera cone + scan line */}
      <path d="M248 110 L214 214 L306 214 L272 110 Z" fill="#e8892b" opacity="0.12" />
      <rect className="scan-line" x="226" y="160" width="68" height="2.5" rx="1" fill="#e8892b" />

      {/* labels */}
      <g fontFamily="var(--font-instrument)" fontSize="12" fontWeight="600">
        <rect x="372" y="132" width="122" height="30" rx="15" fill="#fff" stroke="#dfe4dc" />
        <circle cx="390" cy="147" r="5" fill="#3f8a5f" />
        <text x="402" y="151" fill="#163a27">Matang · Grade A</text>

        <rect x="26" y="120" width="128" height="30" rx="15" fill="#fff" stroke="#dfe4dc" />
        <circle cx="44" cy="135" r="5" fill="#c2412d" />
        <text x="56" y="139" fill="#163a27">Busuk → reject</text>
        <path d="M120 150 C140 170, 160 180, 190 190" stroke="#c2412d" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
      </g>
    </svg>
  );
}
