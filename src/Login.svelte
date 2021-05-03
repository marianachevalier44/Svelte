<script>
    import {createEventDispatcher} from 'svelte';
    import {fly, fade} from 'svelte/transition';

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
        margin: 20vh auto;
        height: 200px;
        width: 400px;
        /*color: white;*/
        padding: 20px;
        background-color: rgb(218, 218, 255);
        border: solid 5px white;
        z-index: 5;
    }

</style>

<div class="background" on:click={close} transition:fade/>
<div class="login-box" transition:fly={{y: -500}}>
    <div class=" container px-6 mx-auto grid">
        <div class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            <div
                    class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
            >
                <label class="block text-sm">
                    <span class="text-gray-700 mt-1.5 dark:text-gray-400">Prénom</span>

                    <input class="block w-full mt-1.5 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    />
                </label>


            </div>
            <button class="px-3 py-1 text-sm font-medium leading-5 text-white
            transition-colors duration-150 bg-purple-600 border border-transparent
            rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none
            focus:shadow-outline-purple" on:click={close}>
                Enregistrer

            </button>

            <button class="px-3 py-1 text-sm font-medium leading-5 text-white
            transition-colors duration-150 bg-purple-600 border border-transparent
            rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none
            focus:shadow-outline-purple" on:click={close}>Close
            </button>
        </div>
    </div>
    <!--form action="">
        <label for="username" id="username">Username:<input type="text"></label>
        <label for="password" id="password">Password:<input type="password"></label>

    </form-->
</div>