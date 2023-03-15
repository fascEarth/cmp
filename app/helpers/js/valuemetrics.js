function inFormatNumOrg(value, type,decimal) {
	decimal = 2;
	if(value == 0 || value == null || value == undefined){
		return 0;
	}
	var final = parseFloat(value).toFixed(decimal);
	
	return final;
}

function inFormatNum(value,type,digits = 2) {
	if(value == 0 || value == null || value == undefined){
		return 0;
	}
	var final = parseFloat(value).toFixed(digits);
	
	return final;
}

function inFormatOrderNumPackets(num,type,digits = 0) {
	digits = 2;
	if(num == 0 || num == null || num == undefined){
		return '0';
	}

	
	var si = [{
			value: 1,
			symbol: "pps"
		},
		{
			value: 1E3,
			symbol: "kpps"
		},
		{
			value: 1E6,
			symbol: "Mpps"
		},
		{
			value: 1E9,
			symbol: "Bpps"
		},
		{
			value: 1E12,
			symbol: "Tpps"
		},
		{
			value: 1E15,
			symbol: "Ppps"
		},
		{
			value: 1E18,
			symbol: "Epps"
		}
	];
	var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	var i;
	for (i = si.length - 1; i > 0; i--) {
		if (num >= si[i].value) {
			break;
		}
	}

	var final = (num / si[i].value).toFixed(digits).replace(rx, "$1") + ' ' + si[i].symbol;
	
	return final;
}

function format_si(value,type, round = 1) {	
		round = 2;	
	
	if(value == 0 || value == null || value == undefined){
		return '0';
	}

	if (value == 0) {
		return value;
	}
	var ext = '';
	if (value >= 1) {
		var sizes = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
		ext = sizes[0];
		for (i = 1;
			((i < sizes.length) && (value >= 1000)); i++) {
			value = value / 1000;
			ext = sizes[i];
		}
	} else if (value <= 0.9) {
		var sizes = ['', 'm', 'u', 'n'];
		ext = sizes[0];
		for (i = 1;
			((i < sizes.length) && (value != 0) && (value <= 0.9)); i++) {
			value = value * 1000;
			ext = sizes[i];
		}
	}
	value = parseFloat(value);
	var final = value.toFixed(round) + ' ' + ext;
	
	return final;
}

function inFormatOrderNum(num,type,digits =0) {
	digits = 2;
	if(num == 0 || num == null || num == undefined){
		return 0;
	}

	var si = [{
			value: 1E-24,
			symbol: ""
		},
		{
			value: 1E-21,
			symbol: "z"
		},
		{
			value: 1E-18,
			symbol: "a"
		},
		{
			value: 1E-15,
			symbol: "f"
		},
		{
			value: 1E-12,
			symbol: "p"
		},
		{
			value: 1E-9,
			symbol: "n"
		},
		{
			value: 1E-6,
			symbol: "µ"
		},
		{
			value: 1E-3,
			symbol: "m"
		},

		{
			value: 1E0,
			symbol: ""
		},

		{
			value: 1E3,
			symbol: "k"
		},
		{
			value: 1E6,
			symbol: "M"
		},
		{
			value: 1E9,
			symbol: "G"
		},
		{
			value: 1E12,
			symbol: "T"
		},
		{
			value: 1E15,
			symbol: "P"
		},
		{
			value: 1E18,
			symbol: "E"
		},
		{
			value: 1E21,
			symbol: "Z"
		},
		{
			value: 1E24,
			symbol: "Y"
		}
	];
	var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	var i;
	for (i = si.length - 1; i > 0; i--) {
		if (num >= si[i].value) {
			break;
		}
	}
	var final = (num / si[i].value).toFixed(digits).replace(rx, "$1") + ' ' + si[i].symbol;
	
	return final;

}

function inFormatOrderNumORiginal(num,type,digits =0) {
	//digits = 2;
	if(num == 0 || num == null || num == undefined){
		return 0;
	}

	var si = [{
			value: 1E-24,
			symbol: ""
		},
		{
			value: 1E-21,
			symbol: "z"
		},
		{
			value: 1E-18,
			symbol: "a"
		},
		{
			value: 1E-15,
			symbol: "f"
		},
		{
			value: 1E-12,
			symbol: "p"
		},
		{
			value: 1E-9,
			symbol: "n"
		},
		{
			value: 1E-6,
			symbol: "µ"
		},
		{
			value: 1E-3,
			symbol: "m"
		},

		{
			value: 1E0,
			symbol: ""
		},

		{
			value: 1E3,
			symbol: "k"
		},
		{
			value: 1E6,
			symbol: "M"
		},
		{
			value: 1E9,
			symbol: "G"
		},
		{
			value: 1E12,
			symbol: "T"
		},
		{
			value: 1E15,
			symbol: "P"
		},
		{
			value: 1E18,
			symbol: "E"
		},
		{
			value: 1E21,
			symbol: "Z"
		},
		{
			value: 1E24,
			symbol: "Y"
		}
	];
	var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	var i;
	for (i = si.length - 1; i > 0; i--) {
		if (num >= si[i].value) {
			break;
		}
	}
	var final = (num / si[i].value).toFixed(digits).replace(rx, "$1") + ' ' + si[i].symbol;
	
	return final;

}

