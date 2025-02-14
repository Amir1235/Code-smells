/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

  function getSumLength(jumpings: number[]): number {
  
    return jumpings.reduce(
      (sum, currentJump) => sum + currentJump,0);
  }
  
  /*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */
    class Student {
      constructor(
        public name: string,
        public handedInOnTime: boolean,
        public passed: boolean
      ) {}
    }
    
  
    function getStudentStatus(student: Student): string {
    
      if (student.name == 'Sebastian' && student.handedInOnTime && student.passed) {
        return 'VG';
      }
      return 'IG';
  
  
  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
  
    class Temperature {
      constructor(
        public city: string, 
        public date: Date,   
        public temperature: number 
      ) {}
    }
    
    
    function averageWeeklyTemperature(readings: Temperature[]) {
      const oneWeekInMilliseconds = 604800000; 
      let totalTemperature = 0; 
      let readingCount = 0;     
    
      for (let i = 0; i < readings.length; i++) { 
        const reading = readings[i]; 
    

        if (reading.city === "Stockholm" && reading.date.getTime() > Date.now() - oneWeekInMilliseconds) {
          totalTemperature += reading.temperature;
          readingCount++;
        }
      }
    
  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
  
    function showProduct(
      name: string,
      price: number,
      amount: number,
      description: string,
      image: string,
      parent: HTMLElement) {

      const container = document.createElement("div");
      const title = document.createElement("h4");
      title.textContent = name; 
    
      const imageTag = document.createElement("img");
      imageTag.src = image;
      imageTag.alt = name; 
      const priceElement = document.createElement("strong");
      priceElement.textContent = `Pris: ${price} kr`;
    
      container.appendChild(title);
      container.appendChild(imageTag);
      container.appendChild(priceElement);
      parent.appendChild(container);
    }
  
  /*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
    function presentStudents(students: Student[]) {
      const passedStudents = document.getElementById('passedstudents');
      const failedStudents = document.getElementById('failedstudents');
    
        students.forEach(student => {
        const container = document.createElement('div');
    
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = student.handedInOnTime;
    
        const nameElement = document.createElement('span');
        nameElement.textContent = student.name;
    
        container.appendChild(checkbox);
        container.appendChild(nameElement);
    
        if (student.handedInOnTime) {
          passedStudents?.appendChild(container);
        } else {
          failedStudents?.appendChild(container);
        }
      });
    }
  /*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
    function concatenateStrings() {
      const result = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'].join(' ');
      return result;
  
  /* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */
      interface UserData {
        name: string;
        birthday: Date;
        email: string;
        password: string;
        
      }
      
      function validateUser(user: UserData) {
        const ageDiff = Date.now() - user.birthday.getTime();
        const ageDate = new Date(ageDiff);
        const userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      
        if (userAge < 20) {
          return "Du är under 20 år";
        }
      }