"use strict"

let destination = "map";
resizeScene(destination);
information(destination);

import "annyang.js";
annyang.setLanguage("fr-FR");

// SPEECH RECOGNITION

var commands = {
  "poule" : chickenFarm,
  "basse-cour": farmyard,
  "poulailler": coop,
  "poussin": hatchery,

  "mouton" : sheepFarm,
  "prairie": meadow,
  "grange": barn,
  "hangar": hangar,

  "cochon" : pigFarm,
  "enclos": pigEnclosure,
  "bain": mud,
  "porcherie": pigsty,

  "légume": vegetableFarm,
  "serre": greenhouse,
  "verger": orchard,
  "potager": garden,
  
  "carte" : map,

  "Œuf" : eggs,
  "Tondre" : mow,
  "Nourrir" : feed,
  "Pomme" : apple
}

// CHICKEN FARM

function chickenFarm()
{
  let destination = "chicken";
  changeFarm(destination);
  resizeScene(destination);
}

function farmyard()
{
  let destination = "farmyard";
  changeFarm(destination);
  resizeScene(destination);
}

function coop()
{
  let destination = "coop";
  changeFarm(destination);
  resizeScene(destination);
}

function hatchery()
{
  let destination = "hatchery";
  changeFarm(destination);
  resizeScene(destination);
}

// SHEEP FARM

function sheepFarm()
{
  let destination = "sheep";
  changeFarm(destination);
  resizeScene(destination);
}

function meadow()
{
  let destination = "meadow";
  changeFarm(destination);
  resizeScene(destination);
}

function barn()
{
  let destination = "barn";
  changeFarm(destination);
  resizeScene(destination);
}

function hangar()
{
  let destination = "hangar";
  changeFarm(destination);
  resizeScene(destination);
}

// PIG FARM

function pigFarm()
{
  let destination = "pig";
  changeFarm(destination);
  resizeScene(destination);
}

function pigEnclosure()
{
  let destination = "pig_enclosure";
  changeFarm(destination);
  resizeScene(destination);
}

function mud()
{
  let destination = "mud";
  changeFarm(destination);
  resizeScene(destination);
}

function pigsty()
{
  let destination = "pigsty";
  changeFarm(destination);
  resizeScene(destination);
}

// VEGETABLE FARM

function vegetableFarm()
{
  let destination = "vegetable";
  changeFarm(destination);
  resizeScene(destination);
}

function greenhouse()
{
  let destination = "greenhouse"; 
  changeFarm(destination);
  resizeScene(destination);
}

function orchard()
{
  let destination = "orchard";
  changeFarm(destination);
  resizeScene(destination);
}

function garden()
{
  let destination = "garden";
  changeFarm(destination);
  resizeScene(destination);
}

// MAP

function map()
{
  let destination = "map";
  changeFarm(destination);
  resizeScene(destination);
}

// INTERACTION

function eggs()
{
  if(zone.scene == "coop")
  {
    let allEgg = document.querySelectorAll('.egg');

    for (let x = 0; x < allEgg.length; x++)
    {
      allEgg[x].classList.add('eggAnimated');
    }
  }
}

function mow()
{
  if(zone.scene == "hangar")
  {
  let sheepTransparent = document.querySelector('.hangar-mouton2');
  let sheepMowed = document.querySelector('.hangar-moutonTondu');

  sheepTransparent.classList.add('sheepTransparent');
  sheepMowed.classList.add('sheepMowed');
  }
}

function feed()
{
  if(zone.scene == "pig_enclosure")
  {
    let allFeed = document.querySelectorAll('.feed');

    for (let x = 0; x < allFeed.length; x++)
    {
      allFeed[x].classList.add('feedAnimated');
    }
  }
}

function apple()
{
  if(zone.scene == "orchard")
  {
    let allApple = document.querySelectorAll('.apple');

    for (let x = 0; x < allApple.length; x++)
    {
      allApple[x].classList.add('appleAnimated');
    }
  }
}

