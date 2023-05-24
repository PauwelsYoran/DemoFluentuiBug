import { Button, FluentProvider, webLightTheme } from '@fluentui/react-components';
import * as React from 'react';
import { IDemobugProps } from './IDemobugProps';

export default class Demobug extends React.Component<IDemobugProps, {}> {
	public render(): React.ReactElement<IDemobugProps> {
		return (
			<FluentProvider theme={webLightTheme}>
				<Button> test</Button>
			</FluentProvider>
		);
	}
}

