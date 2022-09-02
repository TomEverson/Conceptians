
<script>

import showdown from "showdown"

const converter = new showdown.Converter();
let markdown;

function onclick(e){
    const text = e.target.value;
    let convert = converter.makeHtml(text);
    markdown = convert
}

</script>

<main class="flex flex-row w-[100vw] h-[100vh]">

    <div class="logo w-[50%] h-[100%] flex items-center justify-center">
        <textarea class="w-[100%] h-[100%] resize-none" spellcheck="false" autocomplete="off" on:keyup={onclick}></textarea>
    </div>
    
    
    
    
    <div class="logo w-[50%] h-[100%] flex" contenteditable="true" bind:innerHTML={markdown}>
    </div>
    
    
</main>
