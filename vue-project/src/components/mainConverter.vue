<template>
    <div id="mainConverter" class="mx-auto w-5/6 flex justify-around flex-wrap items-center">
        <div class="w-full">
        <h1 class=" text-3xl text-center my-12 border rounded-lg bg-purple-200 py-3 px-5 w-max mx-auto">屏蔽字混淆器</h1>
        </div>

        <article id="text-before" class="w-1/3 text-center bg-purple-200 h-4/5 border-8">
            <textarea class="h-full w-full border" v-model="rawText"></textarea>
        </article>
        <div class="w-1/6 h-1/2 border flex flex-col items-center justify-around">
            <button @click="convert()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2">
            生成
            </button>
            <button @click="copyResult()" @mouseover="recoverCopyButtonTextNodelay()" @mouseout="recoverCopyButtonText()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2">
            {{copyButtonText}}
            </button>
            <div class="p-4">
            <div class="flex items-center mr-4 mb-2">
                <input v-model="dataAnalysisChecked" type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" class="opacity-0 absolute h-8 w-8" />
                <div class="bg-white border-2 rounded-md border-blue-400 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                <svg class="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                    <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                        <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                    </g>
                    </g>
                </svg>
                </div>
                <label for="A3-yes" class="select-none text-lg">发送数据</label>
            </div>
            </div>

        </div>
        <article id="text-after" class="w-1/3 text-center bg-purple-200 h-4/5 border-8">
            <textarea id="text-after-textarea" readonly class="h-full w-full border" v-model="resultText"></textarea>
        </article>
    </div>
</template>

<script>
export default {
    mounted(){
        console.log("%cEditor loaded😶", "font-size: x-large");
    },
    data(){
        return{
            dataAnalysisChecked:true,
            rawText:"",
            resultText:"",
            defaultHarmoniousChar:"‎",
            customHarmoniousChar:"", // TODO: will be used in future
            copyButtonText:"复制结果",
            recoverCopyButtonTextEvent:null
        };
    },
    methods:{
        textConvert(rawText){
            return rawText.split('').join(this.defaultHarmoniousChar);
        },
        convert(){
            this.resultText=this.textConvert(this.rawText);
        },
        sendData(){
            //TODO there isn't data sending function currently
        },
        copyResult(){
            var copyText = document.getElementById("text-after-textarea");
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */
            document.execCommand("copy");
            this.copyButtonText="copied!";
        },
        recoverCopyButtonText(){
            this.recoverCopyButtonText=setTimeout(()=>{
                this.copyButtonText="复制结果"
            },1500);
        },
        recoverCopyButtonTextNodelay(){
            clearTimeout(this.recoverCopyButtonTextEvent);
            this.copyButtonText="复制结果";
        }
    },
};
</script>

<style>
    /* TODO:add responsible design */
    #mainConverter{
        height: 80vh;
        min-width: 900px;
        min-height: 400px;
    }

    #text-after-textarea{
        outline: none;
    }

    input:checked + div {
    @apply border-blue-500;
    }
    input:checked + div svg {
    @apply block;
    }
</style>