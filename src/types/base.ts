import { CSSProperties, ReactElement } from "react";

interface BaseProps {
	children: ReactElement;
	style?: CSSProperties | undefined;
	className?: string | undefined;
}

export type { BaseProps };
