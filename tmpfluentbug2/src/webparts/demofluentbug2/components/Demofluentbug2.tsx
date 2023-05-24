import { Button, FluentProvider, webLightTheme } from '@fluentui/react-components';
import * as React from 'react';
import { IDemofluentbug2Props } from './IDemofluentbug2Props';

export default class Demofluentbug2 extends React.Component<IDemofluentbug2Props, {}> {
	public render(): React.ReactElement<IDemofluentbug2Props> {
		return (
			<FluentProvider theme={webLightTheme}>
				<Button> button 2</Button>
			</FluentProvider>
		);
	}
}

