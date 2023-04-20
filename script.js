// Get all the copy icons on the page
const copyIcons = document.querySelectorAll('.copy-icon');

// Loop through each icon and add an event listener
copyIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Get the code block associated with this icon
    const codeBlock = icon.previousElementSibling;
    
    // Create a new range object and select the code block's text
    const range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().addRange(range);
    
    // Copy the selected text to the clipboard
    document.execCommand('copy');
    
    // Remove the selection
    window.getSelection().removeAllRanges();
    
    // Change the icon text to indicate that the code was copied
    icon.textContent = 'Copied!';
    
    // Reset the icon text after a few seconds
    setTimeout(() => {
      icon.textContent = 'Copy';
    }, 2000);
  });
});
