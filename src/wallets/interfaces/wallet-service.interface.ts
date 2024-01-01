import { CreateWalletResponseInterface } from './create-wallet-response.interface';

export interface WalletServiceInterface {
  createWallet(): Promise<CreateWalletResponseInterface>;
}
