// statistics' tag :
customElements.define('new-ach',class extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<div class="card bg-transparent text-light stCard">
                            <div class="card-body">
                            <h3  id=${this.getAttribute('idCild')} >${this.getAttribute('value')}</h3>
                            <h6>${this.getAttribute('of')}</h6>
                            </div>
                        </div>`
        this.setAttribute('class','col m-3')
    }
})
// counter's interval :
function counter(id) {
    let value = Number($(id).text())+1
    let i = 0 
    let count
    $(id).text(`${i}`)
    count = setInterval(() => {
            $(id).text(`${i}`)
            i++
        },50)
    setTimeout(() => {
        clearInterval(count)
    },value*50);
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