document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
  
    var classCalendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      headerToolbar: {
        start: 'prev', // Display back button on the left
        center: 'title', // Display the month title in the center
        end: 'next' // Display next button on the right
      },
      slotMinTime: '09:00:00',
      slotMaxTime: '19:00:00',
      allDaySlot: false, // Hide the "all day" slot
      columnHeaderFormat: { weekday: 'short', month: 'numeric', day: 'numeric' },
      events: [
        {
          title: 'Math Class',
          start: '2023-08-16T10:00:00',
          end: '2023-08-16T11:00:00',
          className: 'class-item',
          extendedProps: {
            classTitle: 'Math Class',
            classRoom: '7/E',
            classTime: '11:00 - 12:30',
          },
        },
        // Add more events here...
      ],
      eventContent: function (arg) {
        var eventElement = document.createElement('div');
  
        var classTitle = document.createElement('div');
        classTitle.textContent = arg.event.extendedProps.classTitle;
        classTitle.classList.add('class-title');
        eventElement.appendChild(classTitle);
  
        var classRoom = document.createElement('div');
        classRoom.textContent = arg.event.extendedProps.classRoom;
        eventElement.appendChild(classRoom);
  
        var classInfo = document.createElement('div');
        classInfo.classList.add('class-info');
  
        var clockIcon = document.createElement('i');
        clockIcon.classList.add('bi', 'bi-clock');
        classInfo.appendChild(clockIcon);
  
        var classTime = document.createElement('div');
        classTime.textContent = arg.event.extendedProps.classTime;
        classTime.classList.add('class-time');
        classInfo.appendChild(classTime);
  
        eventElement.appendChild(classInfo);
  
        return {
          domNodes: [eventElement],
          textEscape: false, // Allow HTML in event content
        };
      },
    });
  
    classCalendar.render();
  });

  document.addEventListener('DOMContentLoaded', function () {
    var monthlyCalendarEl = document.getElementById('monthly-calendar');
    var monthlyCalendar = new FullCalendar.Calendar(monthlyCalendarEl, {
      headerToolbar: {
        start: 'prev', // Display back button on the left
        center: 'title', // Display the month title in the center
        end: 'next' // Display next button on the right
      },
      
      // Add your FullCalendar options for the monthly calendar here
    });
    monthlyCalendar.render();
  });

  document.addEventListener('DOMContentLoaded', function () {
    var listItems = document.querySelectorAll('li'); // Get all list items
  
    listItems.forEach(function (item) {
      item.addEventListener('click', function () {
        // Remove "active" class from all list items
        listItems.forEach(function (listItem) {
          listItem.classList.remove('active');
        });
  
        // Add "active" class to the clicked list item
        this.classList.add('active');
      });
    });
  });