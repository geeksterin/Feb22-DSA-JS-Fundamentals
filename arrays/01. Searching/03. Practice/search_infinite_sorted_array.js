/**
 * in case of the sorted array where we don't know
 * the upper bound, we
 * - keep l = 0
 * - increase "u" by multiples/exponential of index
 * 2*index , 2^index
 * - if target< u
 * - apply binary search between l & u
 */
