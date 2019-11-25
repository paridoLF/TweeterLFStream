import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { StreamService } from './../../services/stream.service';

import DateUtil from './../../../@shared/utils/dateUtil';


@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit,OnChanges  {
  @Input('searchText') searchValue: string;
  @Input('channelText') channelValue: string;

  messageWrappers: any[];
  public   messagesList: any[];
  readonly pubnubService: StreamService;
  readonly getTimeStringFromString: Function;
  searchText: string;
  channelSelected : string;

  constructor(pubnubService: StreamService) {
    this.pubnubService = pubnubService;
    this.messageWrappers = new Array<any>();
    this.getTimeStringFromString = DateUtil.getTimeStringFromString;
    this.channelSelected = 'pubnub-twitter';
  }

  ngOnInit() {
    this.pubnubService.messageReceivedObservable.subscribe(
      messageWrapper => {
        this.messageWrappers.push(messageWrapper);
        if (this.searchText !== "")
        this.messageWrappers =  this.messageWrappers.filter(e=>e.message.entities.hashtags.find(ht => ht.text === this.searchText) !== undefined );
      });
      console.log('Going to setup ' + StreamService.name);
      // The default channel name (country) is USA
      //pubnub-twitter
      //pubnub_onboarding_channel
      this.pubnubService.setup(this.channelSelected);
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes["searchValue"] !== undefined){
      if (typeof changes["searchValue"].currentValue !== 'undefined'){
        this.searchText = changes["searchValue"].currentValue;
      }
    }

    if (changes["channelValue"] !== undefined){
      if (typeof changes["channelValue"].currentValue !== 'undefined'){
        this.channelSelected = changes["channelValue"].currentValue;
        this.pubnubService.changeChannel(this.channelSelected);
      }
    }
    
    if (this.searchText !== "")
      this.messageWrappers =  this.messageWrappers.filter(e=>e.message.entities.hashtags.find(ht => ht.text === this.searchText) !== undefined );
    
  }
}
