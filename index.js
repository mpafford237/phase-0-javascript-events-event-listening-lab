function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', clickAlert);
  }
  
  function clickAlert() {
    console.log('Button clicked!');
  }
  
  addingEventListener();