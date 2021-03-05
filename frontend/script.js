function auto_grow(element) {
    element.style.height = "250px";
    element.style.height = (element.scrollHeight+5)+"px";
}

function onload() {
    auto_grow(document.getElementById("result"));
}


function generate() {
    let default_char = document.getElementById("default-char").value;
    let custom_char=document.getElementById("custom-char").value;



    document.getElementById("result").value = result;
}