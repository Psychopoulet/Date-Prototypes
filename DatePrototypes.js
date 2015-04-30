
// https://github.com/Psychopoulet/Date-Prototypes/blob/master/DatePrototypes.js

// from

	Date.prototype.fromSQLDateTime = function(p_sSQLDateTime) {

		return new Date(
				p_sSQLDateTime.substr(0, 4), p_sSQLDateTime.substr(5, 2) - 1, p_sSQLDateTime.substr(8, 2),
				p_sSQLDateTime.substr(11, 2), p_sSQLDateTime.substr(14, 2), p_sSQLDateTime.substr(17, 2)
			);

	};

// to

	Date.prototype.toDateSQL = function() {

		var sReturn = '', nMonth = this.getMonth() + 1, nDay = this.getDate();

			sReturn += this.getFullYear();
			sReturn += '-';
			sReturn += (9 < nMonth) ? nMonth : '0' + nMonth;
			sReturn += '-';
			sReturn += (9 < nDay) ? nDay : '0' + nDay;

		return sReturn;
	};

	Date.prototype.toTimeSQL = function() {

		var sReturn = '', nHours = this.getHours(), nMinutes = this.getMinutes(), nSecondes = this.getSeconds();

			sReturn += (9 < nHours) ? nHours : '0' + nHours;
			sReturn += ':';
			sReturn += (9 < nMinutes) ? nMinutes : '0' + nMinutes;
			sReturn += ':';
			sReturn += (9 < nSecondes) ? nSecondes : '0' + nSecondes;

		return sReturn;
	};

	Date.prototype.toDateTimeSQL = function() {

		var sReturn = '', nMonth = this.getMonth() + 1, nDay = this.getDate();

			sReturn += this.getFullYear();
			sReturn += '-';
			sReturn += (9 < nMonth) ? nMonth : '0' + nMonth;
			sReturn += '-';
			sReturn += (9 < nDay) ? nDay : '0' + nDay;

		return this.toDateSQL() + ' ' + this.toTimeSQL();
	};

// Day
	
	Date.prototype.yesterday = function() {
		return new Date(this.getFullYear(), this.getMonth(), this.getDate() - 1, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
	};
	
// Week
	
	Date.prototype.firstDateOfTheWeek = function() {
		var nDay = this.getDate(), nWeekDay = this.getDay();
			nDay -= (0 === nWeekDay) ? 6 : nWeekDay - 1;
		return new Date(this.getFullYear(), this.getMonth(), nDay, 0, 0, 0, 0);
	};
		
		Date.prototype.firstDateOfTheLastWeek = function() {
			var clReturn = this.firstDateOfTheWeek();
				clReturn.setDate(clReturn.getDate() - 7);
			return clReturn;
		};
		
	Date.prototype.lastDateOfTheWeek = function() {
		var nAdd = 0, nWeekDay = this.getDay();
			nAdd = (0 < nWeekDay) ? 7 - nWeekDay : 0;
		return new Date(this.getFullYear(), this.getMonth(), this.getDate() + nAdd, 23, 59, 59);
	};
		
		Date.prototype.lastDateOfTheLastWeek = function() {
			var clReturn = this.lastDateOfTheWeek();
				clReturn.setDate(clReturn.getDate() - 7);
			return clReturn;
		};
		
// Month
	
	Date.prototype.firstDateOfTheMonth = function() {
		return new Date(this.getFullYear(), this.getMonth(), 1, 0, 0, 0, 0);
	};
		
		Date.prototype.firstDateOfTheLastMonth = function() {
			
			var clReturn = this.firstDateOfTheMonth();
				clReturn.setMonth(clReturn.getMonth() - 1);
			return clReturn;
		};
		
	Date.prototype.lastDateOfTheMonth = function() {
		return new Date(this.getFullYear(), this.getMonth() + 1, 0, 23, 59, 59);
	};
		
		Date.prototype.lastDateOfTheLastMonth = function() {
			return new Date(this.getFullYear(), this.getMonth(), 0, 23, 59, 59);
		};
