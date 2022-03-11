var str = "";

var _sum = 0;

function CalculateSum(){
    str = "日期 ：" + $('#date_info').val() + "\n";
    str = str + "客户 ： " + $('#customers option:selected').val() + "\n"
    _table = document.getElementById("tb1");
    
    _sum = 0;

    for(var i = 1; i < _table.rows.length; ++i){
        if(_table.rows[i].cells.length == 4){
            str += "\n-------------------------------------------------\n";
            str = str + "品名 ： " + _table.rows[i].cells[0].innerHTML + "\n";
            _sum += _table.rows[i].cells[1].innerHTML * _table.rows[i].cells[3].childNodes[0].value;
            if( _table.rows[i].cells[3].childNodes[0].value != ""){
                str = str + _table.rows[i].cells[2].innerHTML + ": " + _table.rows[i].cells[3].childNodes[0].value + "\n";
            }else{
                str = str + _table.rows[i].cells[2].innerHTML + ": 0 \n";
            }
        }else{
            _sum += _table.rows[i].cells[0].innerHTML * _table.rows[i].cells[2].childNodes[0].value;
            if( _table.rows[i].cells[2].childNodes[0].value != ""){
                str = str + _table.rows[i].cells[1].innerHTML + ": " + _table.rows[i].cells[2].childNodes[0].value + "\n";
            }else{
                str = str + _table.rows[i].cells[1].innerHTML + ": 0 \n";
            }
        }
    }

    document.forms["products"]["sumPrice"].value = _sum;
    
    
    return false;
}

function ReLoadPage(){
    window.location.replace("http://ddd1101.github.io/FactoryCash/View/")
}


////////////////// 保存txt



function fakeClick(obj) { 
    var ev = document.createEvent("MouseEvents");
    ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    obj.dispatchEvent(ev);
}

function exportRaw(name, data) {
    var urlObject = window.URL || window.webkitURL || window;
    var export_blob = new Blob([data]);
    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    fakeClick(save_link);
}

function saveFile(){
    var fileName  = $('#date_info').val() + "_" + $('#customers option:selected').val();
    str += "\n-------------------------------------------------\n";
    str = str + "\n __货款总额__ : " + document.forms["products"]["sumPrice"].value + " 元"
    if(str === "" || _sum == 0){
        alert("无计算结果");
    }else{
        exportRaw(fileName, str);
    }
}


