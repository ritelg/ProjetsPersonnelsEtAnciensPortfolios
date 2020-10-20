'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
    document.addEventListener('DOMContentLoaded', function () {

        var search = document.querySelector('#input-recherche');
        var nbResultats = document.querySelector('#nbResultats');

        var wikipedia = function () {
            function wikipedia() {
                _classCallCheck(this, wikipedia);
            }

            _createClass(wikipedia, null, [{
                key: 'search',
                value: function search(_search, limit) {
                    var _this = this;

                    fetch('https://en.wikipedia.org/w/api.php?' + 'action=opensearch&search=' + _search + '&limit=' + limit + '&format=json&origin=*').then(function (data) {
                        return data.json();
                    }).then(function (data) {
                        console.log(data);debugger;
                        _this.toDom(data, limit);
                    }).catch(function (err) {
                        console.error('Erreur dans la requete ', err.toString());
                    });
                }
            }, {
                key: 'toDom',
                value: function toDom(data, limit) {
                    var ul = document.querySelector('ul');
                    ul.innerHTML = "";
                    for (var i = 0; i < limit; i++) {
                        var titre = data[1][i];
                        var description = data[2][i];
                        var lien = data[3][i];

                        var a = document.createElement('a');
                        var li = document.createElement('li');
                        var h1 = document.createElement('h2');
                        var p = document.createElement('p');

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
            }]);

            return wikipedia;
        }();

        search.addEventListener("change", function (e) {

            wikipedia.search(search.value, nbResultats.value);
        });
    });
})();