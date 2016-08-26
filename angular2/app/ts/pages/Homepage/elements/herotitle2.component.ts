import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';

declare var MessageService: any;


@Component({
	selector: 'herotitle2',
	templateUrl: '/app/html/pages/Homepage/elements/herotitle2.html',
})

export class HeroTitle2 {

	mobPhone = +64210387758;
	txtMsg = "This message was written as a constant.. hope it works";

	_messageService;
	herotitle2 = { 
		companyName : 'Final',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('herotitle2', this.herotitle2);
	
		this._messageService = new MessageService();
	}

	sendText() {
		var returnedData: any = this._messageService.sendTxt(this.mobPhone, this.txtMsg);
		var txtSuccess: any = returnedData.txtSuccess;
		var txtMessage: any = returnedData.txtMessage;
	}





}