const materialNameInput=document.getElementById("materialName");
const categoryInput=document.getElementById("category");
const quantityInput=document.getElementById("quantity");
const supplierNameInput=document.getElementById("supplierName");
const costPerUnitInput=document.getElementById("costPerUnit")
const addMaterialBtn=document.getElementById("addMaterialBtn");
const errorMessage=document.getElementById("error-message");
const materialTableBody=document.getElementById("materialTable").querySelector("tbody");
const totalProductsSpan=document.getElementById("totalProducts");
const mostExpensiveSpan=document.getElementById("mostExpensive");
let materials=[];
addMaterialBtn.addEventListener("click", () =>{
    const name=materialNameInput.value.trim();
    const category=categoryInput.value;
    const quantity=quantityInput.value.trim();
    const supplier=supplierNameInput.value.trim();
    const cost=costPerUnitInput.value.trim();
    if(!name || !category || !quantity || !supplier || !cost){
        errorMessage.textContent="Please fill out all fields!";
        return;
    }
    if(Number(quantity)<=0 || Number(cost)<=0){
        errorMessage.textContent="Quantity and cost must be positive numbers!";
        return;
    }
    errorMessage.textContent="";
    const material={
        name,
        category,
        quantity: Number(quantity),
        supplier,
        cost: Number(cost)
    };
    materials.push(material);
    renderTable();
    updateSummary();
    materialNameInput.value="";
    categoryInput.value="Wood";
    quantityInput.value="";
    supplierNameInput.value="";
    costPerUnitInput.value="";
});
function renderTable() {
    materialTableBody.innerHTML="";
    materials.forEach(mat => {
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${mat.name}</td>
        <td>${mat.category}</td>
        <td>${mat.quantity}</td>
        <td>${mat.supplier}</td>
        <td>RS ${mat.cost.toFixed(2)}</td>
        `;
        materialTableBody.appendChild(row);
    })
}
function updateSummary() {
    totalProductsSpan.textContent=materials.length;
    if(materials.length>0){
        let expensiveMaterial=materials.reduce((prev,current)=>
         current.cost > prev.cost ? current : prev
        );
        mostExpensiveSpan.textContent=`${expensiveMaterial.name} (RS ${expensiveMaterial.cost.toFixed(2)})`;
    }else{
        mostExpensiveSpan.textContent="None";
    }
}