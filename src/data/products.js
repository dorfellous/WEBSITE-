const placeholderImage = (label, tone = 'f5f5f3') => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">
      <rect width="1200" height="1500" fill="#${tone}"/>
      <path d="M150 1240h900M150 260h900M260 150v1200M940 150v1200" stroke="#111" stroke-width="2" opacity=".12"/>
      <text x="76" y="112" fill="#111" font-family="Arial, Helvetica, sans-serif" font-size="34" letter-spacing="4">Dé-Féll PLACEHOLDER</text>
      <text x="76" y="1365" fill="#111" font-family="Arial, Helvetica, sans-serif" font-size="68" letter-spacing="2">${label}</text>
    </svg>
  `

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export const products = [
  {
    id: 'acc-001',
    slug: 'folded-silk-scarf',
    category: 'accessories',
    name: 'Folded Silk Scarf',
    price: '$180',
    description: 'A narrow silk scarf cut for irregular knots and loose shoulder drape.',
    details: ['100% silk twill', 'Hand-finished edge', 'Printed placeholder artwork'],
    images: [
      placeholderImage('FOLDED SILK SCARF', 'f2f2f0'),
      placeholderImage('SCARF / REVERSE', 'e8e7e2'),
    ],
    availability: 'In stock',
  },
  {
    id: 'acc-002',
    slug: 'pinched-leather-belt',
    category: 'accessories',
    name: 'Pinched Leather Belt',
    price: '$240',
    description: 'Slim vegetable-tanned belt with a pinched keeper and quiet hardware.',
    details: ['Vegetable-tanned leather', 'Brushed nickel buckle', 'Adjustable fit'],
    images: [
      placeholderImage('PINCHED LEATHER BELT', 'ececea'),
      placeholderImage('BELT / DETAIL', 'f7f7f4'),
    ],
    availability: 'In stock',
  },
  {
    id: 'acc-003',
    slug: 'canvas-object-wrap',
    category: 'accessories',
    name: 'Canvas Object Wrap',
    price: '$95',
    description: 'A structured wrap for carried objects, layered as a small styling piece.',
    details: ['Cotton canvas', 'Raw internal seam', 'Tie closure'],
    images: [placeholderImage('CANVAS OBJECT WRAP', 'f8f8f6')],
    availability: 'Sold out',
  },
  {
    id: 'jwl-001',
    slug: 'split-line-ring',
    category: 'jewelry',
    name: 'Split Line Ring',
    price: '$210',
    description: 'A narrow ring interrupted by a deliberate break in the silhouette.',
    details: ['Recycled sterling silver', 'Polished exterior', 'Open band'],
    images: [
      placeholderImage('SPLIT LINE RING', 'f4f4f2'),
      placeholderImage('RING / HAND STUDY', 'e9e8e4'),
    ],
    availability: 'In stock',
  },
  {
    id: 'jwl-002',
    slug: 'long-hook-earring',
    category: 'jewelry',
    name: 'Long Hook Earring',
    price: '$170',
    description: 'Single extended hook earring with an intentionally spare profile.',
    details: ['Sold individually', 'Sterling silver', 'Lightweight form'],
    images: [
      placeholderImage('LONG HOOK EARRING', 'eeeeec'),
      placeholderImage('EARRING / PROFILE', 'f7f7f5'),
    ],
    availability: 'In stock',
  },
  {
    id: 'jwl-003',
    slug: 'flat-chain-collar',
    category: 'jewelry',
    name: 'Flat Chain Collar',
    price: '$320',
    description: 'Low collar chain designed to sit close against the neckline.',
    details: ['Recycled brass base', 'Silver finish', 'Hidden clasp'],
    images: [placeholderImage('FLAT CHAIN COLLAR', 'f6f5f2')],
    availability: 'Sold out',
  },
  {
    id: 'bag-001',
    slug: 'small-negative-tote',
    category: 'bags',
    name: 'Small Negative Tote',
    price: '$390',
    description: 'Compact tote with a recessed body and flat strap construction.',
    details: ['Cotton-linen body', 'Leather handle facing', 'Internal slip pocket'],
    images: [
      placeholderImage('SMALL NEGATIVE TOTE', 'f2f1ee'),
      placeholderImage('TOTE / SIDE', 'e7e6e2'),
    ],
    availability: 'In stock',
  },
  {
    id: 'bag-002',
    slug: 'soft-carry-satchel',
    category: 'bags',
    name: 'Soft Carry Satchel',
    price: '$460',
    description: 'Unstructured satchel with a slouched rectangular fall.',
    details: ['Washed cotton canvas', 'Detachable strap', 'Magnetic closure'],
    images: [
      placeholderImage('SOFT CARRY SATCHEL', 'f7f7f4'),
      placeholderImage('SATCHEL / OPEN', 'eeeee9'),
    ],
    availability: 'In stock',
  },
  {
    id: 'bag-003',
    slug: 'flat-archive-pouch',
    category: 'bags',
    name: 'Flat Archive Pouch',
    price: '$145',
    description: 'Document-scale pouch intended for tablets, papers, and small daily objects.',
    details: ['Coated cotton', 'Exposed zip', 'Unlined interior'],
    images: [placeholderImage('FLAT ARCHIVE POUCH', 'f0efeb')],
    availability: 'In stock',
  },
]

export const categories = {
  accessories: 'ACCESSORIES',
  jewelry: 'JEWELRY',
  bags: 'BAGS',
}

export const getProductsByCategory = (category) =>
  products.filter((product) => product.category === category)

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug)
