class Pokemon {
    constructor(id) {
        this.id = id;
    }
    async getInfo() {
        try {
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
            console.log(res);
        } catch (e) {
            console.log(`Error: ${e}`);
        }
    }
}

Pokemon(56)