export type MetadataDate =
	| string
	| {
			started: string;
			ended: string;
	  };

export interface Metadata {
	path: string;
	meta: {
		title: string;
		description: string;
		date: MetadataDate;
		bookmark?: boolean;
		imageURL?: string;
		portfolioURL?: string;
	};
}
