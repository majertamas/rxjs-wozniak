export function consoleLogVarWithColor(title: string, variable: any, color: string): void {
  console.log(`%c ${title}`, `color: ${color}`, variable);
}

export function consoleLogWithColor(message: string, color: string): void {
  console.log(`%c ${message}`, `color: ${color}`);
}

export function consoleLogWithGreen(message: string): void {
  console.log(`%c ${message}`, `color: green`);
}

export function consoleLogWithRed(message: string): void {
  console.log(`%c ${message}`, `color: red`);
}

export function consoleLogWithYellow(message: string): void {
  console.log(`%c ${message}`, `color: yellow`);
}
