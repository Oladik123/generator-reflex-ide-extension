import {ContainerModule} from 'inversify';
import {
    bindViewContribution,
    FrontendApplicationContribution,
    WebSocketConnectionProvider, WidgetFactory
} from '@theia/core/lib/browser';
import {IUiVladosTestExtensionService, UiVladosTestExtensionServicePath} from '../common';
import {UiVladosTestExtensionViewContribution} from './ui-vlados-test-extension-contribution';
import {UiVladosTestExtensionWidget} from "./extension-widget/UiVladosTestExtensionWidget";

export default new ContainerModule(bind => {
    bindViewContribution(bind, UiVladosTestExtensionViewContribution);
    bind(FrontendApplicationContribution).toService(UiVladosTestExtensionViewContribution);
    bind(UiVladosTestExtensionWidget).toSelf();

    bind(IUiVladosTestExtensionService).toDynamicValue(context =>
        WebSocketConnectionProvider.createProxy(context.container, UiVladosTestExtensionServicePath)
    ).inSingletonScope();

    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: UiVladosTestExtensionWidget.ID,
        createWidget: () => ctx.container.get<UiVladosTestExtensionWidget>(UiVladosTestExtensionWidget)
    })).inSingletonScope();
});