export const formatPrice = (number) => {
  const num = Number(number);

  if (isNaN(num) || num === null || num === undefined) {
    return "N/A";
  }

  const formatNumberPart = (value) => {
    return new Intl.NumberFormat("id-ID", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(value);
  };

  if (num >= 1000000000) {
    return `Rp ${formatNumberPart(num / 1000000000)} Miliar`;
  }
  if (num >= 1000000) {
    return `Rp ${formatNumberPart(num / 1000000)} Juta`;
  }
  if (num >= 1000) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  }
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
};