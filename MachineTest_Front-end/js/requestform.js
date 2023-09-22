//document addEventListener
document.addEventListener('DOMContentLoaded', function () {
    //Content
    const form = document.getElementById('frmTravelRequest');
    const empIdInput = document.getElementById('txtEmpId');
    const nameInput = document.getElementById('txtEmpName')
    const projectInput = document.getElementById('txtProject')
    const travelCauseInput = document.getElementById('txtTravelCause')
    const sourceInput = document.getElementById('txtSource')
    const destinationInput = document.getElementById('txtDestination')
    const fromDate = document.getElementById('dteFromDate')
    const noOfDays = document.getElementById('noOfDays')
    const travelModeInput = document.getElementById('txtTravelMode')
    const logout = document.getElementById('btnLogout')

    //Error message
    const empIdError = document.getElementById('empIdError');
    const nameError = document.getElementById('nameError');
    const projectError = document.getElementById('projectError');
    const causeError = document.getElementById('causeError');
    const sourceError = document.getElementById('sourceError');
    const destinationError = document.getElementById('destinationError');
    const fromDateError = document.getElementById('fromDateError');
    const noOfDaysError = document.getElementById('noOfDaysError');
    const modeError = document.getElementById('modeError');


    //form addEventListener
    form.addEventListener('submit', function (event) {
        //prevent form submission
        event.preventDefault();

        //validation - empId
        if (!empIdInput.value.trim()) {
            empIdError.textContent = "Enter the id";
        }
        else {
            empIdError.textContent = '';
        }


        //validation - name
        if (!nameInput.value.trim()) {
            nameError.textContent = "Enter the id";
        }
        else {
            nameError.textContent = '';
        }

        //validation - project
        if (!projectInput.value.trim()) {
            projectError.textContent = "Enter your project";
        }
        else {
            nameError.textContent = '';
        }

        //validation - travel cause
        if (!travelCauseInput.value.trim()) {
            causeError.textContent = "Enter cause for travel";
        }
        else {
            causeError.textContent = '';
        }


        //validation - source
        if (!sourceInput.value.trim()) {
            sourceError.textContent = "Enter a source";
        }
        else {
            sourceError.textContent = '';
        }

        //validation - destination
        if (!destinationInput.value.trim()) {
            destinationError.textContent = "Enter a destination";
        }
        else {
            destinationError.textContent = '';
        }

        //validation - from date
        if (!fromDate.value) {
            fromDateError.textContent = "select from date";
        }
        else {
            fromDate.textContent = '';
        }

        //validation - no of Days
        if (!noOfDays.value) {
            noOfDaysError.textContent = "choose no of days";
        }
        else {
            noOfDaysError.textContent = '';
        }


        //validation - travel mode
        if (!travelModeInput.value) {
            modeError.textContent = "Enter mode of travel";
        }
        else {
            modeError.textContent = '';
        }
    })


    //to logout
    logout.addEventListener('click', () => {
        window.location.href = "login.html";
    })
//to generate the options from 1 - 30 in no of days drop down
    for (var i = 1; i <= 30; i++) {
        let option = document.createElement("option");
        option.setAttribute('value', i);

        let optionText = document.createTextNode(i);
        option.appendChild(optionText);

        noOfDays.appendChild(option);
    }


    //to disable old dates(user can select only date from tomorrow)
    const today = new Date();
    fromDate.min=formattedDates(today)

    //formatted Date
    function formattedDates(date) {
        //yyyy-mm-dd
        const year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let day = (date.getDate()+1).toString().padStart(2, "0");
        return `${year}-${month}-${day}`
    }

})
