/**
 * 获取变量类型
 * @param source 变量
 */
export const getType = (source: any): string => Object.prototype.toString.call(source);

/**
 * 是否为对象
 * @param {any} source
 * @returns {boolean}
 */
export const isObject = (source: any): boolean => getType(source) === '[object Object]';

/**
 * 是否为字符串
 * @param source
 */
export const isString = (source: any): boolean => getType(source) === '[object String]';
