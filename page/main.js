window.addEventListener('load', () => {
    fetch('https://calendarific.com/api/v2/holidays?&api_key=b54d6a12b4fcbbf717dabb9eb7a0f764764f7568&country=TH&year=2022', {
        method: 'GET'
    }).then((res) => {
        return res.json();
    }).then((data) => {
        data.response.holidays.map(element => {
            console.log(element);
            show_content(element)
        });
    })
})

const show = document.getElementById('detail');
function show_content(element) {
    const div_show = document.createElement('div');
    const name = document.createElement('h3');
    const date = document.createElement('h6');
    const description = document.createElement('p');
    const type = document.createElement('p');
    name.innerHTML = element.name;
    date.innerHTML = element.date.iso;
    description.innerHTML = element.description;
    type.innerHTML = element.type;
    div_show.appendChild(name);
    div_show.appendChild(date);
    div_show.appendChild(description);
    div_show.appendChild(type);
  
    show.appendChild(div_show);
}


function logout() {
  localStorage.removeItem("jwt");
  window.location.href = "./login.html"
}