// LOADING SCENE

var zone =
{
    "farm" : "map",
    "scene" : null
}

function changeFarm(destination)
{
    switch(zone.farm)
    {
        case "map":
            if(destination == "chicken")
            {
                zone.farm = "chicken";
                zone.scene = "chicken_farm";
                visible(destination);
                information(destination)
            }
            else if (destination == "sheep")
            {
                zone.farm = "sheep";
                zone.scene = "sheep_farm";
                visible(destination);
                information(destination)
            }
            else if (destination == "pig")
            {
                zone.farm = "pig";
                zone.scene = "pig_farm";
                visible(destination);
                information(destination)
            }
            else if (destination == "vegetable")
            {
                zone.farm = "vegetable";
                zone.scene = "vegetable_farm";
                visible(destination);
                information(destination)
            }
            else
            {
                console.warn("Can't go");
                destination = "map";
            }
        break;

        case "chicken":
            if(destination == "farmyard")
            {
                zone.scene = "farmyard";
                visible(destination);
                information(destination)
            }
            else if (destination == "coop")
            {
                zone.scene = "coop";
                visible(destination);
                information(destination)
            }
            else if (destination == "hatchery")
            {
                zone.scene = "hatchery";
                visible(destination);
                information(destination)
            }
            else if (destination == "chicken")
            {
                zone.scene = "chicken";
                visible(destination);
                information(destination)
            }
            else if (destination == "map")
            {
                zone.farm = "map";
                zone.scene = null;
                visible(destination);
                information(destination)
            }
            else
            {
                console.warn("Can't go");
                destination = "chicken";
                information(destination)
            }
        break;
        case "sheep":
            if(destination == "meadow")
            {
                zone.scene = "meadow";
                visible(destination);
                information(destination)
            }
            else if (destination == "barn")
            {
                zone.scene = "barn";
                visible(destination);
                information(destination)
            }
            else if (destination == "hangar")
            {
                zone.scene = "hangar";
                visible(destination);
                information(destination)
            }
            else if (destination == "sheep")
            {
                zone.scene = "sheep";
                visible(destination);
                information(destination)
            }
            else if (destination == "map")
            {
                zone.farm = "map";
                zone.scene = null;
                visible(destination);
                information(destination)
            }
            else
            {
                console.warn("Can't go");
                destination = "sheep";
            }
        break;

        case "pig":
            if(destination == "pig_enclosure")
            {
                zone.scene = "pig_enclosure";
                visible(destination);
                information(destination)
            }
            else if (destination == "pigsty")
            {
                zone.scene = "pigsty";
                visible(destination);
                information(destination)
            }
            else if (destination == "mud")
            {
                zone.scene = "mud";
                visible(destination);
                information(destination)
            }
            else if (destination == "pig")
            {
                zone.scene = "pig";
                visible(destination);
                information(destination)
            }
            else if (destination == "map")
            {
                zone.farm = "map";
                zone.scene = null;
                visible(destination);
                information(destination)
            }
            else
            {
                console.warn("Can't go");
                destination = "pig";
            }
        break;

        case "vegetable":
            if(destination == "orchard")
            {
                zone.scene = "orchard";
                visible(destination);
                information(destination)
            }
            else if (destination == "greenhouse")
            {
                zone.scene = "greenhouse";
                visible(destination);
                information(destination)
            }
            else if (destination == "garden")
            {
                zone.scene = "garden";
                visible(destination);
                information(destination)
            }
            else if (destination == "vegetable")
            {
                zone.scene = "vegetable";
                visible(destination);
                information(destination)
            }
            else if (destination == "map")
            {
                zone.farm = "map";
                zone.scene = null;
                visible(destination);
                information(destination)
            }
            else
            {
                console.warn("Can't go");
                destination = "vegetable";
            }
        break;
    }
}

