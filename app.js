const data = [
  {
    name: 'Sooraj KV',
    profile: 'Developer',
    skills: 'AEM, Java, Js, React, Bootstrap, AWS',
    location: 'Melbourne Australia',
    image: 'images/sooraj.JPG'
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Role: ${currentProfile.profile}</li>
        <li class="list-group-item">Skills: ${currentProfile.skills}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
      </ul>
      <a href="#" type="button" class="btn btn-primary btn-block mt-3" data-toggle="modal" data-target="#exampleModalCenter">View full Profile</a>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}