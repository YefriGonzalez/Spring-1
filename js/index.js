

function display(text) {
    document.getElementById("area1").style.display = "block";
    document.getElementById("area2").style.display="none";
    document.getElementById("textEncripted").innerHTML=text;
}

function encriptar() {
    const text = document.getElementById("text").value;
    var mapObj={
        a:"ai",
        e:"enter",
        i:"imes",
        o:"ober",
        u:"ufat"
    };
    
    result=text.replace(/a|e|i|o|u/g,function(matched){
        return mapObj[matched];
    });
    display(result);
}

function desencriptar() {
    const text = document.getElementById("text").value;
    var mapObj={
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u"
    }
    result=text.replace(/ai|enter|imes|ober|ufat/g,function(matched){
        return mapObj[matched];
    });
    display(result); 
}

function copy(){
    const content=document.getElementById("textEncripted").innerHTML;
    navigator.clipboard.writeText(content).then(()=>{

    });
}
