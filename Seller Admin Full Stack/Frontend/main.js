document.addEventListener('DOMContentLoaded',() => {

    var url = 'http://localhost:3000'
  
    async function always_run(cb){
        try{
            const response = await axios.get(url);
            const data = await response.data;
            if(data){
                data.forEach(obj => {
                    cb(obj)
                })
            }
        }catch(err){
            console.log(err);
        }   
    }
    always_run(showOutput);

    document.querySelector('form').onsubmit = (e) =>{
        e.preventDefault();
        const product = document.querySelector('#product').value;
        const price = document.querySelector('#price').value;
        const category = document.querySelector('#category').value;

        const obj = {
            "product" : product,
            "price" :  price,
            "category" : category
        } 
        postProduct(obj,showOutput);
    }

    document.querySelector('.products').onclick = (e) => {
        if(e.target.id === 'del'){
            const li = e.target.parentNode
            const id = li.id
            li.remove()
            deleteProduct(id)
        }
    }

    function showOutput(obj){
        const li = document.createElement('li');
        li.textContent = obj.product + "  " + obj.price;
        li.classList.add('list-group-item')
        li.id = obj.id

        btn = document.createElement('button');
        btn.innerHTML = "delete" ;
        btn.classList.add('btn', 'btn-sm','btn-danger','float-end');
        btn.id = 'del'
        li.appendChild(btn);
        document.querySelector(`#${obj.category}`).appendChild(li)

    }


    async function postProduct(obj,cb){
        try{
            //url hereeeeeeeeeeeeeeeeeeeeeeeeeee
            const response = await axios.post(url,obj)
            const data = await response.data
            cb(data);
        }catch(err){
            console.log(err);
        }
    }

    async function deleteProduct(id){
        try{
            const response = await axios.delete(`${url}/${id}`)
        }catch(error){
            console.log(error);
        }
    }
});