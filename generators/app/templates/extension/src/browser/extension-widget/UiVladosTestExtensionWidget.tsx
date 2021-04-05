import * as React from 'react';
import {inject, injectable, postConstruct} from 'inversify';
import {ReactWidget} from '@theia/core/lib/browser/widgets/react-widget';
import {IUiVladosTestExtensionService} from "../../common";
import {BackendResponseWidget} from "./BackendResponseWidget";

@injectable()
export class UiVladosTestExtensionWidget extends ReactWidget {

    static readonly ID = 'UiVladosTestExtension:widget';
    static readonly LABEL = 'UiVladosTestExtension Widget';

    constructor(@inject(IUiVladosTestExtensionService) private readonly backendService: IUiVladosTestExtensionService) {
        super();
    }

    @postConstruct()
    protected async init(): Promise<void> {
        this.id = UiVladosTestExtensionWidget.ID;
        this.title.label = UiVladosTestExtensionWidget.LABEL;
        this.title.caption = UiVladosTestExtensionWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }

    protected render(): React.ReactNode {
        return (
            <div>
                <BackendResponseWidget backend={{getTextToDisplay: this.backendService.getText}}/>
            </div>
        )
    }

}
