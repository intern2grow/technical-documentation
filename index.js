document.querySelectorAll("pre").forEach((pre) => {
     //      console.log(icon);
     let icond = document.createElement("div");
     let iconi = document.createElement("img");
     icond.append(iconi);
     iconi.classList.add(["copy-icon"]);
     icond.classList.add(["copy-icond"]);
     iconi.src = "copy-icon.svg";
     pre.prepend(icond);
     icond.addEventListener("click", () =>
          navigator.clipboard.writeText(pre.querySelector("code").innerText)
     );
});
