const url = "https://raw.githubusercontent.com/lukasbryt/trilhafront/main/test.json"

async function getData(index) {
    let res =  await axios(url)
    let data = res.data[index]
    console.log(data)
    return data
}

async function getInfo() {
    let veteranos = await getData(0)
    let novatos = await getData(1)
    const card_veteranos =  $(".card_veteranos")
    const card_novatos =  $(".card_novatos")
    const data = document.getElementById("data")
    
    if(data.style.visibility == "hidden"){
        for(veterano of veteranos.userName){
            card_veteranos.append(`<p class="btn_name">${veterano}</p>`)
        }
        card_veteranos.append(`<p class="frase">${veteranos.title}</p>`)
        
        for(novato of novatos.userName){
            card_novatos.append(`<p class="btn_name">${novato}</p>`)
        }
        card_novatos.append(`<p class="frase">${novatos.title}</p>`)
        data.style.visibility = "visible"
    }
}
