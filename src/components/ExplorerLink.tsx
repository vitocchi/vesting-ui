import { getExplorerLink, SupportedNetwork } from '@/lib/Network'

export function ExplorerLink({ address, network }: { address: `0x${string}`, network: SupportedNetwork }) {
  const explorerLink = getExplorerLink(address, network)
  return (
    <a
      href={explorerLink}
      target="_blank"
      rel="noopener noreferrer"
      className="p-1 hover:bg-gray-100 rounded"
      title="View on Explorer"
    >
      <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}