function formatBitsDtransferRateWithoutLabel(bytes, decimals) {


	bytes = bytes * 8;
	bytes = Math.round(bytes);

	if (bytes == 0) return '0';
	var k = 1000,
		dm = decimals <= 0 ? 0 : decimals || 2,
		sizes = ['bps', 'Kbps', 'Mbps', 'Gbps', 'Tbps', 'Pbps', 'Ebps', 'Zbps', 'Ybps'],
		i = Math.floor(Math.log(bytes) / Math.log(k));
	if (sizes[i] == 'Kbps' || sizes[i] == 'bps') {
		dm = 0;
	}
	return (bytes / Math.pow(k, i)).toFixed(dm);

}
function commonBytesConv(value,label){
	var bytes = "";
	if(label == "bps"){
		bytes = (value/8)*1E0;
	}else if(label == "Kbps"){
		bytes = (value/8)*1E3;
	}else if(label == "Mbps"){
		bytes = (value/8)*1E6;
	}else if(label == "Gbps"){
		bytes = (value/8)*1E9;
	}else if(label == "Tbps"){
			bytes = (value/8)*1E12;
	}
	return bytes;
}
function inFormatBitsDtransferRate(bytes,type, decimals) {
	decimals = 2;
	if(bytes == 0 || bytes == null || bytes == undefined){
		return '0 bps';
	}

	bytes = bytes * 8;
	

	if (bytes == 0) return '0 bps';
	var k = 1000,
		dm = decimals <= 0 ? 0 : decimals || 2,
		sizes = ['bps', 'Kbps', 'Mbps', 'Gbps', 'Tbps', 'Pbps', 'Ebps', 'Zbps', 'Ybps'],
		i = Math.floor(Math.log(bytes) / Math.log(k));
	if (sizes[i] == 'Kbps' || sizes[i] == 'bps') {
		dm = 0;
	}
	sizes[i] = ((sizes[i])?sizes[i]:"");
	var final = (bytes / Math.pow(k, i)).toFixed(dm) + ' ' + sizes[i];
	
	return final;

}

function inFormatBitsDtransferRateNonMultiply(bytes, decimals) {



	bytes = Math.round(bytes);

	if (bytes == 0) return '0 bps';
	var k = 1000,
		dm = decimals <= 0 ? 0 : decimals || 2,
		sizes = ['bps', 'Kbps', 'Mbps', 'Gbps', 'Tbps', 'Pbps', 'Ebps', 'Zbps', 'Ybps'],
		i = Math.floor(Math.log(bytes) / Math.log(k));
	if (sizes[i] == 'Kbps' || sizes[i] == 'bps') {
		dm = 0;
	}
	return (bytes / Math.pow(k, i)).toFixed(dm) + ' ' + sizes[i];

}

function inFormatBitsDtransferRateConV(bytes, type) {
	var calc = 0;
	if (type == 'Kbps') {
		calc = 1000
	} else if (type == 'Mbps') {
		calc = 1000000;
	} else if (type == 'Gbps') {
		calc = 1000000000;
	} else if (type == 'Tbps') {
		calc = 1000000000000;
	}
	return (bytes * calc) / 8;

}

function inFormatBitsDstorageRate(bytes, type,decimals) {
	
	decimals = 2;

	if(bytes == 0 || bytes == null || bytes == undefined){
		return '0 B';
	}
	

	if (bytes == 0) return '0 B';
	var k = 1024,
		dm = decimals <= 0 ? 0 : decimals || 2,
		sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],

		i = Math.floor(Math.log(bytes) / Math.log(k));

	if (sizes[i] == 'KB' || sizes[i] == 'B') {
		dm = 0;
	}
	sizes[i] = ((sizes[i])?sizes[i]:"");
	var final = (bytes / Math.pow(k, i)).toFixed(dm) + ' ' + sizes[i];
	
	return final;
}

function inFormatBitsDstorageRateVolume(bytes,decimals) {
	if(bytes == 0 || bytes == null || bytes == undefined){
		return '0 B';
	}
	
	decimals = 2;

	if (bytes == 0) return '0 B';
	var k = 1000,
		dm = decimals <= 0 ? 0 : decimals || 2,
		sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],

		i = Math.floor(Math.log(bytes) / Math.log(k));

	if (sizes[i] == 'KB' || sizes[i] == 'B') {
		dm = 0;
	}
	sizes[i] = ((sizes[i])?sizes[i]:"");
	var final = (bytes / Math.pow(k, i)).toFixed(dm) + ' ' + sizes[i];
	
	return final;
}


