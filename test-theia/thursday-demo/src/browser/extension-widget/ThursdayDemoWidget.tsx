import * as React from 'react';
import {
  inject,
  injectable,
  postConstruct
} from 'inversify';
import {
  ReactWidget
} from '@theia/core/lib/browser/widgets/react-widget';
import {
  IThursdayDemoService
} from "../../common";
import {
  BackendResponseWidget
} from "./BackendResponseWidget";

@injectable()
export class ThursdayDemoWidget extends ReactWidget {

  static readonly ID = 'ThursdayDemo:widget';
  static readonly LABEL = 'ThursdayDemo Widget';

  constructor(@inject(IThursdayDemoService) private readonly backendService: IThursdayDemoService) {
    super();
  }

  @postConstruct()
  protected async init(): Promise < void > {
    this.id = ThursdayDemoWidget.ID;
    this.title.label = ThursdayDemoWidget.LABEL;
    this.title.caption = ThursdayDemoWidget.LABEL;
    this.title.closable = true;
    this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
    this.update();
  }

  protected render(): React.ReactNode {
    return ( <
      div >
      <
      BackendResponseWidget backend = {
        {
          getTextToDisplay: this.backendService.getText
        }
      }
      /> <
      /div>
    )
  }

}