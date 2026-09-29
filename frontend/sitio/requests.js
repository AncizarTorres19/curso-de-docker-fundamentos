var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const apiBase = (window.BACKEND_URL || '').replace(/\/$/, '');
  const endpoint = apiBase ? apiBase + '/getMyInfo' : '/getMyInfo';

  fetch(endpoint, requestOptions)
  .then(res => {
    if (!res.ok) {
      alert("HTTP error! status:" + res.status);
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(json => {
    document.getElementById("name").textContent = "Hola " + json.name + " " + json.lastname;
    document.getElementById("author").textContent = "2026 - Hecho por " + json.author;
    document.getElementById("facebookLink").href = "https://www.facebook.com/" + json.socialMedia.facebookUser;
    document.getElementById("instagramUser").href = "https://www.instagram.com/" + json.socialMedia.instagramUser;
    document.getElementById("xUser").href = "https://www.x.com/" + json.socialMedia.xUser;
    document.getElementById("githubUser").href = "https://www.github.com/" + json.socialMedia.githubUser;
    document.getElementById("linkedinUser").href = "https://www.linkedin.com/in/" + json.socialMedia.linkedin;
    document.getElementById("website").href = json.blog;
  })
  .catch(error => alert("error: " + error));