/**
 * Rule the words! KKuTu Online
 * Copyright (C) 2017 JJoriping(op@jjo.kr)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

// 모듈 호출

var colors = require('colors');
var fs = require("fs");
var tmp = "./log/"
function callLog(text){
	var date = new Date();
	var o = {
		year: 1900 + date.getYear(),
		month: date.getMonth() + 1,
		date: date.getDate(),
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}, i;
	
	for(i in o){
		if(o[i] < 10) o[i] = "0"+o[i];
		else o[i] = o[i].toString();
	}
	console.log("["+o.year+"-"+o.month+"-"+o.date+" "+o.hour+":"+o.minute+":"+o.second+"] "+text);
}
function saveLog(text){
	var date = new Date();
	var o = {
		year: 1900 + date.getYear(),
		month: date.getMonth() + 1,
		date: date.getDate(),
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}, i;
	fs.appendFile(tmp+o.year+"-"+o.month+"-"+o.date+".log","["+o.year+"-"+o.month+"-"+o.date+" "+o.hour+":"+o.minute+":"+o.second+"] "+text+"\n",function(err){
		if(err)throw err;
	});
}
exports.log = function(text){
	saveLog(text);
	callLog(text);
};
exports.info = function(text){
	saveLog(text.cyan);
	callLog(text.cyan);
};
exports.success = function(text){
	saveLog(text.green);
	callLog(text.green);
};
exports.alert = function(text){
	saveLog(text.yellow);
	callLog(text.yellow);
};
exports.warn = function(text){
	saveLog(text.black.bgYellow);
	callLog(text.black.bgYellow);
};
exports.error = function(text){
	saveLog(text.bgRed);
	callLog(text.bgRed);
};