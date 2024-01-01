import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { ethers } from 'ethers';
import configuration from 'src/config/configuration';

@Injectable()
export class WalletsService {
  provider = new ethers.providers.JsonRpcProvider(configuration().network_url);

  async createNewWallet(): Promise<string> {
    const id = crypto.randomBytes(32).toString('hex');
    const private_key = `0x${id}`;
    console.log(`private key is: ${private_key}`);

    const wallet = new ethers.Wallet(private_key, this.provider);

    return wallet.address;
  }
}
