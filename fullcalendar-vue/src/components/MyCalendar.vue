<template>
  <FullCalendar class="full_calendar"
    :options="calendarOptions"
  />
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import jaLocale from '@fullcalendar/core/locales/ja'

const calendarOptions = {
  plugins: [dayGridPlugin],
  locale: jaLocale,
  initialView: 'dayGridMonth',
  events: [
    { title: 'Meeting', start: '2025-05-10', end: '2025-05-12' },
    { title: 'Deadline', start: '2025-05-10', end: '2025-05-21', color:  '#378006' },
    { title: 'Deadline', start: '2025-05-10', end: '2025-05-11', color:  '#378006' },
    { title: 'Deadline', start: '2025-05-10', end: '2025-05-11', color:  '#378006' },
  ],
}
</script>

<style>
.full_calendar{
  width: 800px;
}
.full_calendar .fc-dayGridMonth-view{
  border: 1px solid #d6d6d6;
  border-radius: 16px;
}
.full_calendar .fc-scrollgrid{
  border: none;
}
.full_calendar th{
  border-right: none;
}
.full_calendar td{
  border-bottom: none;
  border-right: none;
}
.full_calendar .fc-toolbar-chunk .fc-today-button{
  background-color: #832222;
  border-color: #832222;
}
.full_calendar .fc-toolbar-chunk .fc-button{
  background-color: #832222;
  border-color: #832222;
}
.full_calendar .fc-toolbar-title{
  font-weight: 100;
  font-size: 24px;
}

@media (max-width: 767px) {
  .full_calendar{
  width: 98%;
  height: 500px;
}

.fc{
  font-size: 16px;
}

}
</style>
