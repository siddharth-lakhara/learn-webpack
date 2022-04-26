import Heading from './Heading';
import HelloWorldButton from './hello-world/hello-world-button';

const heading = new Heading('Learning Webpack');
heading.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();