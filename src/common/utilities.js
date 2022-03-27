export const dollarUS = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function dateKeyValue() {
  let date = new Date();
  return `${date.toLocaleString('en-US', {
    month: 'long',
    year:'numeric',
  })}`;
}
