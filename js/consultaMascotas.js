//Consultas filter table 

/*var myArray = [
    { 'NomApell': 'Angel Francisco', 'dir': 'calle 323', 'fed': '07/01/2021', 'feh': '08/01/2021', 'tel': '0982653159', 'tipM': 'Gato', 'sexM': 'Hembra' },
    { 'NomApell': 'Angel Francisco', 'dir': 'calle 323', 'fed': '07/01/2021', 'feh': '08/01/2021', 'tel': '0982653159', 'tipM': 'Gato', 'sexM': 'Hembra' },
    { 'NomApell': 'Angel Francisco', 'dir': 'calle 323', 'fed': '07/01/2021', 'feh': '08/01/2021', 'tel': '0982653159', 'tipM': 'Gato', 'sexM': 'Hembra' },
    { 'NomApell': 'Angel Francisco', 'dir': 'calle 323', 'fed': '07/01/2021', 'feh': '08/01/2021', 'tel': '0982653159', 'tipM': 'Gato', 'sexM': 'Hembra' },
    { 'NomApell': 'Angel Francisco', 'dir': 'calle 323', 'fed': '07/01/2021', 'feh': '08/01/2021', 'tel': '0982653159', 'tipM': 'Gato', 'sexM': 'Hembra' },
    { 'NomApell': 'Angel Francisco', 'dir': 'calle 323', 'fed': '07/01/2021', 'feh': '08/01/2021', 'tel': '0982653159', 'tipM': 'Gato', 'sexM': 'Hembra' },

]

const searFun = () =>{
    var search = document.getElementById("search-input").value.UpperCase();
}




buildTable(myArray);

function buildTable(data){

    var table = document.getElementById("myTable");

    table.innerHTML = '';
    for (var i = 0; i < data.length; i++){

        var row = `<tr>
                        <td>${data[i].NomApell}</td>
                        <td>${data[i].dir}</td>
                        <td>${data[i].fed}</td>
                        <td>${data[i].feh}</td>
                        <td>${data[i].tel}</td>
                        <td>${data[i].tipM}</td>
                        <td>${data[i].sexM}</td>
                    </tr>`
        table.innerHTML += row
    }
}*/

const searchFun = () =>{
    let search = document.getElementById("myInput").value.toUpperCase();
    let myTable = document.getElementById("myTable");

    let tr = myTable.getElementsByTagName("tr");

    for(var i = 0; i< tr.length; i++){
        let td = tr[i].getElementsByTagName("td")[5];

        if(td){
            let textValue = td.textContent || td.innerHTML;

            if(textValue.toUpperCase().indexOf(search) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}