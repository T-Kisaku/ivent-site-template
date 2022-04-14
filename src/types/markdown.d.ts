interface MarkdownData<T> {
	url: string;
	metadata: T;
}

export type Ivent = MarkdownData<{
	title: string;
	eventDate: Date;
	schedule: { [time: string]: string };
	place: string;
	price: string;
	imageURL: string;
	ticketURL: string;
}>;

export type News = MarkdownData<{
	title: string;
	displayLimitDate: string;
	imageURL: string;
	eventURL: string;
}>;
