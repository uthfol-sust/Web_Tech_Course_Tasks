const localDateTime = document.querySelector(".time")

const time = document.createElement("p")
const date = document.createElement("p")
const locationEl = document.createElement("p")

locationEl.innerHTML = `<i class="fa-solid fa-location-dot dateTimeIcon"> </i> Sylhet, Bangladesh`

setInterval(() => {
    let d = new Date();

    let hours = d.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    let yeardate = d.toLocaleDateString()

    time.innerHTML = `<i class="fa-regular fa-clock dateTimeIcon"></i> Local Time: ${hours}`
    date.innerHTML = `<i class="fa-regular fa-calendar dateTimeIcon"></i> Date: ${yeardate}`
}, 1000)
localDateTime.append(time, date, locationEl)


//Right section
const midBody = document.querySelector(".each-section");

const drawEducation = () => {
    const container = document.createElement("div");
    container.classList.add("section-card")
    const title = document.createElement("h2");
    title.textContent = "Educational Status";

    const educationData = [
        { 
            degree: "B.Sc. in Software Engineering", 
            institution: "Shahjalal Science and Technology University, Sylhet", 
            year: "2021 - Present",
            gpa: "3.50 out of 4(up to 3rd semester)"
        },
        { 
            degree: "Higher Secondary Certificate (HSC)", 
            institution: "Royal Media College, Mymensingh", 
            year: "2019 - 2021",
            gpa: "5.00 / 5.00"
        }
    ];

    const list = document.createElement("ul");
    educationData.forEach(edu => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${edu.degree}</strong> — ${edu.institution} 
            <em>(${edu.year})</em> <br>
            <span style="color: #948989ff;">| GPA: ${edu.gpa}</span>
        `;
        li.classList.add("li-item")
        list.appendChild(li);
    });

    container.append(title, list);
    return container;
};

const drawExperience = () => {
    const container = document.createElement("div");
    container.classList.add("section-card");
    const title = document.createElement("h2");
    title.textContent = "Achievements";

    const achievementsList = [
        "NASA International Space Apps Challenge Bangladesh 2024 - 2nd Runner-up (Sylhet Region)"
    ];

    const achievementsUl = document.createElement("ul");
    achievementsList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.classList.add("li-item")
        achievementsUl.appendChild(li);
    });

    // Organizations & Volunteer Experience
    const orgTitle = document.createElement("h2");
    orgTitle.textContent = "Organizations & Volunteer Experience";
    const orgList = [
        "SWE Society (Feb 2023 - Mar 2024) - Executive Committee Member",
        "WordPress Camp Sylhet - Volunteer, Food Management Team (2024)",
        "WordPress Camp Sylhet - Volunteer, Registration Management Team (2023)",
        "Mymensingh Student Association, SUST (2025 - 2026) - Information & Technology Secretary"
    ];

    const orgUl = document.createElement("ul");
    orgList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.classList.add("li-item")
        orgUl.appendChild(li);
    });
    container.append(title,achievementsUl,orgTitle,orgUl);
    return container;
};


const drawOthers = () => {
    const container = document.createElement("div");
    container.classList.add("section-card");
    const title = document.createElement("h2");
    title.textContent = "Problem Solving";

    const langPara = document.createElement("p");
    langPara.innerHTML = "<strong>Languages:</strong> C / C++";

    const summaryPara = document.createElement("p");
    summaryPara.textContent = "Solved more than 770 problems on various Online Judges.";

    const contestPara = document.createElement("p");
    contestPara.textContent = "Participated in 60+ online and onsite contests.";

    // Platforms list
    const platforms = [
        { platform: "Codeforces", solved: "600+", rating: 1133, link: "https://codeforces.com" },
        { platform: "CodeChef", solved: "120+", rating: 1518, link: "https://www.codechef.com" },
        { platform: "LeetCode", solved: "20+", rating: null, link: "https://leetcode.com" },
    ];

    const platformContainer = document.createElement("div");
    platformContainer.classList.add("platform-list");

    platforms.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("platform-card");

        const name = document.createElement("a");
        name.href = p.link;
        name.textContent = p.platform;
        name.classList.add("platform-name");

        const solved = document.createElement("p");
        solved.textContent = p.solved ? `Solved: ${p.solved}` : "";

        const rating = document.createElement("p");
        rating.textContent = p.rating ? `Max Rating: ${p.rating}` : "";

        card.append(name,solved,rating);
        platformContainer.appendChild(card);
    });

    container.append(title,langPara,summaryPara,contestPara,platformContainer);
    return container;
};



const drawAll = () => {
    midBody.innerHTML = "";
    midBody.append(
        drawEducation(),
        drawExperience(),
        drawOthers()
    );
};

drawAll();

const titles = document.querySelectorAll(".section-text");
titles.forEach((ele) => {
    ele.addEventListener("click", (e) => {
    
        titles.forEach(t => t.classList.remove("selected-section"));
        e.target.classList.add("selected-section");

        const sectionName = e.target.textContent.trim();
        midBody.innerHTML = "";
        if (sectionName=="Education") {
            midBody.append(drawEducation());
        } 
        else if (sectionName=="Experience") {
            midBody.append(drawExperience());
        } 
        else if (sectionName=="Others") {
            midBody.append(drawOthers());
        } 
        else if (sectionName=="All") {
            drawAll();
        }
    });
});
