var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    for(var i=0;i<250;i++){
        var cname=data[i].name;
        var lang=data[i].latlng;
        weatherdata(cname,...lang);
    }
    function weatherdata(name,lat,lang){
        console.log(name+" "+lat+" "+lang);
        var req=new XMLHttpRequest ();
        var url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'139&appid=192886caf9a268852870493c129bc73d';
        req.open('GET',url,true);
        req.sent();
request.onload=function(){
    var data=JSON.prase(this.response);
    console.log('${name} :${data.main.temp}')
}

    }
    
}
