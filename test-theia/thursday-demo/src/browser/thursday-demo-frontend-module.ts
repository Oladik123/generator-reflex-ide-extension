import {
  ContainerModule
} from 'inversify';
import {
  bindViewContribution,
  FrontendApplicationContribution,
  WebSocketConnectionProvider,
  WidgetFactory
} from '@theia/core/lib/browser';
import {
  IThursdayDemoService,
  ThursdayDemoServicePath
} from '../common';
import {
  ThursdayDemoViewContribution
} from './thursday-demo-contribution';
import {
  ThursdayDemoWidget
} from "./extension-widget/ThursdayDemoWidget";

export default new ContainerModule(bind => {
  bindViewContribution(bind, ThursdayDemoViewContribution);
  bind(FrontendApplicationContribution).toService(ThursdayDemoViewContribution);
  bind(ThursdayDemoWidget).toSelf();

  bind(IThursdayDemoService).toDynamicValue(context =>
    WebSocketConnectionProvider.createProxy(context.container, ThursdayDemoServicePath)
  ).inSingletonScope();

  bind(WidgetFactory).toDynamicValue(ctx => ({
    id: ThursdayDemoWidget.ID,
    createWidget: () => ctx.container.get < ThursdayDemoWidget > (ThursdayDemoWidget)
  })).inSingletonScope();
});