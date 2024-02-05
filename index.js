let name=document.getElementById("name")
let price=document.getElementById("price")
let category=document.getElementById("category")
let comment=document.getElementById("comment")
let container=document.getElementById("container")
let color=document.getElementById("ChangeColor")
let exampleModal=document.getElementById("exampleModal")
let data=[]
let isActive=false;
let editingIndex="";
function HandleSave(){
    let obj={
        name:name.value,
        price:price.value,
        comment:comment.value,
        category:category.value,
        color:color.value
    }
    if(isActive==true){
        data[editingIndex]=obj;  
        isActive=false;
    }
    else{data.push(obj)}
    Draw()
    name.value=""
    price.value=""
    comment.value=""
    color.value=""
    category.value=""

}
function deleteItem(index){
    data.splice(index,1)
    Draw()
}
function editItem(edit){
    editingIndex=edit;
    isActive=true;
    name.value=data[edit].name;
    price.value=data[edit].price;
    comment.value=data[edit].comment;
    category.value=data[edit].category;
    color.value=data[edit].color;
}
function Draw(){
    let s="";
    for(let i=0;i<data.length;i++){
        s+=`<div style='border:5px solid ${data[i].color}'>
        <p>${i+1}</p>
        <p>${data[i].name}</p>
        <p>${data[i].price}</p>
        <p>${data[i].comment}</p>
        <p>${data[i].category}</p>
        <p>
        <button class="btn btn-danger" onclick="deleteItem(${i})">del</button>
        <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-success " onclick="editItem(${i})">edit</button>
        </p>
        
        </div>`
    }
    container.innerHTML=s
}
Draw()