sap.ui.define([],
function(){
	return{
		
		fnOnFormatDate :function(date){
			
			var formattedDate = date.substring(0,2) + "/" + date.substring(2,4) + "/" + date.substring(4);
			return formattedDate;
			},
			
			fnReturnLang : function(lang){
				if (lang === "EN"){
					return "English" ;
				}
				else if (lang === "DE"){
					return "German" ;
				}
		    	else if (lang === "AR"){
		    		return "Arabic" ;
		    	}
		    	else {
		    		return "French";
		    	}
				
				
			}
			};
			});