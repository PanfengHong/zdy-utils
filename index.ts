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

/**
 * 是否为空
 * @param {any} source 任意数据
 * @returns {boolean}
 */
export const isEmpty = (source: any): boolean => {
    if (Array.isArray(source)) return source.length === 0;

    if (isObject(source)) return Object.keys(source).length === 0;

    if (['[object Set]', '[object Map]'].includes(getType(source))) return source.size === 0;

    return [null, undefined, ''].includes(source);
};
