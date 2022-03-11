
function CalculateSum(){
    _table = document.getElementById("tb1");
    
    _sum = 0;

    for(var i = 1; i < _table.rows.length; ++i){
        if(_table.rows[i].cells.length == 4){
            _sum += _table.rows[i].cells[1].innerHTML * _table.rows[i].cells[3].childNodes[0].value;
        }else{
            _sum += _table.rows[i].cells[0].innerHTML * _table.rows[i].cells[2].childNodes[0].value
        }
    }

    document.forms["products"]["sumPrice"].value = _sum;
    var thisTime = getCurrentTime();
    
    
    return false;
}

function ReLoadPage(){
    window.location.replace("http://ddd1101.github.io/FactoryCash/View/")
}

/**
 * 获取当前时间 格式：yyyy-MM-dd HH:MM:SS
 */
 function getCurrentTime() {
    var date = new Date();//当前时间
    var month = zeroFill(date.getMonth() + 1);//月
    var day = zeroFill(date.getDate());//日
    var hour = zeroFill(date.getHours());//时
    var minute = zeroFill(date.getMinutes());//分
    var second = zeroFill(date.getSeconds());//秒
    
    //当前时间
    var curTime = date.getFullYear() + "-" + month + "-" + day
            + " " + hour + ":" + minute + ":" + second;
    
    return curTime;
}
 
/**
 * 补零
 */
function zeroFill(i){
    if (i >= 0 && i <= 9) {
        return "0" + i;
    } else {
        return i;
    }
}


