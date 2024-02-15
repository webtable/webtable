import { css } from 'lit';

export default css`
	:host {
		display: contents;
	}

	:host(:last-child) {
		--wt-cell-border-right-width: 0;
	}

	td, th {
		padding: var(--wt-cell-padding-y) var(--wt-cell-padding-x);
		border-color: var(--wt-border-color);
		border-top-color: var(--wt-cell-border-top-color, var(--wt-border-color));
		border-top-width: var(--wt-cell-border-top-width, 0);
		border-right-width: var(--wt-cell-border-right-width, 0);
		border-bottom-width: var(--wt-cell-border-bottom-width, 0);
		border-left-width: var(--wt-cell-border-left-width, 0);

		background-color: var(--wt-bg-color);
		box-shadow: inset 0 0 0 9999px var(--wt-bg-state, var(--wt-bg-type, var(--wt-bg-column)));
		color: var(--wt-color-state, var(--wt-color-type, var(--wt-color-column)));
	}
`;
