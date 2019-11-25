import { Injectable } from '@angular/core';

import { map, exhaustMap } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';

import * as notificationActions from '../actions/stream.action';

@Injectable()
export class StreamEffect {
	constructor(
		private actions$: Actions
	) { }

}
