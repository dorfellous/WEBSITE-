const campaignPlaceholder = (label, width, height, fill = 'f4f4f1') => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="${width}" height="${height}" fill="#${fill}"/>
      <path d="M0 0 L${width} ${height}M${width} 0 L0 ${height}" stroke="#111" stroke-width="1" opacity=".12"/>
      <text x="28" y="54" fill="#111" font-family="Arial, Helvetica, sans-serif" font-size="18" letter-spacing="3">Dé-Féll CAMPAIGN</text>
      <text x="28" y="${height - 34}" fill="#111" font-family="Arial, Helvetica, sans-serif" font-size="38" letter-spacing="2">${label}</text>
    </svg>
  `

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export const campaignImages = [
  {
    id: 'campaign-01',
    label: 'LOOK 01',
    alt: 'Dé-Féll placeholder campaign image labeled look 01',
    src: campaignPlaceholder('LOOK 01', 390, 520, 'f5f5f2'),
    width: 390,
    x: 7,
    y: 10,
  },
  {
    id: 'campaign-02',
    label: 'OBJECT STUDY',
    alt: 'Dé-Féll placeholder campaign object study',
    src: campaignPlaceholder('OBJECT STUDY', 320, 430, 'ecebe7'),
    width: 320,
    x: 42,
    y: 18,
  },
  {
    id: 'campaign-03',
    label: 'LOOK 02',
    alt: 'Dé-Féll placeholder campaign image labeled look 02',
    src: campaignPlaceholder('LOOK 02', 450, 600, 'f8f8f5'),
    width: 450,
    x: 25,
    y: 4,
  },
  {
    id: 'campaign-04',
    label: 'DETAIL',
    alt: 'Dé-Féll placeholder campaign detail image',
    src: campaignPlaceholder('DETAIL', 290, 390, 'eeeee9'),
    width: 290,
    x: 38,
    y: 38,
  },
]
