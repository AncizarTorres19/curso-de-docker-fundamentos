var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const apiBase = (window.BACKEND_URL || '').replace(/\/$/, '');
  const endpoint = apiBase ? apiBase + '/getMyInfo' : '/getMyInfo';

  fetch(endpoint, requestOptions)
  .then(res => {
    if (!res.ok) {
      throw new Error('HTTP ' + res.status);
    }
    return res.json();
  })
  .then(json => {
    document.getElementById("name").textContent = json.name + " " + json.lastname;
    document.getElementById("author").textContent = "© 2026 · Hecho por " + json.author;
    document.getElementById("facebookLink").href = json.socialMedia.facebook;
    document.getElementById("instagramUser").href = json.socialMedia.instagram;
    document.getElementById("githubUser").href = json.socialMedia.github;
    document.getElementById("linkedinUser").href = json.socialMedia.linkedin;
    document.getElementById("website").href = json.portfolio;
    document.getElementById("websiteRepo").href = json.portfolioRepo;
  })
  // Sin backend la página se queda con los datos estáticos del HTML
  .catch(error => console.error("getMyInfo:", error));