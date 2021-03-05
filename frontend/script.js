function auto_grow(element) {
    element.style.height = "250px";
    element.style.height = (element.scrollHeight+5)+"px";
}

function onload() {
    auto_grow(document.getElementById("result"));
}

function insert_char(raw_str,inserted_char){
    return raw_str.split('').join(inserted_char);
}

function generate_default() {
    let origin_value = document.getElementById("result").value
    let default_char = document.getElementById("default-char").value[1];
    let result=insert_char(origin_value,default_char);
    document.getElementById("result").value = result;
}


function generate_custom() {
    let origin_value = document.getElementById("result").value
    let custom_char=document.getElementById("custom-char").value;

    let result=insert_char(origin_value,custom_char);
    document.getElementById("result").value = result;
}