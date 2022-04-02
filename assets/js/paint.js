function configureListeners(){
    var images = document.getElementsByTagName('img')

    for(let i=0; i < images.length; i++){
    
        images[i].addEventListener('mouseover', addOpacity, false)
        images[i].addEventListener('mouseout', removeOpacity, false)
    }
}

function addOpacity(event){
    if(!this.classList.contains('dim')){
        this.classList.add("dim");
    }
    getProductInfo(this.id)
}

function removeOpacity(event){
    if(this.classList.contains('dim')){
        this.classList.remove('dim');
    }

    document.getElementById('color').textContent = "";
    document.getElementById('ppg').textContent = "";
}


function getProductInfo(productID){
    let colorName;
    let price;

    switch (productID){
        case 'pn1':
            colorName = "Lime Green";
            price = "$14.99";
            updateInfo(colorName, price)
        break;
        
        case 'pn2':
            colorName = "Medium Brown";
            price = "$11.14";
            updateInfo(colorName, price)
        break;
        
        case 'pn3':
            colorName = "Royal Blue";
            price = "$22.99";
            updateInfo(colorName, price)
        break;
        
        case 'pn4':
            colorName = "Solid Red";
            price = "$13.42";
            updateInfo(colorName, price)
        break;
        
        case 'pn5':
            colorName = "Solid White";
            price = "$21.98";
            updateInfo(colorName, price)
        break;
        
        case 'pn6':
            colorName = "Solid Black";
            price = "$4.99";
            updateInfo(colorName, price)
        break;
        
        case 'pn7':
            colorName = "Solid Cyan";
            price = "$8.22";
            updateInfo(colorName, price)
        break;
        
        case 'pn8':
            colorName = "Solid Purple";
            price = "$11.99";
            updateInfo(colorName, price)
        break;
        
        case 'pn9':
            colorName = "Solid Yellow";
            price = "$14.99";
            updateInfo(colorName, price)
        break;


    }

    function updateInfo(colorName, price){
        document.getElementById('color').textContent = colorName;
        document.getElementById('ppg').textContent = price;
    }
}