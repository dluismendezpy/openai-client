import { ReactElement } from "react";

import { BaseProps } from "@/types";

const Base = ({ children, className, style }: BaseProps): ReactElement => (
	<div className={className} style={style}>
		{children}
	</div>
);

export { Base };
