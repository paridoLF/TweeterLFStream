import { Action } from '@ngrx/store';

/**
 * Action consts
 */
export const SHOW_STREAMING = '[STREAMING] Show General Streaming';
export const NOT_SHOW_STREAMING = '[STREAMING] Close General Streaming';

/**
 * Action for open general dialog
 */
export class ShowStreaming implements Action {
	readonly type = SHOW_STREAMING;
	constructor(readonly payload: any) { }
}

/**
 * Action for close general dialog
 */
export class NotShowStreaming implements Action {
	readonly type = NOT_SHOW_STREAMING;
}

/**
 * Action types
 */
export type StreamAction =
	| ShowStreaming
	| NotShowStreaming;
