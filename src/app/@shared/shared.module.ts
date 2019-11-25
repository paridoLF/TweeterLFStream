import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {ToTimeStringFromStringPipe} from './pipes/toTimeStringFromString.pipe';
import {ToTimeStringFromMillisPipe} from './pipes/toTimeStringFromMillis.pipe';

import { ConstructUrlPipe } from './pipes/constructUrl.pipe';



// Form Components
export const FORMS_COMPONENTS = [
	FormsModule,
	ReactiveFormsModule,
];

export const PIPES = [
	ToTimeStringFromStringPipe,
	ToTimeStringFromMillisPipe,
	ConstructUrlPipe
]


export const DIRECTIVES = [
];

export const MODAL_COMPONENTS = [
];

@NgModule({
	declarations: [
		...DIRECTIVES,
		...MODAL_COMPONENTS,
		...PIPES
	],
	imports: [
		CommonModule,
		...FORMS_COMPONENTS,
	],
	exports: [
		...DIRECTIVES,
		...FORMS_COMPONENTS,
		...MODAL_COMPONENTS,
		...PIPES
	],
	entryComponents: [
		...MODAL_COMPONENTS,
	]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule
		};
	}
}
