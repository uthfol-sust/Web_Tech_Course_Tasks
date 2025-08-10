  const text = "Hi! I'm Uthpol Ghosh";
  const typeText = document.getElementById("type-text");
  let index = 0;
  let isDeleting = false;

  function typeLoop() {
    if (isDeleting) {
      typeText.textContent = text.substring(0, index--);
    } else {
      typeText.textContent = text.substring(0, index++);
    }

    if (!isDeleting && index === text.length + 1) {
      setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && index === 0) {
      isDeleting = false;
    }

    const speed = isDeleting ? 60 : 100;
    setTimeout(typeLoop, speed);
  }

  window.onload = typeLoop;
  

  //project section
  import projectsData from "./project.data.js";
  // console.log(projectsData)

  const  createProjectCard = (project) => {
  const card = document.createElement("div");
  card.classList.add("project");

  if (project.image) {
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title + " screenshot";
    img.classList.add("project-img");
    card.appendChild(img);
  }

  const title = document.createElement("h3");
  title.classList.add("project-title");
  title.textContent = project.title;

  if (project.github) {
    const githubLink = document.createElement("a");
    githubLink.href = project.github; 
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
    githubLink.classList.add("github-link");
    githubLink.textContent = "View";
    title.appendChild(githubLink);
  }
  card.appendChild(title);

  if (project.technologies && project.technologies.length) {
    const tech = document.createElement("p");
    tech.classList.add("project-tech");
    tech.innerHTML = `<strong>Technologies:</strong> ${project.technologies.join(", ")}`;
    card.appendChild(tech);
  }

  if (project.description) {
    const desc = document.createElement("p");
    desc.classList.add("project-desc");
    desc.textContent = project.description;
    card.appendChild(desc);
  }
  return card;
}

const projectsList = document.querySelector(".projects-list")

projectsData.forEach(proj => {
  const card = createProjectCard(proj)
  projectsList.appendChild(card)
});


//stack section
import {uiuxSkills,
       frontendSkills,
       backendSkills,
       mlSkills,
       appDevSkills,
       toolSkills,expertiseData} from "./stack.list.data.js"


//left-side
const stackList = document.querySelector(".stack-list")

const expertList = document.createElement("div")
expertList.classList.add("lang-list")
expertiseData.forEach(exp =>{

  let [firstName, lastName ]= exp.title.split(" ")
  console.log(firstName)

  const div = document.createElement("div")
  div.classList.add('exp-card')
  div.id = firstName;

  const p = document.createElement("p")
  p.classList.add("exp-title")

  const img = document.createElement("img")
  img.classList.add("exp-icon")

  const des = document.createElement("p")
  des.classList.add("exp-des-text")

  p.textContent = exp.title
  img.src = exp.icon
  des.textContent = exp.description
  div.append(img ,p , des)

  expertList.append(div)
})

stackList.append(expertList)


//right side
const allStack = document.querySelectorAll(".exp-card")
allStack.forEach(stack => {
  stack.addEventListener("click", (e) => {
    let skillsObject,subHeading;
    const titleEl = stack.querySelector(".exp-title")
    subHeading = titleEl.textContent.trim()
    console.log(subHeading)

     if(subHeading=="UI/UX Design"){
          skillsObject = uiuxSkills
     }else if(subHeading=="Frontend Development"){
          skillsObject = frontendSkills
     }else if(subHeading=="Machine Learning"){
          skillsObject = mlSkills
     }else if(subHeading=="Backend Development"){
          skillsObject = backendSkills
     }else if(subHeading=="App Development"){
          skillsObject = appDevSkills
     }else{
          skillsObject = toolSkills
     }
    display(skillsObject ,subHeading)
  });
});

const skills = document.querySelector(".skills")

const display = (skillsObject ,subHeading)=>{
   skills.textContent = ''
   const langList = document.createElement("div")
   langList.classList.add("skills-list")

   skillsObject.forEach(obj =>{
    const div = document.createElement("div")
    div.classList.add('lang')

    const p = document.createElement("p")
    p.classList.add("stack-name")

    const img = document.createElement("img")
    img.classList.add("stack-img")

    p.textContent = obj.name
    img.src = obj.icon
    div.append(p,img)

    langList.append(div)
  })
  const h2 = document.createElement("h2")
  h2.classList.add("skills-heading")
  h2.textContent = subHeading + " With.."

  skills.append(h2, langList)

}

display(uiuxSkills,"UI/UX Design")


   
//contact section
  const form = document.querySelector("#contactForm")
  const formSubmit = document.querySelector("#submitBtn")
  const status = document.createElement('p')
  
  formSubmit.addEventListener("click" , (e)=>{
     e.preventDefault();

     if(status.textContent!=''){
      status.textContent = ''
     }

     const nameVisitor = document.querySelector("#name")
     const emailVisitor = document.querySelector("#email")
     const subjectVisitor = document.querySelector("#subject")
     const message = document.querySelector("#message")

     const formData ={
      'name' : nameVisitor.value.trim(),
      'email' : emailVisitor.value.trim(),
      'subject':subjectVisitor.value.trim(),
      'message': message.value.trim()
     }
     
     if(formData.name!='' && formData.email!='' &&formData.subject!='' && formData.message!=''){
       console.log(formData)
       status.textContent = 'Message Sent successfully'
       status.style.color = 'green'
     }
     else{
       status.textContent = "Please complete all required fields"
       status.style.color = 'red'
     }  
     
     status.style.fontSize = '15px'
     status.style.textAlign = 'center'
     status.style.marginTop = '0px'
     
     form.append(status);

    nameVisitor.value =''
    emailVisitor.value = ''
    subjectVisitor.value = ''
    message.value = ''
  })