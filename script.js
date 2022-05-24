// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
var root = new  Vue({
    el: '#container', 
    data: {
        messaggio: 'Ciao, come stai?',
        imggatto:'https://www.gattodiario.com/wp-content/uploads/2019/06/migio-gatto-rosso-su-due-zampe-saluta-e-se-ne-va.jpg',
        miaClasse: 'nonSiVede',
    },
    methods: {
        risposta: function () {
            console.log('bene, grazie ');
        },
        cambioClasse: function () {
            if(this.miaClasse ==='nonSiVede') {
                this.miaClasse = 'siVede'
            }   else {
                    this.miaClasse = 'nonSiVede';
                }

        }
    },
});