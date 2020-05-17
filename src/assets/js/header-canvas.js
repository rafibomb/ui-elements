(function () {
  const canvas = document.getElementById('canvasHeader');

  if (canvas) {
    let c = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = {
      x: undefined,
      y: undefined,
    };

    maxRadius = 40;

    let colorArray = ['#f8b195', '#f67280', '#c06c84', '#6c5b7c', '#355c7d'];

    window.addEventListener('mousemove', function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
      console.log(mouse);
    });

    window.addEventListener('resize', function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRadius = radius;
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

      this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'salmon';
        c.fillStyle = this.color;
        c.fill();
      };

      this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        // interaction
        if (
          mouse.x - this.x < 50 &&
          mouse.x - this.x > -50 &&
          mouse.y - this.y < 50 &&
          mouse.y - this.y > -50
        ) {
          if (this.radius < maxRadius) {
            this.radius += 1;
          }
        } else if (this.radius > this.minRadius) {
          this.radius -= 1;
        }

        this.draw();
      };
    }

    let circleArray = [];
    let circleCount = 800;

    function init() {
      circleArray = [];
      for (let i = 0; i < circleCount; i++) {
        let radius = Math.random() * 3 + 1;
        let x = Math.random() * (window.innerWidth - radius * 2) + radius;
        let y = Math.random() * (window.innerHeight - radius * 2) + radius;
        let dx = Math.random() - 0.5;
        let dy = Math.random() - 0.5;
        circleArray.push(new Circle(x, y, dx, dy, radius));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }

    init();
    animate();
  }
})();
