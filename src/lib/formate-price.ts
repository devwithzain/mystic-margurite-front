export function formatUSD(amount: undefined | number) {
   return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
   }).format(amount ?? 0);
}