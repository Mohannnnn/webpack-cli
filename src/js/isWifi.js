var isWifi = function(cb){
	var wifi = true;
    var ua = window.navigator.userAgent;
    var con = window.navigator.connection;
    // 如果是微信
    if(/MicroMessenger/.test(ua)){
        // 如果是微信6.0以上版本，用UA来判断
        if(/NetType/.test(ua)){ 
            if(ua.match(/NetType\/(\S)+/)[0].replace('NetType/','') != 'WIFI'){
                wifi = false;
            }
             
        // 如果是微信6.0以下版本，调用微信私有接口WeixinJSBridge
        }else{
            document.addEventListener("WeixinJSBridgeReady",function onBridgeReady(){
                WeixinJSBridge.invoke('getNetworkType',{},function(e){
                    if(e.err_msg != "network_type:wifi"){
                        wifi = false;
                    }
                });
            });
             
        }

       
    // 如果支持navigator.connection
    }else if(con){
        var network = con.type;
        if(network != "wifi" && network != "2" && network != "unknown"){  // unknown是为了兼容Chrome Canary
            wifi = false;
        }

        // con.addEventListener（'change'，changeHandler）;
    }
	window.networkWIFI = wifi;
}

module.exports = isWifi