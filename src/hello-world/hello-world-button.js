import './hello-world-button.css';

class HelloWorldButton {
  counter=0;

  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Click me';
    button.classList.add('btn');
    button.onclick = () => {
      const p = document.createElement('p');
      p.innerHTML = `Hello World ${++this.counter}`;
      p.classList.add('new-para');
      body.appendChild(p);
    }

    const body = document.querySelector('body');
    body.append(button);
  }
}

export default HelloWorldButton;