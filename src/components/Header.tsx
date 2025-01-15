'use client'
import { useState } from "react";
import { AddressSearchBar } from "./AddressSearchBar";
import { NetworkSelector } from "./NetworkSelector";
import { SupportedNetwork } from "@/lib/Network";
import Image from "next/image";

export function Header({ currentNetwork }: { currentNetwork: SupportedNetwork }) {
  const [searchNetwork, setSearchNetwork] = useState<SupportedNetwork>(currentNetwork)
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={32}
          height={32}
        />
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Vesting Wallet Explorer
        </h1>
      </div>
      <div className="w-1/2">
        <AddressSearchBar searchNetwork={searchNetwork} />
      </div>
      <NetworkSelector initialNetwork={searchNetwork} onChange={(network) => setSearchNetwork(network)} />
    </div>
  )
}