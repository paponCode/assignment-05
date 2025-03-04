
for(let i = 1; i<= 6;i++)
    document.getElementById(`btn-${i}`).addEventListener('click',function(event){
      event.preventDefault();
      console.log(i)
      alert("Board updated successfully");
      const newTask = getInnerTextById("task-1");
      const newSum = newTask + 1;
      const task = getInnerTextById("task-2");
      const sum = task - 1;
      document.getElementById("task-1").innerText = newSum;
      document.getElementById("task-2").innerText = sum;
      const description = document.getElementById("description");
      const desc1 = document.createElement('p');
      desc1.innerText ='you have complete the task at';
      desc1.style.border = "2px solid"
      desc1.style.borderRadius = "10px"
      desc1.style.textAlign = "center"
      desc1.style.backgroundColor = "#F4F7FF"
      desc1.style.margin = "10px"
      desc1.style.padding = "10px"
      description.append(desc1);
      console.log(desc1)  
    })
    function getInnerTextById(id){
      const value = document.getElementById(id).innerText;
      const convertedValue = parseFloat(value);
      return convertedValue;
    }
    
    // DiscoverBtn
    document.getElementById('discoverBtn').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = "/blog.html";
      });
    // CARD DATE
    // Today Day
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const d = new Date();
    let todayDay = days[d.getDay()];
    
    //Today Date
    function todayDate() {
        let date = new Date();
        let formatDate = { month: "short", day: "numeric", year: "numeric" };
        return date.toLocaleDateString("en-US", formatDate).replace(',', '');
    };
    
    document.getElementById('dateContainer').innerHTML = `
        <p class="text-xl">${todayDay},</p>
        <h3 class="font-bold text-xl">${todayDate()}</h3>
        `;
    
    // THEME CHANGE
    let docBody = document.getElementById('docBody');
    function getRandomHexColor() {
        return 'bg-[#' + Math.floor(Math.random() * 177721).toString(10).padStart(6, '0') + ']';
    };
    
    document.getElementById('theme-color').addEventListener('click', function () {
      docBody.classList.add(getRandomHexColor());
      docBody.classList.add("font-[Poppins]");
    });
    
    
    
    