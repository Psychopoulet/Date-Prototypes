
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
			return this.toDateSQL() + ' ' + this.toTimeSQL();
		};

	// FR
		
		Date.prototype.toDateFR = function() {

			var sReturn = '', nMonth = this.getMonth() + 1, nDay = this.getDate();

				sReturn += (9 < nDay) ? nDay : '0' + nDay;
				sReturn += '/';
				sReturn += (9 < nMonth) ? nMonth : '0' + nMonth;
				sReturn += '/';
				sReturn += this.getFullYear();

			return sReturn;
		};

		Date.prototype.toDateTimeFR = function() {
			return this.toDateFR() + ' ' + this.toTimeSQL();
		};

	// EN
		
		Date.prototype.toDateEN = function() {

			var sReturn = '', nMonth = this.getMonth() + 1, nDay = this.getDate();

				sReturn += (9 < nMonth) ? nMonth : '0' + nMonth;
				sReturn += '/';
				sReturn += (9 < nDay) ? nDay : '0' + nDay;
				sReturn += '/';
				sReturn += this.getFullYear();

			return sReturn;
		};

		Date.prototype.toDateTimeEN = function() {
			return this.toDateEN() + ' ' + this.toTimeSQL();
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
