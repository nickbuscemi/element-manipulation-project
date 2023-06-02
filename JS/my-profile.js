// important data
class Person {
    constructor(name, email, phone, linkedin, github) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.linkedin = linkedin;
        this.github = github;
    }
}

let nick = new Person(
    "Nick Buscemi", 
    "nick.buscemi13@gmail.com",
    "(631) 316-5618",
    "https://www.linkedin.com/in/nicholas-buscemi-0023a9248/",
    "https://github.com/nickbuscemi"
    );



window.onload = function () {
    //creating the Header
    var name = document.createElement("h1");
    name.id = "name";
    name.className = 'name'
    name.textContent = nick.name;
    document.body.appendChild(name);

    // creating a list of details
    let details = document.createElement("ul");
    details.id = "details";
    details.className = 'details';

    let detailItems = [
        {type: "text", content: `Email: ${nick.email}`},
        {type: "text", content: `Phone: ${nick.phone}`},
        {type: "link", content: `LinkedIn`, href: nick.linkedin},
        {type: "link", content: `GitHub`, href: nick.github}
      ];

    detailItems.forEach(detail => {
        let item = document.createElement("li");
        item.className = 'item'
        if (detail.type === "link") {
            let link = document.createElement("a");
            link.className = 'link'
            link.href = detail.href;
            link.textContent = detail.content;
            link.target = "_blank";
            item.appendChild(link)
        } else {
            item.textContent = detail.content;
        }
        details.appendChild(item);
    });
    document.body.appendChild(details);

    // create clock element
    let clockElement = document.createElement("p");
    clockElement.id = "clock";
    clockElement.className = 'clock';
    document.body.appendChild(clockElement);

    function updateTime() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        let timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        clockElement.textContent = `Current Time: ${timeString}`
    }
    updateTime();
    setInterval(updateTime, 1000);
}