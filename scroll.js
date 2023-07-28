const sr = ScrollReveal({
    distance: "35px",
    duration: 2400,
    reset: true,
  });

  sr.reveal(".main-text", {
    delay: 110,
    origin: "left",
  });  
  sr.reveal(".img-bg", {
    delay: 210,
    origin: "right",
  });
  sr.reveal(".attribution", {
    delay: 310,
    origin: "bottom",
  });