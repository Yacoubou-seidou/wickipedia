const formBarre = document.getElementById("form-barre");
const barreRech = document.getElementById("barre-rech");
const btnSend = document.getElementById("btn-send");
const searchResult = document.getElementById("search-result");

function wikipediaSearch() {}
formBarre.addEventListener("submit", faireLaRequete);
function faireLaRequete(event) {
  event.preventDefault();
  searchResult.innerHTML = "";
  const objetRecher = barreRech.value.trim();
  const turl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${objetRecher}`;
  fetch(turl)
    .then((response) => response.json())
    .then((response) => {
      console.log(response.query.search);
      response.query.search.forEach((result) => {
        const adresse = `https://en.wikipedia.org/?curid=${result.pageid}`;
        console.log(adresse);
        searchResult.innerHTML += `<div class="col-3 border border-info m-2 text-center bg-white p-2">
        <h3 class="">
          ${result.title}
        </h3>
        <span class="result-snippet">${result.snippet}</span><br>
        <a href="${adresse}" class=" " target="_blank" rel="noopener">Read More</a>
      </div>`;
      });
    });
}
