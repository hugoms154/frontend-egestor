import React, { useState } from 'react';
import { FiMenu, FiChevronRight, FiX } from 'react-icons/fi';

import { useRouteMatch } from 'react-router-dom';

import { Container, MenuOption } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [showNav, setShowNav] = useState(false);
  const { url } = useRouteMatch();

  return (
    <Container size={size} showNav={showNav}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <button onClick={() => setShowNav(!showNav)} type="button">
          {showNav ? <FiX size={32} /> : <FiMenu size={32} />}
        </button>
        <nav>
          <MenuOption to="/" url={url}>
            Listagem
            <FiChevronRight size={20} />
          </MenuOption>
          <MenuOption to="/search" url={url}>
            Buscar
            <FiChevronRight size={20} />
          </MenuOption>
          <MenuOption to="/insert" url={url}>
            Inserir
            <FiChevronRight size={20} />
          </MenuOption>
          <MenuOption to="/delete" url={url}>
            Deletar
            <FiChevronRight size={20} />
          </MenuOption>
          <MenuOption to="/import" url={url}>
            Importar
            <FiChevronRight size={20} />
          </MenuOption>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
