<script xmlns="http://www.w3.org/1999/html">
    import { createEventDispatcher } from 'svelte';
    import { fly, fade} from 'svelte/transition';

    const dispatch = createEventDispatcher();

    function close() {
        dispatch('closeIt');
    }

</script>

<style>
    .background {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 2;
    }
    .login-box {
        position: fixed;
        margin: 0;
        padding: 5px;
        height: 300px;
        width: 800px;
        /*
        color: white;

        background-color: rgb(42,42,187);
        border: solid 5px white;*/
        z-index: 5;
    }
    button{
        background: #1f2937;
    }
    input[type="text"]{
        display: inline-block;
        margin: 5px;
    }

</style>

<div class="background" transition:fade on:click={close}/>
<div class="login-box" transition:fly={{y: -500}}>
    <!--form-- action="">
        <label id="username" for="username">Username:
            <input type="text"><br>
        </label>
        <label id="pasword" for="pasword">Password:
            <input type="password"><br>
        </label>
        <button on:click={close}> Login</button>
        <button on:click={close}> Close</button>
    </form-->
    <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
            <div class="border-t border-gray-200"></div>
        </div>
    </div>

    <div class="mt-0 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">

            <div class="px-0 md:col-span-1">
                <div class="px-0 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-white">Informations</h3>
                </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-indigo-100 sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-4">
                                    <label for="name" class="block text-sm font-medium text-gray-700">Prénom</label>
                                    <input type="text" name="name" id="name" autocomplete="name" placeholder="Prénom" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-4 sm:col-span-4">
                                    <label for="genre" class="block text-sm font-medium text-gray-700">Genre</label>
                                    <input type="text" name="genre" id="genre" autocomplete="genre" placeholder="Femelle/Mâle" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="espece" class="block text-sm font-medium text-gray-700">Espèce</label>
                                    <input type="text" name="espece" id="espece" autocomplete="espece" placeholder="Chat,Chien,etc." class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-2">
                                    <label for="date_naissance" class="block text-sm font-medium text-gray-700">Date de naissance</label>
                                    <input type="date" name="date_naissance" id="date_naissance" autocomplete="Date de naissance" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-2">
                                    <label for="poid" class="block text-sm font-medium text-gray-700">Poid</label>
                                    <input type="text" name="poid" id="poid" autocomplete="KG" placeholder="Kg" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="race" class="block text-sm font-medium text-gray-700">Race</label>
                                    <input type="text" name="race" id="race" autocomplete="family-name" placeholder="Race" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button on:click={close} type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

