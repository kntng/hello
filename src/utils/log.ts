export function log(s: string) {
  if (import.meta.env.DEV) {
    const currentTime = new Date().toLocaleTimeString();
    console.log(`[${currentTime}]`, s);
  }
}
