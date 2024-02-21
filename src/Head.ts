import customElement from './customElement';
import ContainerWithSlot from './ContainerWithSlot';
import style from './style/sections.scss';

export const TAG_NAME = 'wt-head';

@customElement(TAG_NAME)
export default class Head extends ContainerWithSlot {
	protected static readonly styles = [super.styles, style];

	protected static readonly containerTagName = 'thead';
}

declare global {
	interface HTMLElementTagNameMap {
		[TAG_NAME]: Head;
	}
}