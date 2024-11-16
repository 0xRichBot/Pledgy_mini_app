import { worldchain } from 'viem/chains';
import { createPublicClient, http } from 'viem';

export default createPublicClient({
  chain: worldchain,
  transport: http('https://worldchain-sepolia.explorer.alchemy.com'),
});