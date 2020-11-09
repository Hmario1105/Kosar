//Elemek
let inputItemName = document.getElementById("itemName")
let inputItemCount = document.getElementById("itemCount")
let inputItemBasePrice = document.getElementById("inputItemBasePrice")
let buttonAdd = document.getElementById("buttonAdd")
let spanItemNames = document.getElementById("itemNames")
let spanSum = document.getElementById("sum")
//let ulitemList = document.getElementById("itemList")
let tbody = document.getElementById("tbody");

//Változók
let itemNameList = ["kenyér", "tej", "vaj"];
let itemCountList = [3,5,2];
let itemBasePriceList = [200,190,300];
let oTomb = [
    {
        itemName: "kenyér",
        itemCount: 3,
        itemBasePrice: 200
    },
    {
        itemName: "tej",
        itemCount: 5,
        itemBasePrice: 190
    },
    {
        itemName: "vaj",
        itemCount: 2,
        itemBasePrice: 300
    }
]

//Feliratkozás
buttonAdd.addEventListener("click",OnButtonClicked)

//Eseménykezelők
function OnButtonClicked() {
    if(inputItemName.value == "" || inputItemCount.value == "" || itemBasePriceList.value == ""){
        return;
    }



    //áruhozzáadásaű
    let ob = {
        itemName: inputItemName.value,
        itemCount: inputItemCount.value,
        itemBasePrice: itemBasePrice.value
    }
    oTomb.push(ob);

    inputItemName.value = null;
    inputItemCount.value = null;
    itemBasePriceList.value = null;
    RenderList();
}



//Üzleti logika
//A kosár listája
RenderList();

function RenderList(){

    tbody.innerText = "";

    oTomb.forEach((element,index) => {
        console.log(element, index);
        let newTr = document.createElement("tr");
        let newTd = document.createElement("td");
        newTd.innerText = element.itemName;
        newTr.appendChild(newTd);

        newTd = document.createElement("td");
        newTd.innerText = element.itemCount;
        newTr.appendChild(newTd);

         newTd = document.createElement("td");
        newTd.innerText = element.itemBasePrice;
        newTr.appendChild(newTd);

        newTd = document.createElement("td");
        newTd.innerText = element.itemCount * element.itemBasePrice;
        newTr.appendChild(newTd);

        let newButton = document.createElement("button");
        newButton.innerText = "Törlés";
        newButton.id  = `b${index}`;
        newButton.classList.add("button");
        newTd.appendChild(newButton);
        newTr.appendChild(newTd); 



        tbody.appendChild(newTr);

    });
     let buttons = document.querySelectorAll(".button");
     buttons.forEach(element => {
         element.addEventListener("click",OnClickButton);
     });





    // var cim = document.createElement("tr");
    // var nev = document.createElement("th");
    // var dbszam = document.createElement("th");
    // var egysegar = document.createElement("th");
    // var osszar = document.createElement("th");

    // nev.innerText = "Termék neve";
    // dbszam.innerText = "Darabszám";
    // egysegar.innerText = "Egységár";
    // osszar.innerText = "Össz ár";

    // cim.appendChild(nev);
    // cim.appendChild(dbszam);
    // cim.appendChild(egysegar);
    // cim.appendChild(osszar);
    // table.appendChild(cim);

    // let mappedItemList = oTomb.map(function(o){
    //     let ar = o.itemCount*o.itemBasePrice;
    //     return `${o.itemName} - ${o.itemCount} - ${o.itemBasePrice} Ft (${ar}) Ft`
    // })
    // // console.log(mappedItemList);

    // mappedItemList.forEach((element) => {
    //    let newLi = document.createElement("li");
    //     newLi.innerText = element;
    //     ulitemList.appendChild(newLi);
        //console.log("Anyád");
    //});

    //Összegek kezelése
    spanSum.innerText = GetSum();
    spanItemNames.innerText = GetNames();
}


function OnClickButton(){
    console.log(this.id);
    let id = this.id.slice(1);
    console.log(id);
    oTomb.splice(id,1);
    RenderList();
}

function GetSum(){
    let sum = oTomb.reduce(function(acc,o){
        return acc + o.itemCount * o.itemBasePrice;
    },0);

    return sum;
}

function GetNames(){
    let x = 
    oTomb.map(item => item.itemName)
    .join(", ");
    return x;
}

