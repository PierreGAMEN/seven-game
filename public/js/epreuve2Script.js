const divTextChat = document.querySelector('.paragraphe-chat')

function genererInputText() {
// Créer un nouvel élément input de type texte
const inputText = document.createElement("input");
const inputSubmit = document.createElement("input");
inputText.type = "text";
inputSubmit.type = "submit"
inputSubmit.value = "Envoyer ma réponse"

// Donner à l'élément input un ID (facultatif, mais peut être utile pour la manipulation ultérieure)
inputText.id = "nouvelInputText";
inputSubmit.id = "nouvelInputSubmit";

// Ajouter l'élément input au conteneur spécifié (dans cet exemple, un div avec l'ID "inputContainer")
divTextChat.appendChild(inputText);
divTextChat.appendChild(inputSubmit)
}

const reponseDuChat = () => {
  divTextChat.innerHTML = `Ah ça fait du bien de s'amuser un peu !`
  setTimeout(() => {
    divTextChat.innerHTML = `Bon l'humain à dit : "Jour de notre plus longue randonnée Italienne" !`
  }, 5000);
  setTimeout(() => {
    divTextChat.innerHTML = `<p>Tâche de t'en souvenir.</p><p>Je ne l'ai pas vu partir mais j'ai entendu du bruit dans cette direction !</p><p>Tu devrais aller voir</p>`
  }, 11000);
  setTimeout(() => {
    divTextChat.innerHTML = `<p>Margaux partait dans la direction indiqué par le petit chat</p>`
  }, 17000);
  setTimeout(() => {
    window.location.href = '/epreuve3';
  }, 23000);
}

const enigmeDuChat3 = () => {
  divTextChat.innerHTML = `Rions un peu... <p>Quel est le cri du mérou ?</p>`;
          
              genererInputText();
          
              const verifierReponse = () => {
                  const reponseUtilisateur = document.querySelector('#nouvelInputText').value;
                  const reponseJuste = "bignole";
          
                  if (reponseUtilisateur.toLowerCase().includes(reponseJuste)) {
                      divTextChat.innerHTML = `<p>"${reponseUtilisateur}"</p><p>.... Oui...</p><p>Le mérou bignole.. Mes roubignoles... !</p> <p>Tu as capté, miaaaaw miawww miawwww !!!</p>`;
                      setTimeout(() => {
                        reponseDuChat()
                      }, 10000);
                  } else {
                      divTextChat.innerHTML = `"${reponseUtilisateur}".... C'est incorrect, essaie encore ! `;
                      genererInputText();
                      document.querySelector('#nouvelInputSubmit').addEventListener('click', verifierReponse);
                  }
              };
          
              document.querySelector('#nouvelInputSubmit').addEventListener('click', verifierReponse);
          };


const enigmeDuChat2 = () => {
  divTextChat.innerHTML = `<p>Je me sens de nature philosophique...</p><p>Qu'est-ce qui est toujours devant soi et qu'on ne peut jamais voir ?</p>`;
          
              genererInputText();
          
              const verifierReponse = () => {
                  const reponseUtilisateur = document.querySelector('#nouvelInputText').value;
                  const reponseJuste = "futur";
          
                  if (reponseUtilisateur.toLowerCase().includes(reponseJuste)) {
                      divTextChat.innerHTML = `"${reponseUtilisateur}".... Oui... C'était bien le futur. <p>Allez une dernière !</p> `;
                      setTimeout(() => {
                          enigmeDuChat3();
                      }, 10000);
                  } else {
                      divTextChat.innerHTML = `"${reponseUtilisateur}".... C'est incorrect, essaie encore ! `;
                      genererInputText();
                      document.querySelector('#nouvelInputSubmit').addEventListener('click', verifierReponse);
                  }
              };
          
              document.querySelector('#nouvelInputSubmit').addEventListener('click', verifierReponse);
          };

const dialogueChat = () => {
setTimeout(() => {
divTextChat.innerHTML = `Bonjour Margaux, je t'ai entendu discuter avec la lune.`
}, 3000);
setTimeout(() => {
  divTextChat.innerHTML = `J'espère que tu as bien retenu ce qu'elle t'a dit.`
  }, 8000);
  setTimeout(() => {
    divTextChat.innerHTML = `Evidemment, moi je l'ai retenu, mais j'ai aussi entendu ce qu'elle n'a pas entendu.`
    }, 13000);
    setTimeout(() => {
      divTextChat.innerHTML = `Vois-tu, sur cette branche, je peux voir l'ensemble du champs mais je peux surtout l'entendre`
      }, 19000);
      setTimeout(() => {
        divTextChat.innerHTML = `Entendre les mulots qui grattent`
        }, 25000);
        setTimeout(() => {
          divTextChat.innerHTML = `le clapotis de la neige qui fond et qui tombe sur le sol   `
          }, 29000);
          setTimeout(() => {
            divTextChat.innerHTML = `La brise du vent qui s'étale dans les branchages`
            }, 33000);
            setTimeout(() => {
              divTextChat.innerHTML = `J'entends tout, absolument tout et je peux te dire que l'humain avait l'être concentré`
              }, 38000);
              setTimeout(() => {
                divTextChat.innerHTML = `Très concentré`
                }, 44000);
                setTimeout(() => {
                  divTextChat.innerHTML = `je suppose que tu dois vouloir savoir ce qu'il murmurait ?`
                  }, 48000);
                  setTimeout(() => {
                    divTextChat.innerHTML = `Les chats sont joueurs, n'est-ce pas ?`
                    }, 54000);
                    setTimeout(() => {
                      divTextChat.innerHTML = `Eh bien moi aussi, j'ai envie de m'amuser.`
                      }, 60000);
                      setTimeout(() => {
                        divTextChat.innerHTML = `Répond correctement a mes devinettes et je te dirai ce que j'ai entendu`
                        }, 64000);
          setTimeout(() => {
            enigmeDuChat1()
            }, 70000);


            const enigmeDuChat1 = () => {
              // Supposons que divTextChat et genererInputText soient correctement définis ailleurs dans votre code
              divTextChat.innerHTML = `Bertrand conduit sa voiture et s’engage sur une route déserte. <p>Les lampadaires sont éteints et il n’y a pas de lune.</p><p> Tout à coup, un chat noir traverse la route juste devant la voiture. Bien que les phares de la voiture soient éteints, 
              Bertrand freine à temps et le laisse passer.</p> 
              <p>Comment a-t-il pu voir le chat ?</p>`;
          
              genererInputText();
          
              const verifierReponse = () => {
                  const reponseUtilisateur = document.querySelector('#nouvelInputText').value;
                  const reponseJuste = "jour";
          
                  if (reponseUtilisateur.toLowerCase().includes(reponseJuste)) {
                      divTextChat.innerHTML = `"${reponseUtilisateur}".... Oui c'est une bonne réponse, bravo ! `;
                      setTimeout(() => {
                          enigmeDuChat2();
                      }, 5000);
                  } else {
                      divTextChat.innerHTML = `"${reponseUtilisateur}".... C'est incorrect, essaie encore ! `;
                      genererInputText();
                      document.querySelector('#nouvelInputSubmit').addEventListener('click', verifierReponse);
                  }
              };
          
              document.querySelector('#nouvelInputSubmit').addEventListener('click', verifierReponse);
          };
          




}

dialogueChat()