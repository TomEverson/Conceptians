<script>

import showdown from "showdown"
const converter = new showdown.Converter();
const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let markdown;
let markdown_mm;
let date = `${d.getDate()}/${months[d.getMonth()]}/${d.getFullYear()}`


function onclick(e){
    const text = e.target.value;
    let convert = converter.makeHtml(text);
    markdown.innerHTML = convert
}

function onclick_mm(e){
    const text = e.target.value;
    let convert = converter.makeHtml(text);
    markdown_mm.innerHTML = convert
}

</script>

<main class="flex flex-row w-[100vw] h-[100vh]">

    <div class="logo w-[50%] h-[100%] flex items-center justify-center flex-col">
        <input type="text" placeholder="Title..." class="w-[100%] h-[5%]">
        <div class="w-[100%] h-[5%] flex flex-row">
            <input type="text" placeholder="Category..." class="w-[30%] h-[100%] border-black">
            <input type="text" placeholder="Read-Time..." class="w-[30%] h-[100%] border-black">
            <input type="text" placeholder="Date..." class="w-[40%] h-[100%]" disabled bind:value={date}>
        </div>
        <textarea class="w-[100%] h-[45%] resize-none border-black" spellcheck="false" autocomplete="off" on:keyup={onclick} placeholder="Text..."></textarea>
        <textarea class="w-[100%] h-[45%] resize-none" spellcheck="false" autocomplete="off" on:keyup={onclick_mm} placeholder="Text..."></textarea>
    </div>
    
    
    
    
    <div class="logo w-[50%] h-[100%] flex flex-col">
        <div class="w-[100%] h-[50%] border border-black overflow-y-scroll" bind:this={markdown}></div>
        <div class="w-[100%] h-[50%] overflow-y-scroll" bind:this={markdown_mm}></div>
    </div>
    
    
</main>
