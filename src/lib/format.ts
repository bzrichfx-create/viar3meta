export const formatRupiah = (num: number): string => {
  return 'Rp ' + num.toLocaleString('id-ID');
};

export const WHATSAPP_NUMBER = '6281234567890';
export const buildWaLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
