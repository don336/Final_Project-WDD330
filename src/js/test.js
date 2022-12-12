function youAreHere(position) {
  //   navigator.geolocation.getCurrentPosition(youAreHere);
  //   console.log(`Latitude: ${position.coords.latitude}`);
  // }
  const captionDesc = document.querySelector(".container-2");
  const id = navigator.geolocation.getCurrentPosition(youAreHere);

  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const p1 = document.createElement("p");
  const p2 = document.createElement("h6");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");
  const p6 = document.createElement("p");

  h2.innerHTML = "Your Current Location Details";
  p1.innerHTML = `<strong>Latitude:</strong> ${position.coords.latitude}, <strong>Longitude:</strong> ${position.coords.longitude}`;
  p3.innerHTML = `<strong>Speed:</strong> ${position.speed}`;
  p4.innerHTML = `<strong>Altitude:</strong> ${position.altitude}`;
  p5.innerHTML = `<strong>TimeStamp:</strong> ${position.timestamp}`;
  p6.innerHTML = `<strong>Accuracy:</strong> ${position.accuracy}`;

  section.appendChild(h2);
  section.appendChild(p1);
  section.appendChild(p2);
  section.appendChild(p3);
  section.appendChild(p4);
  section.appendChild(p5);
  section.appendChild(p6);

  captionDesc.append(section);

  navigator.geolocation.clearWatch(id);
}

youAreHere();
