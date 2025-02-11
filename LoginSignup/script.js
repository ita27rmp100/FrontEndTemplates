// selection bar 
let moods = ['login','signup'] , display = ['none','block'] , indexMode = 0

function htmlForm(){
    $(".sign").css('display',display[indexMode])
    $(".log").css('display',display[Math.abs(indexMode-1)])
}
function toogleMood(){
    // chosen
    $(`#${moods[Math.abs(indexMode-1)]}`).addClass('btn-light')
    $(`#${moods[Math.abs(indexMode-1)]}`).removeClass('btn-outline-dark')
    // replaced one
    $(`#${moods[indexMode]}`).addClass('btn-outline-dark')
    $(`#${moods[indexMode]}`).removeClass('btn-light')
    htmlForm()
    indexMode = Math.abs(indexMode-1)
}
htmlForm()
// before loading he page
if((document.title).includes("chating") == false){
    $(".headForms").remove()
}
// edit on navbar according to title
$(document).ready(
    function(){
        $("label").addClass("btn p-3 active col-6")
    }
)