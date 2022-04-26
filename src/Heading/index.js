
class Heading {
  constructor(headingText) {
    this.headingText = headingText;
  }

  render() {
    const h1 = document.createElement('h1');
    h1.innerText = this.headingText;
    document.querySelector('body').append(h1);
  }
}

export default Heading;