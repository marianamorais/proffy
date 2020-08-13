import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/30897764?s=460&u=3d40704edc2962280bda720e0989b5d65126c0c3&v=4" alt="Mariana Morais"/>
        <div>
          <strong>Mariana Morais</strong>
          <span>English</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vel similique delectus temporibus veniam dicta deserunt mollitia, voluptas eos officiis cupiditate blanditiis eaque, quisquam cumque provident fugit totam ratione! Dolores!
      </p>

      <footer>
        <p>
          Price/Time
          <strong>$30,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Contact
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;