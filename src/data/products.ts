export interface Product {
  slug: string;
  name: string;
  category: 'Roda Tiga' | 'Roda Dua' | 'EV';
  tagline: string;
  price: number; // OTR Jakarta in IDR
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  loadCapacity?: string;
  badge?: string;
}

export const products: Product[] = [
  {
    slug: 'viar-karya-150',
    name: 'Viar Karya 150',
    category: 'Roda Tiga',
    tagline: 'Raja Motor Niaga Pemula',
    price: 27500000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434426102_f14e99b4.jpg',
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434426102_f14e99b4.jpg',
      'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434338297_c317c065.png',
    ],
    description:
      'Viar Karya 150 dirancang untuk pelaku usaha pemula. Hemat bahan bakar, mudah dioperasikan, dan terbukti tangguh untuk kebutuhan harian UMKM, pedagang pasar, dan jasa antar barang ringan.',
    highlights: ['Mesin 150cc Bertenaga', 'Konsumsi BBM Irit 1:35', 'Bak 1.7 m³ Lapang', 'Kuat Tanjakan'],
    loadCapacity: '600 KG',
    specs: [
      { label: 'Tipe Mesin', value: '4-Tak, OHV, 1 Silinder' },
      { label: 'Kapasitas Mesin', value: '149,5 cc' },
      { label: 'Sistem Bahan Bakar', value: 'Karburator' },
      { label: 'Tenaga Maksimal', value: '7.6 HP @ 7500 rpm' },
      { label: 'Transmisi', value: '4 Kecepatan + Mundur' },
      { label: 'Daya Angkut', value: '600 KG' },
      { label: 'Dimensi Bak', value: '1700 x 1300 x 300 mm' },
      { label: 'Kapasitas Tangki', value: '12 Liter' },
    ],
    badge: 'Best Seller',
  },
  {
    slug: 'viar-karya-200',
    name: 'Viar Karya 200',
    category: 'Roda Tiga',
    tagline: 'Andalan Pengusaha Tangguh',
    price: 31900000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434426102_f14e99b4.jpg',
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434426102_f14e99b4.jpg',
    ],
    description:
      'Viar Karya 200 hadir dengan tenaga lebih besar untuk kebutuhan niaga menengah. Cocok untuk petani, peternak, dan distributor barang dengan jangkauan rute lebih jauh.',
    highlights: ['Mesin 200cc Bertenaga Besar', 'Daya Angkut 700 KG', 'Bak Lebih Lebar', 'Suspensi Heavy Duty'],
    loadCapacity: '700 KG',
    specs: [
      { label: 'Tipe Mesin', value: '4-Tak, OHV, 1 Silinder' },
      { label: 'Kapasitas Mesin', value: '199,5 cc' },
      { label: 'Sistem Bahan Bakar', value: 'Karburator' },
      { label: 'Tenaga Maksimal', value: '10 HP @ 7000 rpm' },
      { label: 'Transmisi', value: '4 Kecepatan + Mundur' },
      { label: 'Daya Angkut', value: '700 KG' },
      { label: 'Dimensi Bak', value: '1900 x 1400 x 320 mm' },
      { label: 'Kapasitas Tangki', value: '13 Liter' },
    ],
    badge: 'Populer',
  },
  {
    slug: 'viar-karya-300',
    name: 'Viar Karya 300',
    category: 'Roda Tiga',
    tagline: 'King of Heavy Duty',
    price: 36500000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434447605_d181a2de.png',
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434447605_d181a2de.png',
    ],
    description:
      'Versi paling tangguh dari keluarga Karya. Mesin 300cc water-cooled membuat Karya 300 sanggup menaklukkan medan berat dan beban maksimal hingga 1 ton.',
    highlights: ['Mesin 300cc Water Cooled', 'Daya Angkut 1000 KG', 'Bak Extra Besar', 'Cocok Medan Berat'],
    loadCapacity: '1.000 KG',
    specs: [
      { label: 'Tipe Mesin', value: '4-Tak, Water Cooled, 1 Silinder' },
      { label: 'Kapasitas Mesin', value: '296 cc' },
      { label: 'Sistem Bahan Bakar', value: 'EFI / Karburator' },
      { label: 'Tenaga Maksimal', value: '17.5 HP @ 6500 rpm' },
      { label: 'Transmisi', value: '5 Kecepatan + Mundur' },
      { label: 'Daya Angkut', value: '1.000 KG' },
      { label: 'Dimensi Bak', value: '2200 x 1500 x 350 mm' },
      { label: 'Kapasitas Tangki', value: '15 Liter' },
    ],
    badge: 'Heavy Duty',
  },
  {
    slug: 'viar-cross-x-200',
    name: 'Viar Cross X 200',
    category: 'Roda Dua',
    tagline: 'Petualang Sejati Off-Road',
    price: 24500000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434358197_091db89c.png',
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434358197_091db89c.png',
    ],
    description:
      'Cross X 200 adalah trail bike legendaris Viar. Suspensi panjang, ground clearance tinggi, dan mesin bertenaga membuat motor ini siap diajak menjelajah segala medan.',
    highlights: ['Suspensi Long Travel', 'Ban Dual Purpose', 'Frame Kokoh', 'Ground Clearance Tinggi'],
    specs: [
      { label: 'Tipe Mesin', value: '4-Tak, SOHC, 1 Silinder' },
      { label: 'Kapasitas Mesin', value: '199 cc' },
      { label: 'Sistem Bahan Bakar', value: 'Karburator' },
      { label: 'Tenaga Maksimal', value: '15 HP @ 8000 rpm' },
      { label: 'Transmisi', value: '5 Kecepatan' },
      { label: 'Suspensi Depan', value: 'Telescopic Long Travel' },
      { label: 'Suspensi Belakang', value: 'Mono Shock' },
      { label: 'Kapasitas Tangki', value: '7 Liter' },
    ],
    badge: 'Adventure',
  },
  {
    slug: 'viar-cross-x-250',
    name: 'Viar Cross X 250',
    category: 'Roda Dua',
    tagline: 'Trail Bike Premium',
    price: 38900000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434358197_091db89c.png',
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434358197_091db89c.png',
    ],
    description:
      'Versi premium Cross X dengan mesin 250cc, sistem injeksi, dan rem cakram ganda. Untuk Anda yang serius dalam dunia trail dan adventure.',
    highlights: ['Mesin 250cc Injeksi', 'Double Disc Brake', 'USD Front Fork', 'Speedometer Digital'],
    specs: [
      { label: 'Tipe Mesin', value: '4-Tak, DOHC, 1 Silinder' },
      { label: 'Kapasitas Mesin', value: '249 cc' },
      { label: 'Sistem Bahan Bakar', value: 'EFI' },
      { label: 'Tenaga Maksimal', value: '21 HP @ 8500 rpm' },
      { label: 'Transmisi', value: '6 Kecepatan' },
      { label: 'Suspensi Depan', value: 'USD Telescopic' },
      { label: 'Rem', value: 'Double Disc Brake' },
      { label: 'Kapasitas Tangki', value: '8 Liter' },
    ],
  },
  {
    slug: 'viar-vortex-250',
    name: 'Viar Vortex 250',
    category: 'Roda Dua',
    tagline: 'Sport Touring Bertenaga',
    price: 35500000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434484592_65d71b14.jpg',
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434484592_65d71b14.jpg',
    ],
    description:
      'Vortex 250 adalah sport bike yang nyaman untuk turing harian. Posisi berkendara ergonomis dengan tampilan agresif khas motor sport.',
    highlights: ['Mesin 250cc DOHC', 'Desain Sport Agresif', 'Velg Racing 17"', 'LED Headlamp'],
    specs: [
      { label: 'Tipe Mesin', value: '4-Tak, DOHC, 1 Silinder' },
      { label: 'Kapasitas Mesin', value: '249 cc' },
      { label: 'Tenaga Maksimal', value: '23 HP @ 9000 rpm' },
      { label: 'Transmisi', value: '6 Kecepatan' },
      { label: 'Rem', value: 'Disc Brake + ABS' },
      { label: 'Kapasitas Tangki', value: '13 Liter' },
    ],
  },
  {
    slug: 'viar-v1',
    name: 'Viar V1',
    category: 'Roda Dua',
    tagline: 'Komuter Hemat Andalan',
    price: 16800000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434468820_2d4104b0.png',
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434468820_2d4104b0.png',
    ],
    description:
      'Viar V1 adalah motor bebek modern yang irit, tangguh, dan stylish. Pilihan tepat untuk komuter harian dan keluarga.',
    highlights: ['BBM Sangat Irit 1:50', 'Desain Modern Stylish', 'Bagasi Lapang', 'Velg Racing'],
    specs: [
      { label: 'Tipe Mesin', value: '4-Tak, SOHC' },
      { label: 'Kapasitas Mesin', value: '113 cc' },
      { label: 'Tenaga Maksimal', value: '8.5 HP @ 7500 rpm' },
      { label: 'Transmisi', value: '4 Kecepatan' },
      { label: 'Kapasitas Tangki', value: '4.2 Liter' },
    ],
    badge: 'Hemat',
  },
  {
    slug: 'viar-q1',
    name: 'Viar Q1',
    category: 'EV',
    tagline: 'Skuter Listrik Pintar',
    price: 18500000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434500848_5377e565.jpg',
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434500848_5377e565.jpg',
      'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434376329_6011a8a4.jpg',
    ],
    description:
      'Q1 adalah skuter listrik pertama dari Viar. Bebas BBM, bebas polusi, dengan biaya operasional sangat rendah. Sempurna untuk mobilitas perkotaan.',
    highlights: ['Zero Emission', 'Biaya 1 km hanya Rp 50', 'Baterai Lithium', 'Charging 4 Jam'],
    specs: [
      { label: 'Tipe Motor', value: 'BLDC Hub Motor' },
      { label: 'Daya', value: '800 Watt' },
      { label: 'Baterai', value: 'Lithium Ion 60V 23Ah' },
      { label: 'Jarak Tempuh', value: '60 km / Charge' },
      { label: 'Kecepatan Maks', value: '60 km/jam' },
      { label: 'Waktu Charging', value: '4-5 Jam' },
    ],
    badge: 'EV Terlaris',
  },
  {
    slug: 'viar-new-q1',
    name: 'Viar New Q1',
    category: 'EV',
    tagline: 'EV Untuk Kurir & Delivery',
    price: 21500000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434516398_05c0bd87.jpg',
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434516398_05c0bd87.jpg',
    ],
    description:
      'New Q1 hadir dengan baterai lebih besar, jangkauan lebih jauh, dan dek lapang. Pilihan utama mitra kurir online untuk hemat operasional.',
    highlights: ['Range 80 km', 'Dek Lapang Bawa Barang', 'Smart Display', 'Mode 3 Kecepatan'],
    specs: [
      { label: 'Tipe Motor', value: 'BLDC Hub Motor' },
      { label: 'Daya', value: '1500 Watt' },
      { label: 'Baterai', value: 'Lithium Ion 72V 30Ah' },
      { label: 'Jarak Tempuh', value: '80 km / Charge' },
      { label: 'Kecepatan Maks', value: '70 km/jam' },
    ],
    badge: 'Baru',
  },
  {
    slug: 'viar-n1',
    name: 'Viar N1',
    category: 'EV',
    tagline: 'Premium Electric Scooter',
    price: 25900000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434538093_e1667c26.png',
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434538093_e1667c26.png',
    ],
    description:
      'Viar N1 adalah skuter listrik premium dengan desain futuristik dan fitur teknologi modern. Untuk mobilitas urban yang stylish dan ramah lingkungan.',
    highlights: ['Smart Connectivity', 'Keyless Entry', 'Range 100 km', 'Fast Charging'],
    specs: [
      { label: 'Daya', value: '2000 Watt' },
      { label: 'Baterai', value: 'Lithium 72V 40Ah' },
      { label: 'Jarak Tempuh', value: '100 km / Charge' },
      { label: 'Kecepatan Maks', value: '80 km/jam' },
      { label: 'Fitur', value: 'GPS, App Connect, Keyless' },
    ],
  },
  {
    slug: 'viar-e-cross',
    name: 'Viar E-Cross',
    category: 'EV',
    tagline: 'Trail Bike Listrik Pertama',
    price: 32500000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434557762_8a1026ca.png',
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a00bfd5e7cd65b0b5633c6e_1778434557762_8a1026ca.png',
    ],
    description:
      'E-Cross menggabungkan ketangguhan trail bike Viar dengan teknologi listrik. Sensasi berkendara off-road tanpa emisi dan tanpa suara bising.',
    highlights: ['Silent Adventure', 'Torsi Instan', 'Long Travel Suspension', 'Removable Battery'],
    specs: [
      { label: 'Daya', value: '3000 Watt Peak' },
      { label: 'Baterai', value: 'Lithium 72V 50Ah Removable' },
      { label: 'Jarak Tempuh', value: '90 km / Charge' },
      { label: 'Kecepatan Maks', value: '75 km/jam' },
      { label: 'Tipe', value: 'Off-road / Trail' },
    ],
    badge: 'Inovasi',
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
