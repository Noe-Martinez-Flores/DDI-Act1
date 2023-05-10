const printData = () => {
    fetch("https://reqres.in/api/users?page=1").then( resp => resp.json() ).then( resp => {
        const { data } = resp
        const card = document.querySelector("#card");
        data.forEach(element => {
            card.innerHTML += `
            <div class = "card col-4">
                <div class="card-body">
                <h5 class="card-title">${element.first_name}</h5>
                <p> ${element.email}</p>
                <button type = "button" id="buttonDetails" class="btn btn-primary" onclick = "details(${element.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">Detalles</button>
            </div>
            `;
        });
    });
}


const details  = (id) =>  {
    fetch("https://reqres.in/api/users/"+id).then( resp => resp.json() ).then( resp => {
        const { data } = resp;
        const modal = document.querySelector("#exampleModal");
        modal.innerHTML = `
        <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${data.first_name}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div>
                        <img
                            src = "${data.avatar}"
                            style = "border-radius : 50%"
                        />
                        <p> Nombre :  ${data.first_name} </p>
                        <p> Apellido :  ${data.last_name} </p>
                        <p> Email :  ${data.email} </p>
                        <p> ID :  ${data.id} </p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
        `;
    });

}

printData();