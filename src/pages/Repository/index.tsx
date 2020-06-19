import React from 'react';
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/images/logo.svg';

interface RepositoryParams {
  repository: string;
}


const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt='Github Explorer' />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars2.githubusercontent.com/u/5719966?s=400&u=42a896090a3d686a989302d621ea3542ae76afea&v=4" alt="Avatar"/>
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`/teste/`}>
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
