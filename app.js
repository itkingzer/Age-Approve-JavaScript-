const inputField = document.getElementById('Age');
inputField.addEventListener('focus', function() {
    this.setAttribute('placeholder', 'โปรดป้อนอายุ');
});

inputField.addEventListener('blur', function() {
    this.setAttribute('placeholder', '');
});

function CheckAge(){
    let GetAge = document.getElementById("Age").value
    document.getElementById("Show_Age").innerHTML = "คุณอายุ "+GetAge+" ปี" 
    if(GetAge>= 13){
        document.getElementById("Approve").innerHTML = "ผ่านเกณฑ์"
        document.getElementById("Content").innerHTML = 
        "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/7YZCUpnaTfg?autoplay=1&si=UBY8DFjWbcm8bqvh\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>";
    
    
    }else
    {
         document.getElementById("Approve").innerHTML = "ไม่ผ่านเกณฑ์"
    }
}
