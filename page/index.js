var jwt = localStorage.getItem("jwt");
        if (jwt == null){
            window.location.href = './login.html';
        }

        function loadUser(){
            const xhttp = new XMLHttpRequest();
            xhttp.open("GET", "https://www.mecallapi.com/api/auth/user");
            xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhttp.setRequestHeader("Authorization", "Bearer "+jwt);
            xhttp.send();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4){
                    const objects = JSON.parse(this.responseText);
                    console.log(objects)
                    if(objects['status']== 'ok'){
                        const user = objects['user'];
                        document.getElementById("fname").innerHTML = user["fname"];
                        document.getElementById("avatar").src = user["avatar"];
                        document.getElementById("username").innerHTML = user["username"];
                    }
                }
            }
        }

        loadUser();


        var selectedRow = null;
        function onFormSubmit(e){
            event.preventDefault();
            var formData = readFormData();
            if(selectedRow === null){
                insertNewRecord(formData);
            }
            else{
                updateRecord(formData);
            }
            resetForm();
        }
        
        //Retrieve the data
        function readFormData(){
            var formData = {};
            formData["id"] = document.getElementById("id").value;
            formData["holiday"] = document.getElementById("holiday").value;
            formData["date"] = document.getElementById("date").value;
            formData["description"] = document.getElementById("description").value;
            return formData;
        }
        
        //Insert the data
        function insertNewRecord(data){
            var table = document.getElementById("holidayList").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            var cell1 = newRow.insertCell(0);
                cell1.innerHTML = data.id;
            var cell2 = newRow.insertCell(1);
                cell2.innerHTML = data.holiday;
            var cell3 = newRow.insertCell(2);
                cell3.innerHTML = data.date;
            var cell4 = newRow.insertCell(3);
                cell4.innerHTML = data.description;
            var cell5 = newRow.insertCell(4);
                cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
        }
        
        //Edit the data
        function onEdit(td){
            selectedRow = td.parentElement.parentElement;
            document.getElementById('id').value = selectedRow.cells[0].innerHTML;
            document.getElementById('holiday').value = selectedRow.cells[1].innerHTML;
            document.getElementById('date').value = selectedRow.cells[2].innerHTML;
            document.getElementById('description').value = selectedRow.cells[3].innerHTML;
        }
        
        function updateRecord(formData){
            selectedRow.cells[0].innerHTML = formData.id
            selectedRow.cells[1].innerHTML = formData.holiday;
            selectedRow.cells[2].innerHTML = formData.date;
            selectedRow.cells[3].innerHTML = formData.description;
        }
        
        //Delete the data
        function onDelete(td){
            if(confirm('Do you want to delete this record?')){
                row = td.parentElement.parentElement;
                document.getElementById('holidayList').deleteRow(row.rowIndex);
            }
            resetForm();
        }
        
        //Reset the data
        function resetForm(){
            document.getElementById('id').value = '';
            document.getElementById('holiday').value = '';
            document.getElementById('date').value = '';
            document.getElementById('description').value = '';
        }