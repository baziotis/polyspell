import nspell from 'https://cdn.jsdelivr.net/npm/nspell@2.1.5/+esm'

let dictionary;
async function setup() {
  const aff = await (await fetch('./el_GR.aff')).text();
  const dic = await (await fetch('./el_GR.dic')).text();  
  
  dictionary = nspell(aff, dic);
}



setup();

let suggestions = new Map();
let maxSuggestions = 5;

// worker.js
self.onmessage = function (event) {
  const w = event.data;
  let wSuggestions = suggestions.get(w);
  if (wSuggestions === undefined) {
    wSuggestions = dictionary.suggest(w, maxSuggestions);
    suggestions.set(w, wSuggestions);
  }
  const res = {w: w, sugg: wSuggestions};
  self.postMessage(res);
};
