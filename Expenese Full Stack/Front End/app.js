const url = 'http://localhost:3000';

function postUser(obj){
    axios.post(`${url}/expenses`,obj) //url hereeeeeeeeeeeeeeee
    .then(res => {
        showOutput(res.data)
    })
}

function deleteUser(id){
    document.getElementById(id).remove();
    axios
    .delete(`${url}/expenses/${id}`) //url hereeeeeeeeeeeeee
}


function getUser(id){
    axios
    .get(`${url}/expenses/${id}`)//url hereeee
    .then(res => {
        editUser(res.data)
    })
}

function putUser(obj,id){
    axios
    .put(`${url}/expenses/${id}`,obj) //hereee urllllll
    .then(res => {
        document.querySelector('#expenseId').value = '';
        showOutput(res.data)
    })
}

function editUser(obj){
    document.querySelector('#amount').value = obj.amount;
    document.querySelector('#description').value = obj.description;
    document.querySelector('#cat').value = obj.category;
    document.querySelector('#expenseId').value = obj.id;
}

function showOutput(res){
    const li = document.createElement('li');
    li.id = res.id;
    li.innerHTML = `${res.amount}  ${res.description}  ${res.category}`;
    const xbtn = document.createElement('button');
    xbtn.classList.add('btn','btn-sm','btn-danger','me-2');
    xbtn.type = 'button';
    xbtn.id = 'xbtn';
    xbtn.textContent = 'X';

    const editbtn = document.createElement('button');
    editbtn.classList.add('btn','btn-sm','btn-primary');
    editbtn.type = 'button';
    editbtn.id = 'editbtn';
    editbtn.textContent = 'Edit';

    const div = document.createElement('div');
    div.appendChild(editbtn);
    div.appendChild(xbtn);
    div.classList.add('btn-group','float-end');

    li.appendChild(div);

    document.querySelector('#list').append(li);
}


document.addEventListener('DOMContentLoaded' , () => {

    axios
    .get(`${url}/expenses`) ///urllllllll hereeeeeeee
    .then(response => {
        if(response.data){
            response.data.forEach((res) => {
                showOutput(res)
            })
        }
    })
    .catch(err => console.log(err))

    document.querySelector('form').onsubmit = (e) => {
        e.preventDefault();
        const amount = document.querySelector('#amount').value;
        const description = document.querySelector('#description').value;
        const category = document.querySelector('#cat').value
        const expenseId = document.querySelector('#expenseId').value;
        let obj = {
            amount : amount,
            description  : description,
            category : category
        }

        if(expenseId != ''){
            putUser(obj,expenseId)
        }else {
            postUser(obj)
        }
        document.querySelector('#amount').value = '';
        document.querySelector('#description').value = '';
        document.querySelector('#cat').value = '';
    }

    document.querySelector('#list').onclick = (e) => {
        if (e.target.id === "xbtn"){
            const id = e.target.parentElement.parentElement.id;
            deleteUser(id)
        }
        else if(e.target.id === 'editbtn'){
            const id = e.target.parentElement.parentElement.id;
            document.getElementById(id).remove();
            getUser(id);
        }
    }

})