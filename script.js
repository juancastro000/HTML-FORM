
const form = document.getElementById("ready");


form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    const formData = new FormData(event.target); 
    const formObj = {}; 

    formData.forEach((value, key) => {
        if (formObj[key]) {
           
            formObj[key] = [].concat(formObj[key], value);
        } else {
            formObj[key] = value;
        }
    });

    console.log("Form Data:", formObj);
});
