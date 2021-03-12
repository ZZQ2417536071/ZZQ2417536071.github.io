$(function(){
  var NY = Math.round((new Date('4/17/2019 00:00:00')).getTime()/1000); //Date修改为你的建站时间。
  $('#runtime').flipcountdown({
    size:"xs",//可以自定义翻页计时器大小。从大到小依次是lg、md、sm、xs。
    tick:function(){
      var nol = function(h){
        return h>9?h:'0'+h;
      }
      var	range  	= Math.abs(Math.round((new Date()).getTime()/1000)-NY),
        secday = 86400, sechour = 3600,
        days 	= parseInt(range/secday),
        hours	= parseInt((range%secday)/sechour),
        min		= parseInt(((range%secday)%sechour)/60),
        sec		= ((range%secday)%sechour)%60;
      return nol(days)+' '+nol(hours)+' '+nol(min)+' '+nol(sec);
    }
  });
});