import {ContainerModule} from 'inversify';
import {ConnectionHandler, JsonRpcConnectionHandler} from '@theia/core/lib/common';
import {IUiVladosTestExtensionService, UiVladosTestExtensionServicePath} from '../common';
import {UiVladosTestExtensionService} from './ui-vlados-test-extension-backend-service';

export default new ContainerModule(bind => {
    bind(UiVladosTestExtensionService).toSelf().inSingletonScope();
    bind(IUiVladosTestExtensionService).toService(UiVladosTestExtensionService);
    bind(ConnectionHandler).toDynamicValue(
        context =>
            new JsonRpcConnectionHandler(
                UiVladosTestExtensionServicePath,
                () => context.container.get(IUiVladosTestExtensionService)
            )
    ).inSingletonScope();
});