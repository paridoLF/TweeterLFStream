import { Injectable } from '@angular/core';
import { Observable, Observer} from 'rxjs';
import { catchError } from 'rxjs/operators';

// import { IResponse } from '../models/response.model';
import { PubNubAngular } from 'pubnub-angular2';
import DateUtil from './../../@shared/utils/dateUtil';

@Injectable()
export class StreamService {

	private readonly pubnub: PubNubAngular;

	public readonly messageReceivedObservable: Observable<any>;
	private messageReceivedObserver: Observer<any>;
	private currentChannel: string;
	public searchText : string;

	constructor() {
		const self = this;
		this.messageReceivedObservable = Observable.create(function(observer: Observer<any>) {
			self.messageReceivedObserver = observer;
		  });
	
		this.pubnub = new PubNubAngular();
		this.searchText='';
	 }

	 public setup(channelName: string): void {
		this.pubnub.init({
			publishKey: 'demo',
			subscribeKey: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe',
			
		});
	
		this.subscribe(channelName);
	  }

	  private subscribe(channelName: string) {
		console.log('Going to subscribe to ' + channelName + ' channel');
		this.pubnub.subscribe({
		  channels  : [channelName],
		  withPresence: true,
		  triggerEvents: ['message', 'presence', 'status']
		});
		// we need the "self" constant because we cannot use "this" inside the function below
		const self = this;

		this.pubnub.getMessage(channelName, (messageWrapper) => {
		  const messageWrapperString: string = JSON.stringify(messageWrapper, null, 4);
		  const currentTime: string = DateUtil.getCurrentTimeString();
	
	
		  // We are adding this property to the messageWrapper object
		  messageWrapper.timeReceived = Date.now();
	
		  // The use of "self" is required
		  self.messageReceivedObserver.next(messageWrapper);
		});
	
		this.pubnub.getError(channelName, (err) => {
		  console.log(err);
		});
	
		this.pubnub.getPresence(channelName, (pse) => {
		  console.log(pse);
		});
	
		this.pubnub.getStatus(channelName, (st) => {
		  console.log(st);
		});
	
		this.currentChannel = channelName;


	  }
	
	  public changeChannel(channelName: string): void {
		console.log('Going to unsubscribe from ' + this.currentChannel + ' channel');

		this.subscribe(channelName);
	  }
	
	  public stop() {
		console.log('Service PubnubService is being destroyed, stopping PubNub client instance');
		this.pubnub.stop();
	  }

}
