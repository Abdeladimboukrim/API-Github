// Main Variables
let theInput = document.querySelector(".username");
let getButton = document.querySelector(".search");
let reposData = document.querySelector(".show-data");


getButton.addEventListener("click",function () {
    getRepos();
  })

// Get Repos Function
function getRepos() {

  if (theInput.value == "") { // If Value Is Empty

    reposData.innerHTML = "<span>Please Write Github Username.</span>";

  } else {

    fetch(`https://api.github.com/users/${theInput.value}/repos`)

    .then((response) => response.json())

    .then((repositories) => {

      // Empty The Container
      reposData.innerHTML = '';

      // Loop On Repositories
      repositories.forEach(repo => {

        // Create The Main Div Element  ... container box 
        let mainDiv = document.createElement("div");
        mainDiv.className = 'row two';

        // left img 
        let leftDiv = document.createElement("div");
        leftDiv.className = 'card col-sm-3';    
        
        //  // left img 
        //  let leftDiv = document.createElement("div");
        //  let att2=document.createAttribute("class");
        //  att2.value="card col-sm-3";
        //  rightDiv.classList.add("mystyle")

        // Create img
        let img = document.createElement("img");
        img.src = "(repo.avatar_url)";
        img.classList.add("img-thumbnail");        
        leftDiv.appendChild(img);


        //right section repo name .. desc ..span  .. update
        let rightDiv = document.createElement("div");
        rightDiv.className = 'card-body col-sm-9'; 

        
            // Create Repo Name Text
        let repoName = document.createTextNode(repo.name);

        // addd repo description
        let descName = document.createTextNode(repo.description);

        // let az = URL ; // img link 

        let lastpush = document.createTextNode(repo.pushed_at);


        // Append The Text To Main Div
        rightDiv.appendChild(repoName);

        // addd
        rightDiv.appendChild(descName);

        // leftDiv.appendChild(URL)

        rightDiv.appendChild(lastpush);

       

        // Create Stars Count Span
        let starsSpan = document.createElement("span");

        // Create The Stars Count Text
        let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

        // adddddd span for issues

        let issuesSpan = document.createElement("span");

        let issuesText = document.createTextNode(`Issues ${repo.open_issues}`);


        // Add Stars Count Text To Stars Span
        starsSpan.appendChild(starsText);

    // adddddddddd
        issuesSpan.appendChild(issuesText);

        // Append Stars Count Span To Main Div
        rightDiv.appendChild(starsSpan);

    // addddd
        rightDiv.appendChild(issuesSpan);

        // // Add Class On Main Div
        // mainDiv.className = 'repo-box';
        
        // leftDiv.className = 'card col-sm-3';
        
        // rightDiv.className = 'card-body col-sm-9';

        // Append The Main Div To Container
        
        mainDiv.appendChild(leftDiv);
        mainDiv.appendChild(rightDiv);
        reposData.appendChild(mainDiv);

      });

    });

  }

}