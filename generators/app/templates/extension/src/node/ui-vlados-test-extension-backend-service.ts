import {inject, injectable} from 'inversify';
import {IUiVladosTestExtensionService} from '../common';
import {IAstService} from "ast-service/lib/node/ast-service-protocol";


@injectable()
export class UiVladosTestExtensionService implements IUiVladosTestExtensionService {

    constructor(@inject(IAstService) private readonly astService: IAstService) {
    }

    async getEnvVariables(): Promise<Readonly<{ [key: string]: string | undefined }>> {
        return process.env;
    }

    async getText(): Promise<Readonly<{ message: string, code: string }>> {
        const astServiceEnabled = !!this.astService;
        return {
            message: `Text from backend: ${Date.now()} ${astServiceEnabled ? 'AstService enabled' : ''}`,
            code: '200'
        };
    }
}