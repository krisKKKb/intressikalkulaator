function getValue() {
    const val = document.getElementById('price').value
    const intrest = parseInt(document.getElementById("intrest").value) / 100
    const totalIntrest = val * intrest + parseInt(val)
    document.getElementById("price-after-intrest").innerHTML = totalIntrest
    console.log(totalIntrest)
}
