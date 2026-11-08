import { SetTokens } from './types';
/**
 * Finds character representations in str and convert all to
 * their respective characters.
 *
 * @param {string} str
 * @param {number[]} sourceMap Optional mapping from decoded character positions to source positions
 * @returns {string}
 */
export declare const strToChars: (str: string, sourceMap?: number[]) => string;
/**
 * Turns class into tokens
 * reads str until it encounters a ] not preceeded by a \
 *
 * @param {string} str
 * @param {string} regexpStr
 * @returns {Array.<Array.<Object>, number>}
 */
export declare const tokenizeClass: (str: string, regexpStr?: string) => [SetTokens, number];
