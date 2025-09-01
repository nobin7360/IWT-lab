 function buttonClick1() {
      alert('Hello');
    }

    function paraClick() {
      let text = document.getElementById('paraId');
      text.innerHTML = 'This is the second text of the paragraph.';
    }

    let toggle = true;
    function toggleImage() {
      let image = document.getElementById('imageId');
      if (toggle) {
        image.src = "image/image6.jpg";
      } else {
        image.src = "image/image7.jpg";
      }
      toggle = !toggle; // switch state
    }