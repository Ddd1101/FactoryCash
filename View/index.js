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