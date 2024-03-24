import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainContent from './components/main-content';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="content">
    <header>
      <img className="avatar" src="https://avatars.githubusercontent.com/u/48169787?v=4" alt="avatar"/>
      <div>
        <h3 className="name space-mono-regular">Suyoga Gitayana</h3>
        <p className="space-mono-regular small nomargin">/portfolio</p>
      </div>
    </header>
    <main>
      <MainContent
        title="About"
        initActive={true}
        content={() => {
          return <p className="space-mono-regular small">I am a <span className="red">Software Engineer</span> who values simplicity in design and well-structured code. I thrive when working on projects that not only capture my interest but are also enjoyable to create.</p>;
        }}
      />
      <MainContent
        title="Skills"
        initActive={true}
        content={() => {
          return <>
            <p className="space-mono-regular small">What languages & tools have I been use throughout my career?</p>
            <ul>
              <li className="space-mono-regular small">Backend: PHP, Node JS.</li>
              <li className="space-mono-regular small">Frontend: React JS, Vue JS, JQuery, HTML, CSS.</li>
              <li className="space-mono-regular small">CMS: WordPress.</li>
              <li className="space-mono-regular small">Tools/Helpers: NPM, Webpack, Gulp, Git, Source Tree, VS-Code.</li>
            </ul>
          </>;
        }}
      />
      <MainContent
        title="Experiences"
        initActive={true}
        content={() => {
          return <>
            <h5 className="space-mono-regular red small">2019-Now: Jegstudio</h5>
            <p className="space-mono-regular small">I'm currently a Software Engineer at Jegstudio, a local company focused on creating products that help users create their own websites.</p>
            <p className="space-mono-regular small">Positions at Jegstudio:</p>
            <ul>
              <li className="space-mono-regular small">2022-Now. Project Leader. Leading the team in further development of Gutenverse.</li>
              <li className="space-mono-regular small">2021-2022. React Programmer. Involved in creating a new product: Gutenverse.</li>
              <li className="space-mono-regular small">2019-2021. Web Programmer & Tech Support. Involved in the product: JNews.</li>
            </ul>
            <h5 className="space-mono-regular red small">2016-2019: SinTask.com</h5>
            <p className="space-mono-regular small">Worked as a volunteer for a startup company. Providing advice for frontend and help created general designs.</p>
          </>;
        }}
      />
      <MainContent
        title="Projects"
        content={() => {
          return <>
            <p className="space-mono-regular small">Projects I've created/involved with:</p>
            <ul>
              <li className="space-mono-regular small"><a href="https://sintask.com">SinTask.com</a>: Social Media, SaaS Website.</li>
              <li className="space-mono-regular small"><a href="https://themeforest.net/item/jnews-one-stop-solution-for-web-publishing/20566392">JNews</a>: Blog/Magazine, WordPress Theme</li>
              <li className="space-mono-regular small"><a href="https://wordpress.org/plugins/gutenverse/">Gutenverse</a>: Site Editor/Builder Ecosystem, WordPress Plugin.</li>
            </ul>
          </>;
        }}
      />
      <MainContent
        title="Contact"
        content={() => {
          return <p className="space-mono-regular small">suyoga.gitayana@yahoo.com</p>;
        }}
      />
    </main>
    <footer>
      <p className="space-mono-regular xsmall">🔧 React JS</p>
    </footer>
  </div>
);
