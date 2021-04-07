<template>
    <footer id="footer" class="footer bg-white pt-1">
        <div class="container mx-auto px-6">
            <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                <div class="sm:w-2/3 text-center py-6">
                    <p class="text-sm font-bold mb-2">
                        <span class="align-middle text-blue-700">© 2020 by GalliumWang&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <button class="align-middle bg-blue-500 px-4 py-2 text-xs font-semibold tracking-wider text-white inline-flex items-center space-x-2 rounded hover:bg-blue-600">
                            <span>
                                <img src="../assets/github.svg" style="width:20px;height:20px">
                            </span>
                            <span class="text-sm" @click="openProjectSource()">
                                Github
                            </span>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            projectSource:"https://github.com/GalliumWang/harmonious_word_tool/tree/vue-refactor"
        }
    },
    methods:{
        openProjectSource(){
            window.open(this.projectSource,'_blank')
        }
    }
}
</script>

<style>
    #footer{
    }

</style>