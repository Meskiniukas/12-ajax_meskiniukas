// function ajax() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         console.log(this.readyState);

//         if (this.readyState === 4 && this.status === 200) {
//             const response = this.responseText;

//             const obj = JSON.parse(response);

//             console.log(obj);
//         }
//     };
//     xhttp.open("GET", "https://front-end-by-rimantas.github.io/24-grupe-ajax/api/rikis.json", true);
//     xhttp.send();
// }


// ajax()

function ajax() {


    const url = "https://front-end-by-rimantas.github.io/24-grupe-ajax/api/rikis.json";
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
       }};
    
    var data = `{
      "Id": 78912,
      "Customer": "Jason Sweet",
      "Quantity": 1,
      "Price": 18.00
    }`;
    
    xhr.send(data);
    }
    ajax()