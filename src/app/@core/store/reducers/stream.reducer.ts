import * as from from '../actions/stream.action';
import * as fromStreamState from '../state/stream.state';

/**
 * Reducer funciton for stream state
 * @param state of stream
 * @param action of stream
 */
export function reducer(
	state = fromStreamState.initialStreamState,
	action: from.StreamAction
): fromStreamState.IStream {

	switch (action.type) {
		case from.SHOW_STREAMING:
			return { ...state, open: true, type: 'general' };
		case from.NOT_SHOW_STREAMING:
			return { ...state, open: false, type: '' };
		default:
			return state;
	}
}
