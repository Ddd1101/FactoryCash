function add(){
    var li1 = document.getElementById('li1');
    var lis = document.createElement('li');
    var texts = document.createElement('input');
    texts.setAttribute('type', 'text');
    texts.setAttribute('name', 'man');
    lis.appendChild(texts);
    var tmp = document.getElementById("tmp");
    tmp.insertBefore(lis, li1);
}

function Count(){
    return 0;
}

function CalculateSum(){
    _table = document.getElementById("tb1");
    
    _sum = 0;

    for(var i = 1; i < _table.rows.length; ++i){
        if(_table.rows[i].cells.length == 4){
            _sum += _table.rows[i].cells[2].innerHTML * _table.rows[i].cells[3].childNodes[0].value;
        }else{
            _sum += _table.rows[i].cells[1].innerHTML * _table.rows[i].cells[2].childNodes[0].value
        }
    }

    document.forms["products"]["sumPrice"].value = _sum;
    
    return false;
}
