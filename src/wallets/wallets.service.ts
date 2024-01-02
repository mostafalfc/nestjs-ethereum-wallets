import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import configuration from 'src/config/configuration';

@Injectable()
export class WalletsService {
  private provider = new ethers.providers.JsonRpcProvider(
    configuration().network_url,
  );

  async createNewWallet(): Promise<string> {
    const wallet = ethers.Wallet.createRandom();
    console.log(wallet);
    console.log(wallet._mnemonic());
    console.log(wallet._signingKey());

    return wallet.address;
  }
}
