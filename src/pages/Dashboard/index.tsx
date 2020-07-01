import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/58523339?s=460&u=5bba39ceab3329cfff6c86b2d3dfdcd5f944c4c0&v=4"
            alt="Alquipo Neto"
          />

          <div>
            <strong>Alquipo/d</strong>
            <p>dsjkfbshadlkfgjasdhlgkhsdjglksdhjfhdsalj</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/58523339?s=460&u=5bba39ceab3329cfff6c86b2d3dfdcd5f944c4c0&v=4"
            alt="Alquipo Neto"
          />

          <div>
            <strong>Alquipo/d</strong>
            <p>dsjkfbshadlkfgjasdhlgkhsdjglksdhjfhdsalj</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/58523339?s=460&u=5bba39ceab3329cfff6c86b2d3dfdcd5f944c4c0&v=4"
            alt="Alquipo Neto"
          />

          <div>
            <strong>Alquipo/d</strong>
            <p>dsjkfbshadlkfgjasdhlgkhsdjglksdhjfhdsalj</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
