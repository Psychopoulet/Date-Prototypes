
// https://github.com/Psychopoulet/Date-Prototypes/blob/master/DatePrototypes.js

// from

	// SQL

		Date.prototype.fromSQLDate = function(p_sSQLDate) {
			return new Date(
					p_sSQLDate.substr(0, 4), p_sSQLDate.substr(5, 2) - 1, p_sSQLDate.substr(8, 2)
				);
		};

		Date.prototype.fromSQLDateTime = function(p_sSQLDateTime) {
			return new Date(
					p_sSQLDateTime.substr(0, 4), p_sSQLDateTime.substr(5, 2) - 1, p_sSQLDateTime.substr(8, 2),
					p_sSQLDateTime.substr(11, 2), p_sSQLDateTime.substr(14, 2), p_sSQLDateTime.substr(17, 2)
				);
		};

	// FR
		
		Date.prototype.fromFRDate = function(p_sFRDate) {
			return new Date(
					p_sFRDate.substr(6, 4), p_sFRDate.substr(3, 2) - 1, p_sFRDate.substr(0, 2)
				);
		};

		Date.prototype.fromFRDateTime = function(p_sFRDateTime) {
			return new Date(
					p_sFRDateTime.substr(6, 4), p_sFRDateTime.substr(3, 2) - 1, p_sFRDateTime.substr(0, 2),
					p_sFRDateTime.substr(11, 2), p_sFRDateTime.substr(14, 2), p_sFRDateTime.substr(17, 2)
				);
		};

	// EN
		
		Date.prototype.fromENDate = function(p_sENDate) {
			return new Date(
					p_sENDate.substr(6, 4), p_sENDate.substr(0, 2) - 1, p_sENDate.substr(3, 2)
				);
		};

		Date.prototype.fromENDateDateTime = function(p_sENDateTime) {
			return new Date(
					p_sENDate.substr(6, 4), p_sENDate.substr(0, 2) - 1, p_sENDate.substr(3, 2),
					p_sENDateTime.substr(11, 2), p_sENDateTime.substr(14, 2), p_sENDateTime.substr(17, 2)
				);
		};

// to

	// SQL
		
		Date.prototype.toDateSQL = function() {

			var sResult = '', nMonth = this.getMonth() + 1, nDay = this.getDate();

				sResult += this.getFullYear();
				sResult += '-';
				sResult += (9 < nMonth) ? nMonth : '0' + nMonth;
				sResult += '-';
				sResult += (9 < nDay) ? nDay : '0' + nDay;

			return sResult;

		};

		Date.prototype.toTimeSQL = function(p_bWithSeconds) {

			var sResult = '', nHours = this.getHours(), nMinutes = this.getMinutes(), nSecondes = this.getSeconds();

				sResult += (9 < nHours) ? nHours : '0' + nHours;
				sResult += ':';
				sResult += (9 < nMinutes) ? nMinutes : '0' + nMinutes;

				if ('undefined' === typeof p_bWithSeconds || p_bWithSeconds) {
					sResult += ':';
					sResult += (9 < nSecondes) ? nSecondes : '0' + nSecondes;
				}

			return sResult;

		};

		Date.prototype.toDateTimeSQL = function(p_bWithSeconds) {
			return this.toDateSQL() + ' ' + this.toTimeSQL(p_bWithSeconds);
		};

	// FR
		
		Date.prototype.toDateFR = function() {

			var sResult = '', nMonth = this.getMonth() + 1, nDay = this.getDate();

				sResult += (9 < nDay) ? nDay : '0' + nDay;
				sResult += '/';
				sResult += (9 < nMonth) ? nMonth : '0' + nMonth;
				sResult += '/';
				sResult += this.getFullYear();

			return sResult;

		};

		Date.prototype.toDateTimeFR = function(p_bWithSeconds) {
			return this.toDateFR() + ' ' + this.toTimeSQL(p_bWithSeconds);
		};

	// EN
		
		Date.prototype.toDateEN = function() {

			var sResult = '', nMonth = this.getMonth() + 1, nDay = this.getDate();

				sResult += (9 < nMonth) ? nMonth : '0' + nMonth;
				sResult += '/';
				sResult += (9 < nDay) ? nDay : '0' + nDay;
				sResult += '/';
				sResult += this.getFullYear();

			return sResult;

		};

		Date.prototype.toDateTimeEN = function(p_bWithSeconds) {
			return this.toDateEN() + ' ' + this.toTimeSQL(p_bWithSeconds);
		};
		
// Day
	
	// defined date

		Date.prototype.inXDays = function(p_nXDays) {
			return new Date(this.getFullYear(), this.getMonth(), this.getDate() + p_nXDays, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
		};
		
		Date.prototype.XDaysAgo = function(p_nXDays) {
			return new Date(this.getFullYear(), this.getMonth(), this.getDate() - p_nXDays, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
		};
		
	// today
		
		Date.prototype.today = function() {
			return new Date();
		};
		
		Date.prototype.tomorow = function() {
			return this.today().inXDays(1);
		};
		
		Date.prototype.yesterday = function() {
			return this.today().XDaysAgo(1);
		};
		
// Week
	
	Date.prototype.firstDateOfTheWeek = function() {
		var nDay = this.getDate(), nWeekDay = this.getDay();
			nDay -= (0 === nWeekDay) ? 6 : nWeekDay - 1;
		return new Date(this.getFullYear(), this.getMonth(), nDay, 0, 0, 0, 0);
	};
		
		Date.prototype.firstDateOfTheLastWeek = function() {
			var clResult = this.firstDateOfTheWeek();
				clResult.setDate(clResult.getDate() - 7);
			return clResult;
		};
		
	Date.prototype.lastDateOfTheWeek = function() {
		var nAdd = 0, nWeekDay = this.getDay();
			nAdd = (0 < nWeekDay) ? 7 - nWeekDay : 0;
		return new Date(this.getFullYear(), this.getMonth(), this.getDate() + nAdd, 23, 59, 59);
	};
		
		Date.prototype.lastDateOfTheLastWeek = function() {
			var clResult = this.lastDateOfTheWeek();
				clResult.setDate(clResult.getDate() - 7);
			return clResult;
		};
		
// Month
	
	Date.prototype.firstDateOfTheMonth = function() {
		return new Date(this.getFullYear(), this.getMonth(), 1, 0, 0, 0, 0);
	};
		
		Date.prototype.firstDateOfTheLastMonth = function() {
			var clResult = this.firstDateOfTheMonth();
				clResult.setMonth(clResult.getMonth() - 1);
			return clResult;
		};
		
	Date.prototype.lastDateOfTheMonth = function() {
		return new Date(this.getFullYear(), this.getMonth() + 1, 0, 23, 59, 59);
	};
		
		Date.prototype.lastDateOfTheLastMonth = function() {
			return new Date(this.getFullYear(), this.getMonth(), 0, 23, 59, 59);
		};
