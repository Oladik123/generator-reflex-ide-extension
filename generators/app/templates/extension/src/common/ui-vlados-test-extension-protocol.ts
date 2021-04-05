export const UiVladosTestExtensionServicePath = '/services/ui-vlados-test-extension-service';

export const IUiVladosTestExtensionService = Symbol('UiVladosTestExtensionService');

export interface IUiVladosTestExtensionService {
    getEnvVariables(): Promise<Readonly<{ [key: string]: string | undefined }>>

    getText(): Promise<Readonly<{ message: string, code: string }>>
}