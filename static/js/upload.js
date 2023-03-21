function uploadFile(event) {
    console.log("upload file start");
    let target = event.target || event.srcElement || event.currentTarget;
    let file = target.files[0];
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/uploads/" + file.name, true);
    xhr.setRequestHeader("Content-Type", "application/octate-stream");
    xhr.onreadystatechange = function (data) {
        event = null;
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callBackFunction(this.responseText);
            } else {
                console.log("error");
            }
        }
    }
    xhr.send(file);
    event.target.value = '';
}

function callBackFunction(data) {
    console.log(data);
    document.querySelector(".icon-image").src = "images/" + data;
    document.querySelector("input[name = 'imagename']").value = data;
}

function submitForm(event) {
    event.preventDefault();
    let form = document.querySelector("form").elements;
    console.log(form);

    fetch("/save-form", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify({
            "input-0": form[0].value,
            "input-1": form[1].value,
            "input-2": form[2].value,
            "input-3": form[3].value
        })
    })
        .then(res => res.text())
        .then(res => console.log(res));
}

document.querySelector("#upload").addEventListener("change", uploadFile);
document.querySelector("form").addEventListener("submit", submitForm);