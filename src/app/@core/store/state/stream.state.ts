export interface IStream {
	open: boolean;
	props: object;
	type: string;
}

export const initialStreamState: IStream = {
	open: false,
	type: '',
	props: {}
};
