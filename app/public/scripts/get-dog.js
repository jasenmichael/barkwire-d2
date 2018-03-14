let dogId = window.location.pathname

fetch("/api" + dogId)
  .then(response => response.json())
  .then(response => {
    console.log(response.dog);
    addDogToPage(response.dog)
  })

function addDogToPage(dog) {
  const $li = document.createElement("li");
  $li.innerHTML = `
        <h3 class="dog name"><a href="/dogs/${dog.id}">${dog.name}</a></h3>
        <img class="profile-picture" src="/${dog.profilePicture}" alt="${dog.name}" />
        <p class="bio">${dog.bio}</p>
    `;
  document.querySelector(".dog").appendChild($li);
}
