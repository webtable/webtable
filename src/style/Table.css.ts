import { css } from 'lit';

export default css`
	table {
		width: var(--wt-table-width);
		border-color: var(--wt-border-color);
		border-collapse: var(--wt-border-collapse);
		border-spacing: var(--wt-border-spacing);
		border-style: var(--wt-border-style);
		border-width: var(--wt-border-width) var(--wt-border-width) 0 var(--wt-border-width);
		
		&, & > tbody {
			vertical-align: var(--wt-vertical-align);
		}

		& > thead {
			vertical-align: bottom;
		}

		:host([sticky-header]) > & > thead {
			top: 0;
			position: sticky;
		}

		:host([dividers]) > & > tbody > ::slotted(:first-of-type),
		:host([dividers]) > & > tfoot > ::slotted(:first-of-type) {
			--wt-cell-border-top-width: var(--wt-divider-width);
			--wt-cell-border-top-color: var(--wt-divider-color);
		}

		:host([sticky-footer]) > & > tfoot {
			bottom: 0;
			position: sticky;
		}

		:host([caption-side="top"]) > & {
			caption-side: top;
		}
	}
`;
