var todos = [
    {id:0,text:"my todo"},
    {id:1,text:"i am a web developer"},
    {id:2,text:"this is my project"},
];


var disp = document.querySelector(".todos");

function rerender(){
    disp.innerHTML = "";
    todos.map(item=>{
        var todo = document.createElement("li");
        todo.innerHTML = `<p>${item.text}</p> <div> <button onclick="edit(${item.id})">Edit</button> <button onclick="deleteItem(${item.id})">Delete</button> </div>`
        disp.append(todo);
    });
}

rerender()

function edit(id){
    var newTodos = [...todos];
    var text = prompt('enter new text? ');
    newTodos[id].text = text;
    rerender()
}


function deleteItem(id){
    todos.splice(todos[id],1);
    alert(id)
    rerender()
}

document.querySelector(".add").addEventListener('click',()=>{
        var text = document.querySelector('input');
        todos.push({
            id: todos.length,
            text: text.value
        })
        rerender();
});
