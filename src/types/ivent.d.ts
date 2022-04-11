export interface Ivent {
	url: string
	metadata: {
		title: string
		eventDate: Date
		schedule: {[time: string]: string}
		place: string
		price: string
	}
	content: string
}