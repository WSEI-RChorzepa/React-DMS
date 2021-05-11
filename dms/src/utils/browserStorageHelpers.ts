export namespace localStorage {
  export function get<T>(key: string): T | null {
    const value = window.localStorage.getItem(key);

    if (value === null) return null;

    return JSON.parse(value) as T;
  }

  export function set(key: string, data: object | []): void {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  export function hasKey(key: string): boolean {
    const value = window.localStorage.getItem(key);

    return value === null ? false : true;
  }
}
