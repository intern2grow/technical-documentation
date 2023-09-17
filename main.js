// one code
const btnCopyOne = document.querySelector('#btn-copy-one');
btnCopyOne.addEventListener('click', async ()=>{
    const codeOne = document.querySelector('#code-one');
    const content = codeOne.textContent;
    await navigator.clipboard.writeText(content);
    alert('copied successfully');
})

// two code
const btnCopyTwo = document.querySelector('#btn-copy-two');
btnCopyTwo.addEventListener('click', async ()=>{
    const codeTwo = document.querySelector('#code-two');
    const content = codeTwo.textContent;
    await navigator.clipboard.writeText(content);
    alert('copied successfully');
})

// three code
const btnCopyThree = document.querySelector('#btn-copy-three');
btnCopyThree.addEventListener('click', async ()=>{
    const code_three = document.querySelector('#code_three');
    const content = code_three.textContent;
    await navigator.clipboard.writeText(content);
    alert('copied successfully');
})

// four code
const btnCopyFour = document.querySelector('#btn-copy-four');
btnCopyFour.addEventListener('click', async ()=>{
    const codeFour = document.querySelector('#code-four');
    const content = codeFour.textContent;
    await navigator.clipboard.writeText(content);
    alert('copied successfully');
})

// five code
const btnCopyFive = document.querySelector('#btn-copy-five');
btnCopyFive.addEventListener('click', async ()=>{
    const codeFive = document.querySelector('#code-five');
    const content = codeFive.textContent;
    await navigator.clipboard.writeText(content);
    alert('copied successfully');
})

// six code
const btnCopySix = document.querySelector('#btn-copy-six');
btnCopySix.addEventListener('click', async ()=>{
    const codeSix = document.querySelector('#code-six');
    const content = codeSix.textContent;
    await navigator.clipboard.writeText(content);
    alert('copied successfully');
})

// sevev code
const btnCopySeven = document.querySelector('#btn-copy-seven');
btnCopySeven.addEventListener('click', async ()=>{
    const codeSeven = document.querySelector('#code-seven');
    const content = codeSeven.textContent;
    await navigator.clipboard.writeText(content);
    alert('copied successfully');
})

// eight code
const btnCopyEight = document.querySelector('#btn-copy-eight');
btnCopyEight.addEventListener('click', async ()=>{
    const codeEight = document.querySelector('#code-eight');
    const content = codeEight.textContent;
    await navigator.clipboard.writeText(content);
    alert('copied successfully');
})
