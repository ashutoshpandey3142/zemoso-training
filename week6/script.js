const table= [
    {
        t_id: 1,
        amt: 0,
        itemList: []},
    {
        t_id: 2,
        amt: 0,
        itemList: []},
    {
        t_id: 3,
        amt: 0,
        itemList: []},
    {
        t_id: 4,
        amt: 0,
        itemList: []}
];
const items = [
    {menu_item: "Crusty Garlic Focaccia with Melted Cheese",
    cost: 105.00,
    type: "entree"},
    {menu_item: "French Fries",
    cost: 135.00,
    type: "entree"},
    {menu_item: "French Fries with cheese & Jalapenos",
    cost: 135.00,
    type: "entree"},
    {menu_item: "Home Country Fries With Herbs and Chilli Flakes",
    cost: 125.00,
    type: "entree"},
    {menu_item: "Spicy Thai basil chicken",
    cost: 305.00,
    type: "Main Course"},
    {menu_item: "Crispy trout with a parsley-caper vinaigrette",
    cost: 225.00,
    type: "Main Course"},
    {menu_item: "Charred broccoli with shishito peppers and pickled onions",
    cost: 140.00,
    type: "appetizer"},
    {menu_item: "Mushrooms stuffed with Pecorino Romano, garlic, and bread crumbs",
    cost: 340.00,
    type: "appetizer"},
    {menu_item: "Garden salad with lettuce, tomatoes, onions, and tart vinaigrette",
    cost: 340.00,
    type: "salad"},
    {menu_item: "Chopped Thai salad with peanut dressing",
    cost: 340.00,
    type: "salad"},
    {menu_item: "Rich flourless chocolate cake with a glass of sweet port wine",
    cost: 240.00,
    type: "dessert"},
    {menu_item: "Lemon creme brulee with dry white wine",
    cost: 280.00,
    type: "dessert"},
];

const startTable=()=>{
    for(let i=0;i<table.length;i++){
        let table_cont=document.getElementById('table-list');
        let tab=document.createElement('div');
        tab.id=`table-${i+1}`;
        table_cont.appendChild(tab);
        tab.className="tablenum";
        let head=document.createElement('h2');
        head.innerHTML=`Table-${table[i].t_id}`;
        tab.appendChild(head);
        let para=document.createElement('p');
        para.innerHTML=`Rs<span class="rupees"> ${table[i].amt}</span>|Total items: <span class="numitem">${table[i].itemList.length}</span>`;
        tab.appendChild(para);
    }
}

const startMenu=()=>{
    for(let i=0;i<items.length;i++){
        let menu_cont=document.getElementById('menu-item');
        let tab=document.createElement('div');
        tab.id=`item-${i}`
        tab.addEventListener('dragstart',(e) => {
            e.dataTransfer.setData("text", e.target.id);
        })
        tab.className='table';
        tab.draggable='true';
        tab.type=`${items[i].type}`;
        menu_cont.appendChild(tab);
        let head=document.createElement('h2');
        head.innerHTML=`${items[i].menu_item}`;
        tab.appendChild(head);
        let para=document.createElement('p');
        para.innerHTML=`${items[i].cost}`;
        tab.appendChild(para);
    }
}
startTable();
startMenu();

const search=()=>{
    const sb=document.getElementById("searchbox").value.toUpperCase();
    const storetable=document.getElementById("table-list");
    const tab=document.querySelectorAll(".tablenum");
    const tablename=storetable.getElementsByTagName("h2");
    for(var i=0;i<tablename.length;i++){
        var match=tab[i].getElementsByTagName('h2')[0];
        if(match){
            let textval=match.textContent|| match.innerHTML;
            if(textval.toUpperCase().indexOf(sb)>-1){
                tab[i].style.display="";
            }else{
                tab[i].style.display="none";
            }
        }
    }
}


const searchmenu=()=>{
    const sb=document.getElementById("searchmenubox").value.toUpperCase();
    const tab=document.querySelectorAll(".table");
    for(let i=0;i<items.length;i++){
        let match1=items[i].menu_item;
        let match2=items[i].type;
        if(match1.toUpperCase().indexOf(sb)>-1){
            tab[i].style.display="";
        }else if(match2.toUpperCase().indexOf(sb)>-1){

        }
        else{
            tab[i].style.display="none";
        }

    } 

}



