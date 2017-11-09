// flow-typed signature: fcc8fb6405172f17bd4c4e376f2d4922
// flow-typed version: 0e32f509df/fuse.js_v3.x.x/flow_>=v0.25.x

declare module 'fuse.js' {
  declare type FuseOptions = {
    caseSensitive?: boolean,
    includeScore?: boolean,
    includeMatches?: boolean,
    minMatchCharLength?: number,
    shouldSort?: boolean,
    tokenize?: boolean,
    matchAllTokens?: boolean,
    findAllMatches?: boolean,
    id?: string,
    keys?: Array<any>,
    location?: number,
    threshold?: number,
    distance?: number,
    maxPatternLength?: number,
    getFn?: (obj: any, path: string) => any,
    sortFn?: (a: any, b: any) => boolean,
    verbose?: boolean,
    tokenSeparator?: RegExp,
  }
  declare class Fuse<T> {
    constructor(items: Array<T>, options?: FuseOptions): Fuse<T>,
    search(pattern: string): Array<T>,
    setCollection<U: Array<T>>(list: U): U,
  }
  declare module.exports: typeof Fuse
}
