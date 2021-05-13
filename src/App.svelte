<script>
    import Login from "./Login.svelte";
    

    let isLogin = false;

    function loginBtn() {
        isLogin = true;
    }

    function close() {
        isLogin = false;
    }


    function getAnimals() {
        fetch('http://localhost:8080/animal')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            });
    }
 
</script>

<main>
    <button
        class="px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        on:click={loginBtn}
        >Ajouter un animal
    </button>

    <button
        class="px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        on:click={getAnimals}
        >get animal
    </button>




    {#if isLogin}
        <Login on:closeIt={close} />
    {/if}
</main>
