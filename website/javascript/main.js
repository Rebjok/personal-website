const counter = document.getElementById("views")
async function updateCounter(){
    let response = await fetch("https://7lv52qxkcqplyglvag2hgtzcvy0imohr.lambda-url.us-east-1.on.aws/")
    let data = await response.json()
    counter.innerHTML = `Views: ${data}`
}
updateCounter()
