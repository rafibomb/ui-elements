const factSection = document.getElementById('fact');

if (factSection) {
  let fact = document.getElementById('factText');
  let numberInput = document.getElementById('numberInput');

  numberInput.addEventListener('input', getFactFetch);

  // Ajax
  // ---------------
  function getFactAjax() {
    let num = numberInput.value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/' + num + '/year');

    xhr.onload = function () {
      if (this.status == 200 && num != '') {
        factSection.style.display = 'block';
        fact.textContent = this.responseText;
      }
    };

    xhr.send();
  }

  // Fetch
  // ---------------
  function getFactFetch() {
    let num = numberInput.value;

    fetch('http://numbersapi.com/' + num + '/year')
      .then((response) => response.text())
      .then((data) => {
        if (num != '') {
          factSection.style.display = 'block';
          fact.textContent = data;
        }
      })
      .catch((err) => console.log(err));
  }

  // Async Await
  // ---------------
  // 1. call fetch(arg) arg is url
  // 2. response - stream of data (text, json, blob)
  // 3. complete data stream - get data from body of response
  // 4. handle errors
  // 5. async, await

  catchAvatar().catch((error) => {
    console.log('error fetching', error);
  });

  async function catchAvatar() {
    const response = await fetch(
      'https://ui-avatars.com/api/?background=0D8ABC&color=fff'
    );
    const blob = await response.blob();
    document.getElementById('avatar').src = URL.createObjectURL(blob);
  }
}
