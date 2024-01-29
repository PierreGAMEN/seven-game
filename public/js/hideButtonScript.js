const container = document.querySelector('.containerSite');
const containerVoyage = document.querySelector('.containerSiteVoyage')
        const parallax = document.querySelector('.parallax');
        const button = document.querySelector('.hideButton');

        const hideButtonMouvement = () => {
            const nombreAleatoireHeigth = Math.floor(Math.random() * 395 + 5);
            const nombreAleatoireWidth = Math.floor(Math.random() * 95 + 5);
            button.style.position = 'absolute';
            button.style.bottom = `${nombreAleatoireHeigth}vh`
            button.style.right = `${nombreAleatoireWidth}vw`
        }

        function getElement(element) {
          return document.querySelector(element)
        }
        
        function DeleteChild(element) {
          // Obtenez la référence de l'élément parent
          const parentElement = getElement(element);
        
          // Vérifiez si l'élément parent a été trouvé
          if (parentElement) {
            // Supprimez chaque enfant de l'élément parent
            while (parentElement.firstChild) {
              parentElement.removeChild(parentElement.firstChild);
            }
          }
        }

        const AddNewElement = (parent, element, content) => {
          const newElement = document.createElement(element);
          getElement(parent).appendChild(newElement);
          const newContent = document.createTextNode(content);
          newElement.appendChild(newContent);
        }

        const hideButtonChanges = (color, parentElement, elementToCreate, contentToCreate, size) => {
          button.style.backgroundColor = color
          button.style.width = `${size}vw`
          button.style.height = `${size}vw`
          hideButtonMouvement() 
          DeleteChild(parentElement)
          document.documentElement.scrollTop = 0;
          AddNewElement(parentElement, elementToCreate, contentToCreate)
        }

        const dialogueLune = () => {
          setTimeout(() => {
            DeleteChild('.sectionHideButton');
            AddNewElement('.sectionHideButton', 'p', 'Bonjour Margaux, je suis la Lune');
          }, 4000);
        
          setTimeout(() => {
            DeleteChild('.sectionHideButton');
            AddNewElement('.sectionHideButton', 'p', `J'ai entendu un homme prononcer ton nom et il répétait plusieurs phrases, comme une espèce de code`);
          }, 12000); 
        
          setTimeout(() => {
            DeleteChild('.sectionHideButton');
            AddNewElement('.sectionHideButton', 'p', `Je n'ai pas réussi à tout comprendre mais je crois qu'il disait "Jour de notre première grande voie"`);
          }, 20000); 
        
          setTimeout(() => {
            DeleteChild('.sectionHideButton');
            AddNewElement('.sectionHideButton', 'p', `Je ne sais pas si ça t'aidera mais il est parti par là-bas`);
          }, 26000); 
        
          setTimeout(() => {
            DeleteChild('.sectionHideButton');
            AddNewElement('.sectionHideButton', 'p', `Margaux partait dans la direction indiquée par la lune, réflechissant à ce que la lune venait de lui dire : "Jour de notre première grande voie" `);
          }, 30000); 
          setTimeout(() => {
            window.location.href = '/epreuve2';
          }, 40000); 
        };
        


        document.addEventListener('DOMContentLoaded', hideButtonMouvement())

        

        let compteurButton = 0
        let compteurDialogueLune = 0

        button.addEventListener('click', function() {
          compteurButton++
          switch (compteurButton) {
            case 1:
              hideButtonChanges('#ffffff0e', '.sectionHideButton', 'p', `Mince, le vent souffle trop fort. Margaux l'a presque entendu, mais n'a pas réussi à comprendre. Il faut essayer encore !`, 2.5);
              break;
          case 2:
              hideButtonChanges('#ffffff14', '.sectionHideButton', 'p', `Encore une fois ! Vite, Margaux doit essayer à nouveau !`, 3);
              break;
          case 3:
              hideButtonChanges('#ffffff27', '.sectionHideButton', 'p', `Ah ! Le murmure semble plus facile à entendre et à comprendre.`, 4);
              break;
          case 4:
              hideButtonChanges('#ffffff60', '.sectionHideButton', 'p', `Le son s'intensifie.`, 5);
              break;
          case 5:
              hideButtonChanges('#ffffff98', '.sectionHideButton', 'p', `Encore un petit effort.`, 6);
              break;
          case 6:
              hideButtonChanges('#ffffff', '.sectionHideButton', 'p', `Il semblait que le vent s'était arrêté. On pouvait entendre avec précision ce que le murmure disait et découvrir son identité`, 8);
              break;
          
              case 7:
                  button.style.position = 'relative'
                  button.style.margin = '0 auto'
                  button.style.bottom = ''
                  button.style.right = ''
                  button.style.width = `40vw`
                  button.style.height = `40vw`
                  document.documentElement.scrollTop = 0;
                  dialogueLune()
              break;
          }
      });

     