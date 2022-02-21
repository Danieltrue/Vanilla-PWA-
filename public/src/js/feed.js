var shareImageButton = document.querySelector("#share-image-button");
var createPostArea = document.querySelector("#create-post");
var closeCreatePostModalButton = document.querySelector(
  "#close-create-post-modal-btn"
);

function openCreatePostModal() {
  createPostArea.style.display = "block";
  if (deferedPrompt) {
    deferedPrompt.prompt();
    deferedPrompt.userChoice.then((results) => {
      console.log(results.outcome);

      if (results.outcome === "dismissed") {
        console.log("User Did not add to home screen");
      } else {
        console.log("App Added to Home Screen");
      }
    });
    deferedPrompt = null;
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = "none";
}

shareImageButton.addEventListener("click", openCreatePostModal);

closeCreatePostModalButton.addEventListener("click", closeCreatePostModal);
