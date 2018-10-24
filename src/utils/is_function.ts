type Function<T> = T extends (...args: any[]) => any ? T : never;

export default <T extends {}>(prop: T): prop is Function<T> => typeof prop === 'function';
