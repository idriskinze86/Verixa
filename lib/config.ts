import { http, createConfig } from "wagmi";
import { injected } from "wagmi/connectors";
import { defineChain } from "viem";

export const flareCoston2 = defineChain({
  id: 114,
  name: "Flare Coston2",
  nativeCurrency: {
    name: "C2FLR",
    symbol: "C2FLR",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://coston2-api.flare.network/ext/C/rpc"],
    },
  },
  blockExplorers: {
    default: {
      name: "Flare Explorer",
      url: "https://coston2-explorer.flare.network",
    },
  },
  testnet: true,
});

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

const metadata = {
  name: "Verixa",
  description: "Blockchain-powered digital asset verification on Flare",
  url: "https://verixa-lake.vercel.app",
  icons: ["https://verixa-lake.vercel.app/favicon.ico"],
};
export const config = createConfig({
  chains: [flareCoston2],

  connectors: [
    injected({
      shimDisconnect: true,
    }),
  ],

  transports: {
    [flareCoston2.id]: http(),
  },
});
