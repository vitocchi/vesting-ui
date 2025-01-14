
export const SUPPORTED_NETWORKS = ['Ethereum', 'Polygon', 'Sepolia', 'Amoy']
export type SupportedNetwork = (typeof SUPPORTED_NETWORKS)[number]

export function getExplorerLink(address: `0x${string}`, network: SupportedNetwork) {
  switch (network) {
    case 'Ethereum': return `https://etherscan.io/address/${address}`
    case 'Polygon': return `https://polygonscan.com/address/${address}`
    case 'Sepolia': return `https://sepolia.etherscan.io/address/${address}`
    case 'Amoy': return `https://amoy.polygonscan.com/address/${address}`
    default: throw new Error('Invalid network')
  }
}
