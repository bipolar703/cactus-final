// Budget monitoring for bundle size enforcement
export const BUDGET_LIMITS = {
  maxBundle: 150000, // 150KB
  maxAsset: 100000,  // 100KB
  enforce: true,
} as const;

export function checkBundleSize(size: number): boolean {
  if (BUDGET_LIMITS.enforce && size > BUDGET_LIMITS.maxBundle) {
    console.warn(`Bundle size ${size} exceeds limit of ${BUDGET_LIMITS.maxBundle}`);
    return false;
  }
  return true;
}

export function checkAssetSize(size: number): boolean {
  if (BUDGET_LIMITS.enforce && size > BUDGET_LIMITS.maxAsset) {
    console.warn(`Asset size ${size} exceeds limit of ${BUDGET_LIMITS.maxAsset}`);
    return false;
  }
  return true;
}