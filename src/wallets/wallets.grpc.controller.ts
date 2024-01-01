import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateWalletResponseInterface } from './interfaces/create-wallet-response.interface';
import { WalletServiceInterface } from './interfaces/wallet-service.interface';
import { WalletsService } from './wallets.service';

@Controller('wallets')
export class WalletsController implements WalletServiceInterface {
  constructor(private readonly walletService: WalletsService) {}

  @GrpcMethod('WalletService', 'createWallet')
  async createWallet(): Promise<CreateWalletResponseInterface> {
    return {
      address: await this.walletService.createNewWallet(),
    };
  }
}