function popupCreation(){
        var popcontainer=document.createElement("div");     
        popcontainer.className="popupcontainer";
        var popupParent=document.getElementById('popu');
        popupParent.appendChild(popcontainer);
        var pophead=document.createElement('header');
        pophead.className="pophead";
        var head=document.createElement('h2');
        head.id="tableheading";
        //create popup header
        popcontainer.appendChild(pophead);
        var spa=document.createElement('span');
        spa.innerHTML='&times;';
        spa.addEventListener('click',()=>{
            // console.log(over)
            document.getElementsByClassName('overlay')[0].classList.remove('overlayon');
            popcontainer.classList.remove('popupopen');
            document.getElementsByClassName('active')[0].classList.remove('active');
        })
        pophead.appendChild(head);
        pophead.appendChild(spa);
        var over=document.createElement('div');
        over.className="overlay";
        popupParent.appendChild(over);
        
}
//create popup
popupCreation();


function createTable(event){
    popcont.classList.add('popupopen');
    document.getElementsByClassName('overlay')[0].classList.add('overlayon');
    updatePopup(event.target.id);
}


// footer of popuop
var btns=document.getElementsByClassName('tablenum');
var popcont=document.getElementsByClassName('popupcontainer')[0];
var tab=document.createElement("table");
tab.id=`tableId`;
popcont.appendChild(tab);
// console.log(tab)


var cont=document.createElement('div');
cont.className='contbtn';
var generateBill=document.createElement('button');
generateBill.innerHTML='Generate Bill';
// var h3=document.createElement('h3');
// popcont.appendChild(h3);
// h3.innerHTML=`Total Cost:`
var closeSession=document.createElement('button');
closeSession.innerHTML='Close Session';


popcont.appendChild(cont);
cont.appendChild(generateBill);
cont.appendChild(closeSession);
closeSession.addEventListener('click',()=>{
    document.getElementsByClassName('overlay')[0].classList.remove('overlayon');
    document.getElementsByClassName('popupcontainer')[0].classList.remove('popupopen');
    document.getElementsByClassName('active')[0].classList.remove('active');
})
generateBill.addEventListener('click',(e)=>{
    var tableid=((((e.target.parentNode).parentNode).getElementsByTagName('h2')[0]).innerText);
    tableid=(tableid.substring(0,7)).toLowerCase();
    var pos=tableid.substring(6,7);
    console.log(tableid)
    let totalcost=0;
    totalcost=table[(+pos)].amt;
    alert("Your total bill is :"+totalcost);
    table[(+pos)-1].itemList=[];
    (document.getElementById(tableid)).querySelector('.rupees').innerText='0';
    document.getElementById(tableid).querySelector('.numitem').innerText='0';
    updatePopup(tableid);
})





//Activate Table on click
for(let i=0;i<table.length;i++){
    btns[i].addEventListener("click", function(e) {
        var current = document.getElementsByClassName("active");
        document.getElementById('tableheading').innerText=`Table-${i+1} | Order Details`;

        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        createTable(e);
        
    })
    btns[i].addEventListener('dragover',(event) => {
        event.preventDefault();
    })
    btns[i].addEventListener('drop',(event) => {
        drop(event)
    })
}

//drop
function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    let arr = data.split("-");
    let item_num = arr[1];   
    const item_name=items[item_num].menu_item;
    const item_cost=items[item_num].cost;
    var mytable=(event.target.id).substring(6,7);
    // getting table name
    console.log(event.target.id);
    updateTable(mytable,item_cost,1,1,false);
    // console.log(item_num)
    updateitems(event,item_name,item_cost,item_num);
}  


