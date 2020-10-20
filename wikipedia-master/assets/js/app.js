(function () {
    document.addEventListener('DOMContentLoaded', function () {

        const search = document.querySelector('#input-recherche');
        const nbResultats = document.querySelector('#nbResultats');

        class wikipedia {

            static search(search, limit) {

                fetch('https://en.wikipedia.org/w/api.php?' + 'action=opensearch&search=' + search + '&limit=' + limit + '&format=json&origin=*')
                    .then((data) => { return data.json(); })
                    .then((data) => { this.toDom(data, limit); })
                    .catch((err) => {
                        console.error('Erreur dans la requete ', err.toString());
                    });
            }

            static toDom(data, limit) {
                const ul = document.querySelector('ul');
                ul.innerHTML = "";
                for(let i = 0; i < limit; i++) {
                    let titre = data[1][i];
                    let description = data[2][i];
                    let lien = data[3][i];

                    let a = document.createElement('a');
                    let li = document.createElement('li');
                    let h1 = document.createElement('h2');
                    let p = document.createElement('p');


                    a.setAttribute('href', lien);
                    a.setAttribute('alt', titre);
                    h1.innerHTML = titre;
                    p.innerHTML = description;


                    a.appendChild(h1);
                    a.appendChild(p);
                    li.appendChild(a);
                    ul.appendChild(li);
                }
            }
        }

        search.addEventListener("change", (e) => {

            wikipedia.search(search.value, nbResultats.value);
        });
    });

})();
