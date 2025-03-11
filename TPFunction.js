document.addEventListener('DOMContentLoaded', function () {
    const backButton = document.getElementById('backButton');
    const eventButtons = document.querySelectorAll('.eventButton');
    const modal = document.getElementById('eventModal');
    const closeModal = document.querySelector('.close');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalDescription = document.getElementById('modalDescription');
    const modalTime = document.getElementById('modalTime');
    const modalLocation = document.getElementById('modalLocation');
    const logo = document.getElementById('logo');
    const menuDropdown = document.getElementById('menuDropdown');
    const monthPicker = document.getElementById('monthPicker');
    const yearPicker = document.getElementById('yearPicker');
    const calendarTitle = document.getElementById('calendarTitle');
    const calendarDays = document.getElementById('calendarDays');
	const profileLink = document.querySelector('#menuDropdown a[href="TPS.html"]');
	const suddenAnnouncementLink = document.querySelector('#menuDropdown a[href="#"]');
	const logoutLink = document.querySelector('#menuDropdown a[href="#"]:last-child');

    // Go back to the main interface
    backButton.addEventListener('click', function () {
        window.location.href = 'FirstPage.html';
    });

    // Event data
    const events = {
        edsa: {
            title: 'EDSA REVOLUTION',
            date: 'FEBRUARY 25 2025, TUESDAY',
            description: '(NO CLASSES & NON WORKING HOLIDAY)',
            time: 'WHOLE DAY',
            location: 'PHILIPPINES'
        },
        graduation: {
            title: 'GRADUATION BALL',
            date: 'FEBRUARY 28 2025, FRIDAY',
            description: 'Celebration of the graduating class.',
            time: '5:00 PM TO 10:00 PM',
            location: 'PCU NEW ACAD BUILDING 7TH FLOOR'
        }
    };

    // Open modal with event details
    eventButtons.forEach(button => {
        button.addEventListener('click', function () {
            const eventKey = button.getAttribute('data-event');
            const event = events[eventKey];
            modalTitle.textContent = event.title;
            modalDate.textContent = event.date;
            modalDescription.textContent = event.description;
            modalTime.textContent = event.time;
            modalLocation.textContent = event.location;
            modal.style.display = 'flex';
        });
    });

    // Close modal
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Toggle dropdown menu when logo is clicked
    logo.addEventListener('click', function () {
        menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target !== logo && !menuDropdown.contains(event.target)) {
            menuDropdown.style.display = 'none';
        }
    });

    // Function to generate calendar days
    function generateCalendar(year, month) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();

        calendarDays.innerHTML = '';

        // Fill in the days
        for (let i = 0; i < startingDay; i++) {
            calendarDays.innerHTML += '<div></div>';
        }

        for (let i = 1; i <= daysInMonth; i++) {
            calendarDays.innerHTML += `<div>${i}</div>`;
        }
    }

    // Update calendar when month or year changes
    function updateCalendar() {
        const year = parseInt(yearPicker.value);
        const month = parseInt(monthPicker.value);
        const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
        calendarTitle.textContent = `${monthNames[month]} ${year}`;
        generateCalendar(year, month);
    }

    // Initialize calendar
    updateCalendar();

    // Add event listeners for month/year picker
    monthPicker.addEventListener('change', updateCalendar);
    yearPicker.addEventListener('change', updateCalendar);
});

if (profileLink) {
    profileLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        window.location.href = 'TPS.html'; // Redirect to Profile page
    });
}

// Redirect to Sudden Announcement page (if needed)
if (suddenAnnouncementLink) {
    suddenAnnouncementLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        alert('Sudden Announcement page is under construction.'); // Placeholder
    });
}

// Log Out functionality
if (logoutLink) {
    logoutLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        alert('Logged out successfully!');
        window.location.href = 'FirstPage.html'; // Redirect to login page
    });
}
