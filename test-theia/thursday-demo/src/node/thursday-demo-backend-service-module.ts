import {
  ContainerModule
} from 'inversify';
import {
  ConnectionHandler,
  JsonRpcConnectionHandler
} from '@theia/core/lib/common';
import {
  IThursdayDemoService,
  ThursdayDemoServicePath
} from '../common';
import {
  ThursdayDemoService
} from './thursday-demo-backend-service';

export default new ContainerModule(bind => {
  bind(ThursdayDemoService).toSelf().inSingletonScope();
  bind(IThursdayDemoService).toService(ThursdayDemoService);
  bind(ConnectionHandler).toDynamicValue(
    context =>
    new JsonRpcConnectionHandler(
      ThursdayDemoServicePath,
      () => context.container.get(IThursdayDemoService)
    )
  ).inSingletonScope();
});