function visible(destination)
{
  let previousVisible = document.querySelector('.visible');

  if(previousVisible)
  {
    previousVisible.classList.toggle('visible');
  }

  let visibleItem = document.querySelector('.'+destination);
  visibleItem.classList.add('visible');

  if(zone.scene !="coop")
  {
  let allEgg = document.querySelectorAll('.egg');

  for (let x = 0; x < allEgg.length; x++)
  {
    allEgg[x].classList.remove('eggAnimated');
  }
  }

  if (zone.scene !="hangar")
  {
    let sheepTransparent = document.querySelector('.hangar-mouton2');
    let sheepMowed = document.querySelector('.hangar-moutonTondu');

    sheepTransparent.classList.remove('sheepTransparent');
    sheepMowed.classList.remove('sheepMowed');
  }

  if(zone.scene !="pig_enclosure")
  {
    let allFeed = document.querySelectorAll(".feed");

    for (let x = 0; x < allFeed.length; x++)
    {
      allFeed[x].classList.remove('feedAnimated');
    }
  }

  if(zone.scene !="orchard")
  {
  let allApple = document.querySelectorAll(".apple");

  for (let x = 0; x < allApple.length; x++)
  {
    allApple[x].classList.remove('appleAnimated');
  }
  }
}

// FUNCTION RESIZE

window.addEventListener("resize",  event =>
{
  resizeScene(destination);
});

function resizeScene(destination)
{
  let screenWidth = document.documentElement.clientWidth;
  let screenHeight = document.documentElement.clientHeight;

  let imageWidth = 1920;
  let imageHeight = 1080;

  if (screenWidth / screenHeight <= 1.78)
  {
    let ratio = screenWidth / imageWidth;

    let imageWidthContain = imageWidth * ratio;
    let imageHeightContain = imageHeight * ratio;
  
    let scene = document.querySelector('.scene');
  
    scene.style.width = imageWidthContain + 'px';
    scene.style.height = imageHeightContain + 'px';

    scene.style.top = "50%";
    scene.style.transform = "translate(0, -50%)";
  }

  else
  {
    let ratio = screenHeight / imageHeight;

    let imageWidthContain = imageWidth * ratio;
    let imageHeightContain = imageHeight * ratio;
    
    let scene = document.querySelector('.scene');
    
    scene.style.width = imageWidthContain + 'px';
    scene.style.height = imageHeightContain + 'px';
    scene.style.top = "0";

    let marginLeft = (screenWidth - imageWidthContain)/2;

    scene.style.transform = "translate("+marginLeft+"px, 0px)";
  }
}

// FUNCTION WRITE INFORMATIONS

function information(destination)
{
  fetch("https://morigann.be/projets/ilab/game/assets/data/informations.json")
  .then(response => response.json())
  .then(data => {
    
    let bubbles = document.querySelectorAll('.farmer_speak');
    let farmNumber = 0;

    for (let x = 0; x < bubbles.length; x++)
    {
      if (destination == "map")
      {
        farmNumber = 0;
      }
      else if (destination == "chicken" || destination == "farmyard" ||
      destination == "coop" || destination == "hatchery")
      {
        farmNumber = 1;
      }
      else if (destination == "sheep" || destination == "meadow" ||
      destination == "barn" || destination == "hangar")
      {
        farmNumber = 2;
      }
      else if (destination == "pig" || destination == "pig_enclosure" ||
      destination == "pigsty" || destination == "mud")
      {
        farmNumber = 3;
      }
      else if (destination == "vegetable" || destination == "orchard" || 
      destination == "greenhouse" || destination == "garden")
      {
        farmNumber = 4;
      }
        let i = Math.floor(Math.random() * data.farm[farmNumber].information.length);
        bubbles[x].innerHTML = data.farm[farmNumber].information[i];
    }
  });
}

// DON'T DELETE

annyang.addCommands(commands);
annyang.start();


// DEBUG

if(annyang)
{
  console.log("annyang is OK");
}
