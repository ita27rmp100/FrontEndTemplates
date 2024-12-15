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
        this.setAttribute("value","0")
    }
})
// counter's interval :
function counter(id) {
    let value = Number($(id).text())+1
    let i = 0 
    let count
    console.log(5000/value)
    count = setInterval(() => {
            $(id).text(`${i}`)
            i++
        },30)
    setTimeout(() => {
        clearInterval(count)
    },value*30);
}
// running the counters when the page be ready :
$("document").ready(
    function(){
        $(".status").toggle()
        $(".status").toggle(3000,
            function(){
                counter('#students')
                counter('#courses')
                counter('#lectures')
                counter('#consulting')
            }
        )
    }
)