function inFormatKBitsDstorageRateVolume(bytes,decimals) {
	if(bytes == 0 || bytes == null || bytes == undefined){
		return '0 B';
	}
	

	bytes = bytes *1000;
	decimals = 2;

	if (bytes == 0) return '0 B';
	var k = 1000,
		dm = decimals <= 0 ? 0 : decimals || 2,
		sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],

		i = Math.floor(Math.log(bytes) / Math.log(k));

	if (sizes[i] == 'KB' || sizes[i] == 'B') {
		dm = 0;
	}
	sizes[i] = ((sizes[i])?sizes[i]:"");
	var final = (bytes / Math.pow(k, i)).toFixed(dm) + ' ' + sizes[i];
	
	return final;
}

function formatBitsDtransferRateLabelOnly(bytes, decimals) {


	bytes = bytes * 8;
	bytes = Math.round(bytes);
	decimals = 2;
	if (bytes == 0) return '';
	var k = 1000,
		dm = decimals <= 0 ? 0 : decimals || 2,
		sizes = ['bps', 'Kbps', 'Mbps', 'Gbps', 'Tbps', 'Pbps', 'Ebps', 'Zbps', 'Ybps'],
		i = Math.floor(Math.log(bytes) / Math.log(k));
	if (sizes[i] == 'Kbps' || sizes[i] == 'bps') {
		dm = 0;
	}
	return sizes[i];

}

function inFormatPercent(value,type,digits = 2) {

	if(value == 0 || value == null || value == undefined){
		return '0 %';
	}


	if(typeof value == 'number' && !isNaN(value)){

        
        if (Number.isInteger(value)) {
            
        }
        else {
			
				value = value.toFixed(2);
			
            
        }

    }else{
			if(typeof value == "string"){
				value = parseFloat(value);
			}
		}

	return value + ` %`;
}

function inFormatNumOld(value,type,digits = 0) {
	digits = 2;
	if(value == 0 || value == null || value == undefined){
		return '0';
	}
	var final = parseFloat(value / 8).toFixed(digits);
	
	return final;
}

function inFormatmilliseconds(value,type,digits = 2) {
	digits = 2;
	
	if(value == 0 || value == null || value == undefined){
		return '0 ms';
	}
	var final = parseFloat(value).toFixed(digits) + ` ms`;
	
	
	return final;
}

function inFormatmillisecondsAndseconds(value,type,digits = 2) {
	digits = 2;
	if(value == 0 || value == null || value == undefined){
		return '0 ms';
	}
	var return_str = value + ` ms`;
	


	
		if (value <= 999) {
			return_str = parseFloat(value).toFixed(digits) + ` ms`;
		} else if (value >= 1000 && value < 60000) {
			return_str = parseFloat(value / 1000).toFixed(digits) + ` s`;
		} else {
			return_str = parseFloat(value / 60000).toFixed(digits) + ` m`;
		}
	
	return return_str;
}

function inFormatBytesDtransferRate(bytes,type, decimals) {
	decimals = 2;
	if(bytes == 0 || bytes == null || bytes == undefined){
		return '0 bps';
	}

	

	if (bytes == 0) return '0 bps';
	var k = 1000,
		dm = decimals <= 0 ? 0 : decimals || 2,
		sizes = ['bps', 'Kbps', 'Mbps', 'Gbps', 'Tbps', 'Pbps', 'Ebps', 'Zbps', 'Ybps'],
		i = Math.floor(Math.log(bytes) / Math.log(k));
	if (sizes[i] == 'Kbps' || sizes[i] == 'bps') {
		dm = 0;
	}
	sizes[i] = ((sizes[i])?sizes[i]:"");
	var final = (bytes / Math.pow(k, i)).toFixed(dm) + ' ' + sizes[i];
	
	return final;

}

function customFormatPercent(val,type,digits = 0) {
	if(val == 0 || val == null || val == undefined){
		return '0 %';
	}
	return val.toFixed(2) + ` %`;
}

function metricsTypeNew(val) {
	var def = {
        "PERCENT": "inFormatPercent",
        "MHz": "inFormatOrderNum",
        "KBPS": "inFormatBitsDtransferRate",


		"number": "inFormatOrderNum",
		"unordernumber": "inFormatNum",
		"dataTransferRate": "inFormatBitsDtransferRate",
		"digitalStorage": "inFormatBitsDstorageRate",
		"digitalStorageVolume": "inFormatBitsDstorageRateVolume",
		
		"numOld": "inFormatNumOld",
		"dataTransferRateBytes": "inFormatBytesDtransferRate",
		"fms": "inFormatmilliseconds",
		"fmstos": "inFormatmillisecondsAndseconds",
		"customFormatPercent": "customFormatPercent",
		"packets": "inFormatOrderNumPackets",
		"sinumber": "format_si",
		"plnumber": "inFormatNumOrg"
	};
	return (val) ? def[val] : "inFormatNum";
}