// update tables when drop any element on it
function updateTable(id,item_cost,zero,count,changeByInp){
    var getTable=document.getElementById(`table-${id}`);
    var currcost=+(getTable.querySelector('.rupees').innerText);
    console.log("ur:"+currcost);
    var itemcount=+(getTable.querySelector('.numitem').textContent);
    if(changeByInp){
        item_cost=0;
        count=0;
        let templist=table[id-1].itemList
        for(let i=0;i<templist.length;i++){
            item_cost+=(templist[i].item_cost*templist[i].count);
            count+=templist[i].count;
        }
        currcost=item_cost;
        itemcount=count;
    }
    else{
        //deletion part
        if(zero==0){
            currcost-=(+(item_cost));
            itemcount-=count;
        }
        //addition part
        else{
            currcost+=item_cost;
            // console.log(table[(event.target.id).split("-")[1]].amt);
            itemcount+=count;
        }

    }
    table[(getTable.id).split("-")[1]].amt=+(currcost);
    getTable.querySelector('.rupees').innerText=currcost;
    getTable.querySelector('.numitem').textContent=itemcount
}




let global=false;
function updateitems(event,item_name,item_cost,item_num){
        
    // let newitempresent=false;
    let tab=(event.target.id).split("-")[1];
    let itempres=false;
    // console.log(table[tab-1].itemList[0]);
    for(let i=0;i<table[tab-1].itemList.length;i++){
        if(item_name==table[tab-1].itemList[i].item_name) {
            itempres=true;
        }
    }
    if(!itempres){
        let obj={
            item_name:item_name,
            item_cost:item_cost,
            count:1
        };
        table[tab-1].itemList.push(obj);
    }else{
        for(let i=0;i<table[tab-1].itemList.length;i++){
            if(item_name==table[tab-1].itemList[i].item_name) {
                table[tab-1].itemList[i].item_cost=+(table[tab-1].itemList[i].item_cost) + item_cost;
                table[tab-1].itemList[i].count=+(table[tab-1].itemList[i].count) + 1;
            }
        }
    }
}


function updatePopup(currid){
    console.log(currid)
    var mytableid=(currid).split("-")[1];
    var mytab=document.getElementById('tableId');
    mytab.innerHTML=`
            <tr>
                <th>S.No.</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Delete</th>
            </tr>
        `;
    var body=document.createElement('tbody');
    mytab.appendChild(body);
    console.log(mytab)
    var itemList=table[mytableid-1].itemList;
    let serialnum=0;
    for(let i=0;i<itemList.length;i++){
        if(itemList[i].count!=0){
            body.innerHTML+=`
            <tr>
                <td>${++serialnum}</td>
                <td>${itemList[i].item_name}</td>
                <td>${itemList[i].item_cost}</td>
                <td><input value = '${itemList[i].count}' onchange='change(${mytableid},${i},this)' type='number' min='1'  </td>
                <td>
                <i class="material-icons" onclick="deleteFunction(${mytableid},${i})">&#xe872;</i>
                </td>
            </tr>
            `
        }
    }
    var h3=document.createElement('h3');
    mytab.appendChild(h3);
    // h3.innerHTML=`Total Cost:`   
    let total=0;
    for(let i=0;i<itemList.length;i++){
        total+=(itemList[i].count*itemList[i].item_cost);
    }
    h3.innerHTML=`Total Cost:${total}`;

}


function deleteFunction(currid,i){
    console.log(currid)
    let ic=table[currid-1].itemList[i].item_cost;
    let c=table[currid-1].itemList[i].count;
    table[currid-1].itemList[i]={
        item_name:"",
        item_cost:0,
        count:0
    };
    updateTable(currid,ic,0,c,true)
    currid=`table-${currid}`;
    updatePopup(currid);
}

function change(currid,i,event){
    let prev=table[currid-1].itemList[i].count;
    let c=table[currid-1].itemList[i].count;
    table[currid-1].itemList[i].count = +(event.value);
    let ic=table[currid-1].itemList[i].item_cost;
    let val=1;
    if(prev>(+event.value)) {
        val=0;
        c=c-(+event.value)
        ic=c*ic;
    }else{
        c=(+event.value)-c
    }
    console.log(ic);
    updateTable(currid,ic,val,c,true);
    currid=`table-${currid}`;
    updatePopup(currid);   
}