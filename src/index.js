import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainContent from './components/main-content';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="content">
    <header>
      <img className="avatar" src="https://avatars.githubusercontent.com/u/48169787?v=4" alt="avatar"/>
      <div>
        <h3 className="name space-mono-regular">
          Suyoga Gitayana
          <a target="_blank" rel="noreferrer" href="https://github.com/suyogagitayana">
            <svg width='20' height='19' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' clipRule='evenodd' d='M12.0017 0C5.37524 0 0.00183105 5.50827 0.00183105 12.3038C0.00183105 17.7402 3.44017 22.3519 8.2081 23.9791C8.80761 24.0932 9.02779 23.7122 9.02779 23.3872C9.02779 23.0938 9.01666 22.1246 9.01149 21.0965C5.67311 21.8407 4.96867 19.6448 4.96867 19.6448C4.42281 18.2226 3.6363 17.8445 3.6363 17.8445C2.54735 17.0808 3.71837 17.0967 3.71837 17.0967C4.92317 17.1833 5.55786 18.3646 5.55786 18.3646C6.62813 20.2452 8.36508 19.7016 9.04985 19.3874C9.15755 18.5922 9.46853 18.0492 9.81171 17.742C7.14637 17.4313 4.34431 16.3761 4.34431 11.6616C4.34431 10.3183 4.81328 9.22072 5.58091 8.35888C5.45611 8.04919 5.04537 6.79778 5.69696 5.10302C5.69696 5.10302 6.70443 4.77234 8.99758 6.36421C9.95498 6.09139 10.9817 5.95427 12.0017 5.94958C13.0211 5.95427 14.0485 6.09098 15.0077 6.3638C17.298 4.77193 18.3043 5.10261 18.3043 5.10261C18.9575 6.79717 18.5468 8.04878 18.4222 8.35847C19.1916 9.22032 19.6572 10.3179 19.6572 11.6612C19.6572 16.3869 16.8499 17.4272 14.1778 17.732C14.6085 18.1138 14.992 18.8628 14.992 20.0105C14.992 21.6568 14.9781 22.9817 14.9781 23.387C14.9781 23.7144 15.1943 24.098 15.8023 23.9772C20.5675 22.3485 24.0018 17.7381 24.0018 12.3038C24.0016 5.50868 18.6288 0 12.0017 0Z' fill='white'/>
                <path d='M4.5468 17.6653C4.52038 17.7264 4.42658 17.7448 4.34114 17.703C4.2537 17.6631 4.20502 17.5797 4.23323 17.5184C4.25907 17.4552 4.35306 17.4379 4.4399 17.4801C4.52733 17.5202 4.57701 17.6044 4.54661 17.6655L4.5468 17.6653ZM5.03286 18.2213C4.97583 18.2757 4.86395 18.2505 4.78804 18.1643C4.70935 18.0787 4.69465 17.964 4.75287 17.9088C4.81209 17.8546 4.92058 17.8803 4.99927 17.9658C5.07757 18.0526 5.09307 18.1663 5.03306 18.2215L5.03286 18.2213ZM5.50619 18.9298C5.43267 18.9823 5.31225 18.9332 5.23793 18.8238C5.16441 18.7142 5.16441 18.5828 5.23992 18.5304C5.31404 18.4778 5.43267 18.5253 5.50818 18.6337C5.58131 18.7448 5.58131 18.8764 5.50619 18.9298ZM6.1542 19.6145C6.08862 19.6889 5.94833 19.6689 5.84579 19.5677C5.74107 19.4685 5.71186 19.3273 5.77763 19.2531C5.8444 19.1785 5.98529 19.1993 6.08842 19.3C6.19314 19.399 6.22474 19.5404 6.15459 19.6143L6.1542 19.6145ZM7.04841 20.0121C7.0192 20.1084 6.88447 20.1522 6.74835 20.1111C6.61263 20.0689 6.5238 19.9562 6.55162 19.8588C6.57944 19.7616 6.71516 19.7162 6.85208 19.76C6.9878 19.802 7.07662 19.9141 7.04841 20.0121ZM8.03065 20.0856C8.03402 20.1871 7.91877 20.271 7.77629 20.2731C7.63262 20.2765 7.51638 20.1942 7.51499 20.0944C7.51499 19.9919 7.62785 19.909 7.77133 19.9061C7.9138 19.9035 8.03084 19.985 8.03084 20.0854L8.03065 20.0856ZM8.94433 19.9263C8.96142 20.0251 8.86226 20.1268 8.72058 20.1539C8.58148 20.1803 8.45232 20.1188 8.43443 20.0208C8.41734 19.9193 8.51829 19.8177 8.65739 19.7914C8.79927 19.7663 8.92645 19.8258 8.94433 19.9263Z' fill='white'/>
            </svg>
          </a>
        </h3>
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
              <li className="space-mono-regular small"><a target="_blank" rel="noreferrer" href="https://sintask.com">SinTask.com</a>: Social Media, SaaS Website.</li>
              <li className="space-mono-regular small"><a target="_blank" rel="noreferrer" href="https://themeforest.net/item/jnews-one-stop-solution-for-web-publishing/20566392">JNews</a>: Blog/Magazine, WordPress Theme</li>
              <li className="space-mono-regular small"><a target="_blank" rel="noreferrer" href="https://wordpress.org/plugins/gutenverse/">Gutenverse</a>: Site Editor/Builder Ecosystem, WordPress Plugin.</li>
              <li className="space-mono-regular small"><a target="_blank" rel="noreferrer" href="https://suyogagitayana.github.io/steam-sale/">Steam Sales</a>: Sales/Discount Checker, Data Website.</li>
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
