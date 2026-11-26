export function randint(max: number, date: Date = new Date()): number {
  const day = Math.floor(date.getTime() / 86_400_000);
  const x = Math.sin(day) * 10000;
  const random = x - Math.floor(x);

  return Math.floor(random * max);
}
