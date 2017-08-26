export default function setupProfile() {
  let $ = window.jQuery;
  $('select').material_select();

  $('.datepicker').pickadate({
    // First day of the week
    firstDay: 1, // Monday

    // Accessibility labels
    labelMonthNext: 'Next month',
    labelMonthPrev: 'Previous month',
    labelMonthSelect: 'Select a month',
    labelYearSelect: 'Select a year',

    // Date limits
    min: new Date(1990, 1, 1),
    max: true, // sets limit to today

    // Dropdown selectors
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 40, // Creates a dropdown of 15 years to control year

    // Close on a user action
    closeOnSelect: true,
    closeOnClear: true,

    // Formats
    format: 'yyyy/mm/dd',
    formatSubmit: 'yyyy/mm/dd',

    // Buttons
    today: '', // hide today button
    close: 'Ok' // name close button select because it acts like one for the user
  })
}