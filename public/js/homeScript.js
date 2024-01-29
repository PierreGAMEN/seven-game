const container = document.querySelector('.containerSite');
const containerVoyage = document.querySelector('.containerSiteVoyage')
        const parallax = document.querySelector('.parallax');
        const button = document.querySelector('.hideButton');

      

        container.addEventListener('scroll', function () {
            const scrollPosition = container.scrollTop;
            const scrollPosition2 = containerVoyage.scrollTop;
            parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
            parallax.style.transform = `translateY(${scrollPosition2 * 0.5}px)`;
        });



        let compteur = 0;
        let compteur2 = 0

        document.getElementById('lien7').addEventListener('click', function() {
            // Au clic sur le lien "7"
            const compteurDiv = document.getElementById('compteur');
            // Afficher le compteur
            compteurDiv.style.display = 'block';
            // Initialiser le compteur à 0
            compteur++;
            if(compteur <= 1) {
                compteurDiv.innerHTML = `> ${compteur} an <`
                
            }
            
            compteurDiv.style.fontSize = `${compteur}rem`
            if(compteur >= 2) {
                compteurDiv.innerHTML = `> ${compteur} ans < `
            // Ajouter un événement au compteur pour augmenter sa valeur à chaque clic
            }
     

            if(compteur > 6) {
                const buttonNext = document.getElementById('buttonNext');
                buttonNext.innerHTML = 'Ready ?'
                buttonNext.innerHTML = `<p>Sept belles années ou je t'ai vu rire et pleurer.</p><p>Sept belles années ou nous avons progressé.</p><p>Si tu es prêtes à vivre la suite de ta vie avec moi, clique sur ce bouton</p>`
                buttonNext.style.display = 'block';
                buttonNext.style.opacity = 1;
                buttonNext.style.transform = 'translateY(0)';
                compteur = 6

                const compteurFull = {
                    count: 6,
                }
                console.log(compteurFull)
            }
        })
            document.getElementById('buttonNext').addEventListener('click', function() {
                
                compteur2++;
                switch (compteur2) {
                  case 1:
                    buttonNext.innerHTML = 'Es-tu sûre ?'
                    break;
                  case 2:
                    buttonNext.innerHTML = 'Vraiment certaine ?'
                    break;
                    case 3:
                        buttonNext.innerHTML = `Let's go !`
                    break;
                    case 4: 
                    window.location.href = '/epreuve1';
                    break;
                  default:
                    
                }
        });

        let compteurFull = null

        if(compteurFull) {
        module.exports = compteurFull;
        }


// Le bouton caché


