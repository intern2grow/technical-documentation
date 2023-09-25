const btnCopyOne = document.querySelector('.btn-one');
btnCopyOne.addEventListener('click', async ()=>{
    const text = document.querySelector('.code-one').textContent;
    await navigator.clipboard.writeText(text);
})

const btnCopyTwo = document.querySelector('.btn-two');
btnCopyTwo.addEventListener('click', async ()=>{
    const text = document.querySelector('.code-two').textContent;
    await navigator.clipboard.writeText(text);
})

const btnCopyThree = document.querySelector('.btn-three');
btnCopyThree.addEventListener('click', async ()=>{
    const text = document.querySelector('.code-three').textContent;
    await navigator.clipboard.writeText(text);
})

const btnCopyFour = document.querySelector('.btn-four');
btnCopyFour.addEventListener('click', async ()=>{
    const text = document.querySelector('.code-four').textContent;
    await navigator.clipboard.writeText(text);
})

const btnCopyFive = document.querySelector('.btn-five');
btnCopyFive.addEventListener('click', async ()=>{
    const text = document.querySelector('.code-five').textContent;
    await navigator.clipboard.writeText(text);
})

const btnCopySex = document.querySelector('.btn-sex');
btnCopySex.addEventListener('click', async ()=>{
    const text = document.querySelector('.code-sex').textContent;
    await navigator.clipboard.writeText(text);
})

const btnCopySeven = document.querySelector('.btn-seven');
btnCopySeven.addEventListener('click', async ()=>{
    const text = document.querySelector('.code-seven').textContent;
    await navigator.clipboard.writeText(text);
})

const btnCopyEight = document.querySelector('.btn-eight');
btnCopyEight.addEventListener('click', async ()=>{
    const text = document.querySelector('.code-eight').textContent;
    await navigator.clipboard.writeText(text);
})
