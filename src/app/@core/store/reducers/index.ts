import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

// state
import * as fromRouter from '@ngrx/router-store';
import * as fromState from '../state';

// reducers
import * as streamReducer from './stream.reducer';

export interface RouterStateUrl {
	url: string;
	queryParams: Params;
	params: Params;
}

export interface State {
	routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
	stream: fromState.IStream;
}

export const reducers: ActionReducerMap<State> = {
	routerReducer: fromRouter.routerReducer,
	stream: streamReducer.reducer
};

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
	serialize(routerState: RouterStateSnapshot): RouterStateUrl {
		const { url } = routerState;
		const { queryParams } = routerState.root;

		let state: ActivatedRouteSnapshot = routerState.root;
		while (state.firstChild) {
			state = state.firstChild;
		}

		const { params } = state;

		return { url, queryParams, params };
	}
}
