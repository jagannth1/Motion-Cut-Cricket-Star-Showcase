







function submitStory() {
    // const nameInput = document.getElementById('fan-name').value;
    const storyText = document.getElementById('fan-story').value;
   
    const blog=document.getElementById("submitted-stories")

    if (storyText.trim() !== "") {
        const storyParagraph = document.createElement('h5');
        // const storyName = document.createElement('h4');
        // storyName.textContent = nameInput;
       
       
        storyParagraph.textContent = storyText
        blog.appendChild(storyParagraph);

       

            // blog.appendChild(storyName);
        
      
        
        document.getElementById('fan-story').value = "";
        document.getElementById('fan-name').value = "";
    }
}
