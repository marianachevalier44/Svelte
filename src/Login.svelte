<script xmlns="http://www.w3.org/1999/html">
    import { createEventDispatcher } from "svelte";
    import { fly, fade } from "svelte/transition";

    const dispatch = createEventDispatcher();

    function close() {
        dispatch("closeIt");
    }

    let prenom = "prenom";
    let genre = "genre";
    let espece = "espece";
    let poid = 0;
    let race = "race";
    let age = 0;

    let result = null;

    async function postAnimal() {
        const objetAEnvoyer = {
            prenom,
            genre,
            espece,
            poid,
            race,
            age,
        };
        const res = await fetch("http://localhost:8080/animal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objetAEnvoyer),
        });

        let body = await res.json();
        result = JSON.stringify(body);
    }
</script>

<div class="background" transition:fade on:click={close} />
<div class="login-box" transition:fly={{ y: -500 }}>
    <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
            <div class="border-t border-gray-200" />
        </div>
    </div>

    <div class="mt-0 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="px-0 md:col-span-1">
                <div class="px-0 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-white">
                        Informations
                    </h3>
                </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST" enctype="multipart/form-data">
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-indigo-100 sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-4">
                                    <label
                                        for="name"
                                        class="block text-sm font-medium text-gray-700"
                                        >Prénom</label
                                    >
                                    <input
                                        bind:value={prenom}
                                        name="name"
                                        id="name"
                                        autocomplete="name"
                                        placeholder="Prénom"
                                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div class="col-span-4 sm:col-span-4">
                                    <label
                                        for="genre"
                                        class="block text-sm font-medium text-gray-700"
                                        >Genre</label
                                    >
                                    <input
                                        bind:value={genre}
                                        type="text"
                                        name="genre"
                                        id="genre"
                                        autocomplete="genre"
                                        placeholder="Femelle/Mâle"
                                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="espece"
                                        class="block text-sm font-medium text-gray-700"
                                        >Espèce</label
                                    >
                                    <input
                                        bind:value={espece}
                                        type="text"
                                        name="espece"
                                        id="espece"
                                        autocomplete="espece"
                                        placeholder="Chat,Chien,etc."
                                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="age"
                                        class="block text-sm font-medium text-gray-700"
                                        >Age</label
                                    >
                                    <input
                                        bind:value={age}
                                        type="number"
                                        name="age"
                                        id="age"
                                        autocomplete="age"
                                        placeholder="Age"
                                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-2">
                                    <label
                                        for="poid"
                                        class="block text-sm font-medium text-gray-700"
                                        >Poid</label
                                    >
                                    <input
                                        bind:value={poid}
                                        type="number"
                                        name="poid"
                                        id="poid"
                                        autocomplete="KG"
                                        placeholder="Kg"
                                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="race"
                                        class="block text-sm font-medium text-gray-700"
                                        >Race</label
                                    >
                                    <input
                                        bind:value={race}
                                        type="text"
                                        name="race"
                                        id="race"
                                        autocomplete="family-name"
                                        placeholder="Race"
                                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            class="px-4 py-3 bg-gray-50 text-right col-span-2 sm:px-2"
                        >
                            <button
                                on:click={postAnimal}
                                type="button"
                                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Enregistrer
                            </button>

                            <button
                                on:click={close}
                                type="button"
                                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Fermer
                            </button>

                            <p>Result:</p>
                            <pre>
                            {result}
                            </pre>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

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
    button {
        background: #1f2937;
    }
    input[type="text"] {
        display: inline-block;
        margin: 5px;
    }
</style>
