import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/cynthicrush') 
.then(res => {
  const cards = document.querySelector('.cards');
  cards.appendChild(userCard(res.data));
})
.catch(err => {
  debugger;
  console.log(err);
})



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(person => {
  axios.get(`https://api.github.com/users/${person}`) 
  .then(res => {
    const cards = document.querySelector('.cards');
    cards.appendChild(userCard(res.data));
  })
  .catch(err => {
    debugger;
    console.log(err);
  })
})



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function userCard(userObj) {
  const {avatar_url, name, login, location, html_url, followers, following, bio } = userObj;

  const userCard = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const profileName = document.createElement('h3');
  const profileUserName = document.createElement('p');
  const profileLocation = document.createElement('p');
  const profile = document.createElement('p');
  const a = document.createElement('a');
  const profileFollowers = document.createElement('p');
  const profileFollowing = document.createElement('p');
  const profileBio = document.createElement('p');

  userCard.appendChild(userImg)
  userCard.appendChild(cardInfo);
  cardInfo.appendChild(profileName);
  cardInfo.appendChild(profileUserName);
  cardInfo.appendChild(profileLocation);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(a);
  cardInfo.appendChild(profileFollowers);
  cardInfo.appendChild(profileFollowing);
  cardInfo.appendChild(profileBio);

  userCard.className = 'card';
  cardInfo.className = 'card-info';
  profileName.className = 'name';
  profileUserName.className = 'username';
  
  userImg.src=avatar_url;
  a.setAttribute("href", html_url);
  a.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp; ${html_url}`;
  

  profileName.textContent=name;
  profileUserName.textContent=login;
  profileLocation.textContent=`Location: ${location}`;
  profile.textContent='Profile:';
  profileFollowers.textContent=`Followers: ${followers}`;
  profileFollowing.textContent=`Following: ${following}`;
  profileBio.textContent=`Bio: ${bio}`;

  console.log('userCard', userCard);
  return userCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
