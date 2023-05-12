
  let professions = ["Программист", "Преподаватель", "Продавец", "Психолог", "Верстальщик"];

  const autoСomplete = document.querySelector('.profession');
  autoСomplete.addEventListener('keyup', function () {
    let text = document.getElementById("profession").value.toLowerCase();
    let suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";
    if (text !== "") {
      let matches = professions.filter(function(profession) {
        return profession.toLowerCase().startsWith(text);
      });
      let list = document.createElement("ul");
      matches.forEach(function(match) {
        let item = document.createElement("li");
        item.textContent = match;
        item.addEventListener("click", function() {
          document.getElementById("profession").value = match;
          suggestions.innerHTML = "";
        });
        list.appendChild(item);
      });
      suggestions.appendChild(list);
    }
  })



