		// PROTECTED REGION ID _UloJQIC_Eea2S59Os6LSKA.getLentBooksBinding ENABLED START
		this._dataService.getLendings(this._authenticationService.getId()).then(lendings => this.lentBooksBinding = lendings);
		// PROTECTED REGION END

		// PROTECTED REGION ID _JjYHUIDAEea2S59Os6LSKA.extendBookAction ENABLED START
		this.vDueDate+=10;
		// PROTECTED REGION END