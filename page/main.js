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



    const show = document.getElementById('searchButton');

    function show_content(element) {
        const div_show = document.createElement('div');
        const name = document.createElement('h2');
        const description = document.createElement('h2');
        const date = document.createElement('h2');
        name.innerHTML = element.name;
        description.innerHTML = element.description;
        date.innerHTML = element.date.iso;
        div_show.appendChild(name);
        div_show.appendChild(description);
        div_show.appendChild(date);
        
        show.appendChild(div_show);
    
    }