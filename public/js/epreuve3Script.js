const divTextChouette = document.querySelector('.paragraphe-chouette')



const dialogueChouette = () => {
setTimeout(() => {
  divTextChouette.innerHTML = `"Bonjour Margaux, je t'ai entendu discuter avec le chat."`
}, 3000);
setTimeout(() => {
  divTextChouette.innerHTML = `"J'aimerai beaucoup t'aider à retrouver l'homme que tu recherches"`
}, 8000);
setTimeout(() => {
  divTextChouette.innerHTML = `"J'ai une vue perçante mais depuis ma naissance j'ai un problème.. J'ai besoin de lunettes"`
}, 13000);
setTimeout(() => {
  divTextChouette.innerHTML = `"Sans elles, je ne vois pas à un mètre, avec elle je peux voir une souris se réfugier dans son terrier à plus de 200 mètres de distance"`
}, 18000);
setTimeout(() => {
  divTextChouette.innerHTML = `"Peux-tu m'aider à retrouver mes lunettes ? Elles doivent être quelque part, par là..."`
}, 25000);
setTimeout(() => {
  divTextChouette.innerHTML = `"Si cela peut t'aider, ma mère disait souvent, "C'est en réduisant son champs de vision que l'on voit le mieux"`
}, 32000);
setTimeout(() => {
  divTextChouette.innerHTML = ``
}, 37000);

}

dialogueChouette()

document.querySelector('.lunette').addEventListener('click', () => {
  divTextChouette.innerHTML = `" Oh tu as tu as retrouvé mes lunettes.<p>Merci beaucoup</p> "`
  setTimeout(() => {
    divTextChouette.innerHTML = `" Je vais regarder si je vois quelque chose ! "`
  }, 5000);
  setTimeout(() => {
    divTextChouette.innerHTML = `" Oh oui, je vois des traces de pas proche d'une petite cabane en bois ! "`
  }, 10000);
  setTimeout(() => {
    divTextChouette.innerHTML = `" Tu devrais jeter un coup d'oeil ! "`
  }, 15000);
  setTimeout(() => {
    divTextChouette.innerHTML = `" Je te laisse, je dois rejoindre ma mère, bonne chance ! "`
  }, 20000);
  setTimeout(() => {
    divTextChouette.innerHTML = `L'oiseau c'était envolé, Margaux se remettait en route !`
  }, 25000);
  setTimeout(() => {
    divTextChouette.innerHTML = `Soudainement, Margaux entendit derrière elle, un bruit sourd, c'était la chouette qui était revenue !`
  }, 35000);
  setTimeout(() => {
    divTextChouette.innerHTML = `" J'ai oublié de te préciser que l'homme à dit "date du premier portaledge" "`
  }, 41000);
  setTimeout(() => {
    window.location.href = '/epreuve4';
  }, 48000);
})