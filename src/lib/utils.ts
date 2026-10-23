export const cn = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');

export const absoluteUrl = (siteUrl: string, path: string) => `${siteUrl}${path === '/' ? '' : path}`;

export const pluralize = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;
