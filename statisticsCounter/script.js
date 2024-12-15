// statistics' tag :
customElements.define('new-ach',class extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<div class="card bg-transparent text-light stCard">
                            <div class="card-body">
                            <h3  id=${this.getAttribute('idCild')} >${this.getAttribute('value')} </h3>
                            <h6>${this.getAttribute('of')}</h6>
                            </div>
                        </div>`
        this.setAttribute('class','col m-3')
    }
})
// counter's interval :
function counter(id) {
    let value = Number($(id).text())
    let i = 1
    let count
    if (value<1000) {
        $(id).text(`${i}`)
    }
    else{
        let carry = (value)%100
        $(id).text(`${carry}`)
    }
    count = setInterval(() => {
            if(i<=value){
                $(id).text(`${i}`)
                if (value<1000) {
                    i++
                }
                else{
                    i += 10
                }
            }else{
                clearInterval(count)
            }
        },3000/value)
}
// running the counters when the page be ready :
$("document").ready(
    function(){
        // statistics
        $('.status').toggle()
        $('.status').slideDown(1000)
        // counters
        counter('#students')
        counter('#courses')
        counter('#lectures')
        counter('#consulting')
       
    }
)