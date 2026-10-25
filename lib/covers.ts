export const coverStyles = {
  navy: "from-[#0a2036] via-[#0d2b47] to-[#123a5c]",
  slate: "from-[#141c2b] via-[#1d2a3e] to-[#2b3d58]",
  forest: "from-[#0b2622] via-[#0e332d] to-[#14493f]",
  bronze: "from-[#221b12] via-[#2e2417] to-[#41321f]",
  plum: "from-[#1d1a2e] via-[#282343] to-[#3b3363]",
  indigo: "from-[#101f33] via-[#162b45] to-[#1e3a5c]",
  teal: "from-[#082a2a] via-[#0c3a38] to-[#11514c]",
  midnight: "from-[#0a1a2e] via-[#0e2742] to-[#13395c]",
  rust: "from-[#2a1512] via-[#3a1d18] to-[#4d2820]",
} as const;

export type CoverPreset = keyof typeof coverStyles;

export const coverPresets = Object.keys(coverStyles) as CoverPreset[];
