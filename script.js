
document.addEventListener("DOMContentLoaded", () => {


  const sections = document.querySelectorAll(".esquerda, .direita");
  
  sections.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 1s ease";

  
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 300 * i);
  });







  const links = document.querySelectorAll("header ul li");

  links.forEach(link => {
    link.style.transition = "transform 0.3s ease, color 0.3s ease";
    link.addEventListener("mouseover", () => {
      link.style.transform = "scale(1.1)";
      link.style.color = "#00ffff";
    });
    link.addEventListener("mouseout", () => {
      link.style.transform = "scale(1)";
      link.style.color = "aliceblue";
    });
  });
});

///////////////////
document.addEventListener("DOMContentLoaded", () => {

  const icones = document.querySelectorAll(".imagens img");

  icones.forEach((icone) => {
    icone.addEventListener("mouseover", () => {
      icone.style.transition = "transform 0.4s ease, filter 0.4s ease";
      icone.style.transform = "scale(1.2)";
    });

    icone.addEventListener("mouseout", () => {
      icone.style.transform = "scale(1)";
    });
  });
});


const itensCabecalho = document.querySelectorAll("header ul li");


itensCabecalho.forEach(item => {
 
  item.addEventListener("mouseenter", () => {
    item.style.color = "red";
    item.style.textShadow = "0 0 10px red, 0 0 20px red, 0 0 40px red";
    item.style.transform = "scale(1.2)";
    item.style.transition = "all 0.3s ease";
  });


  item.addEventListener("mouseleave", () => {
    item.style.color = "aliceblue";
    item.style.textShadow = "none";
    item.style.transform = "scale(1)";
  });
});



const itensFooter = document.querySelectorAll("footer, footer *");

itensFooter.forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.color = "red";
    item.style.textShadow = "0 0 10px red, 0 0 20px red, 0 0 40px red";
    item.style.transform = "scale(1.2)";
    item.style.transition = "all 0.3s ease";
  });

  item.addEventListener("mouseleave", () => {
    item.style.color = "aliceblue";
    item.style.textShadow = "none";
    item.style.transform = "scale(1)";
  });
});


const foto = document.getElementById("minhaFoto");

foto.addEventListener("mouseenter", () => {
  foto.style.transition = "filter 0.3s ease";
  foto.style.filter = "drop-shadow(0 0 20px red) brightness(1.3)";
});

foto.addEventListener("mouseleave", () => {
  foto.style.filter = "none";
});


const nome = document.getElementById("meuNome");


nome.style.color = "red";


nome.addEventListener("mouseenter", () => {

  const animacao = nome.animate(
    [
      { textShadow: "0 0 5px red, 0 0 10px red" },
      { textShadow: "0 0 20px red, 0 0 40px red" },
      { textShadow: "0 0 5px red, 0 0 10px red" }
    ],
    {
      duration: 1000, // tempo de cada ciclo
      iterations: Infinity, // repete pra sempre enquanto o mouse estiver em cima
      easing: "ease-in-out"
    }
  );

 
  nome._animacao = animacao;
});


nome.addEventListener("mouseleave", () => {
  if (nome._animacao) nome._animacao.cancel();
  nome.style.textShadow = "none";
});
