import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { FC, useCallback, useMemo } from "react";
// import { notify } from "../utils/notifications";
// import useUserSOLBalanceStore from "../stores/useUserSOLBalanceStore";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  generateSigner,
  transactionBuilder,
  publicKey,
  some,
} from "@metaplex-foundation/umi";
import {
  fetchCandyMachine,
  mintV2,
  mplCandyMachine,
  safeFetchCandyGuard,
} from "@metaplex-foundation/mpl-candy-machine";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { setComputeUnitLimit } from "@metaplex-foundation/mpl-toolbox";
import { clusterApiUrl } from "@solana/web3.js";
import * as bs58 from "bs58";
import { toast } from "react-hot-toast";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// These access the environment variables we defined in the .env file
const quicknodeEndpoint =
  process.env.NEXT_PUBLIC_RPC || clusterApiUrl("devnet");
const candyMachineAddress = publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID);
const treasury = publicKey(process.env.NEXT_PUBLIC_TREASURY);

export const CandyMint = () => {
  const { connection } = useConnection();
  const wallet = useWallet();

  //  Umi instance
  const umi = useMemo(
    () =>
      createUmi(quicknodeEndpoint)
        .use(walletAdapterIdentity(wallet))
        .use(mplCandyMachine())
        .use(mplTokenMetadata()),
    [
      wallet,
      mplCandyMachine,
      walletAdapterIdentity,
      mplTokenMetadata,
      quicknodeEndpoint,
      createUmi,
    ]
  );

  //mint function
  const onClick = useCallback(async () => {
    if (!wallet.publicKey) {
      toast.error("Wallet not connected!");
      return;
    }

    // Fetch the Candy Machine.
    const candyMachine = await fetchCandyMachine(umi, candyMachineAddress);
    // Fetch the Candy Guard.
    const candyGuard = await safeFetchCandyGuard(
      umi,
      candyMachine.mintAuthority
    );
    try {
      // Mint from the Candy Machine.
      const nftMint = generateSigner(umi);
      const transaction = await transactionBuilder()
        .add(setComputeUnitLimit(umi, { units: 800_000 }))
        .add(
          mintV2(umi, {
            candyMachine: candyMachine.publicKey,
            candyGuard: candyGuard?.publicKey,
            nftMint,
            collectionMint: candyMachine.collectionMint,
            collectionUpdateAuthority: candyMachine.authority,
            mintArgs: {
              solPayment: some({ destination: treasury }),
              mintLimit: some({ id: 1 }),
            },
          })
        );
      const { signature } = await transaction.sendAndConfirm(umi, {
        confirm: { commitment: "confirmed" },
      });
      const txid = bs58.encode(signature);
      toast.success(`Mint successful! ${txid}`);
    } catch (error) {
      toast.error(`Mint failed! ${error?.message}`);
    }
  }, [wallet, connection, umi, candyMachineAddress, treasury]);

  return (
    <div>
      {/* <p style={{ marginBottom: "0.5rem", textAlign: "center" }}>
        No NFTs left to mint
      </p> */}
      <div className="app__guardian-btns">
        <button className="app__guardian-btn" onClick={onClick}>
          Become A Guardian
        </button>
        <WalletMultiButton className="app__guardian-btn" />
      </div>
    </div>
  );
};
