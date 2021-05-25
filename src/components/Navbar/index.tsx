import React from 'react'
import Image from 'next/image'
import { FaCaretDown } from 'react-icons/fa'

import { Container } from './styles'

const Navbar: React.FC = () => {
  return (
    <Container>
      <div className="container">
              <input type="checkbox" name="" id="check" />

              <div className="logo-container">
                  <a href="/">
                    <Image
                      alt={'Sol Logo'}
                      className="logo"
                      src="/images/logos/secondary.svg"
                      width={109.5}
                      height={48}
                      priority
                    />
                  </a>
              </div>

              <div className="nav-btn">
                  <div className="nav-links">
                      <ul>
                          <li className="nav-link">
                              <a href="/">Inicio</a>
                          </li>
                          <li className="nav-link" >
                              <a>Sobre<FaCaretDown /></a>
                              <div className="dropdown">
                                  <ul>
                                      <li className="dropdown-link">
                                          <a>A PHD</a>
                                      </li>
                                      <li className="dropdown-link">
                                          <a>Parceiros <FaCaretDown /></a>
                                          <div className="dropdown second">
                                              <ul>
                                                  <li className="dropdown-link">
                                                      <a href="/sobre/revest_epox">Revest Epox</a>
                                                  </li>
                                                  <li className="dropdown-link">
                                                      <a href="/sobre/atlantica_solar">Atlântica Solar</a>
                                                  </li>
                                                  <li className="dropdown-link">
                                                      <a href="/sobre/mb_esquadrias">MB Esquadrias</a>
                                                  </li>
                                                  <div className="arrow"></div>
                                              </ul>
                                          </div>
                                      </li>
                                      <div className="arrow"></div>
                                  </ul>
                              </div>
                          </li>
                          <li className="nav-link">
                              <a>Serviços<FaCaretDown /></a>
                              <div className="dropdown">
                                  <ul>
                                      <li className="dropdown-link">
                                          <a href="/servicos">Como Atuamos</a>
                                      </li>
                                      <li className="dropdown-link">
                                          <a href="/servicos/solicite">Solicite uma Visita</a>
                                      </li>
                                      <li className="dropdown-link">
                                          <a>Produtos<FaCaretDown /></a>
                                          <div className="dropdown second">
                                              <ul>
                                                  <li className="dropdown-link">
                                                      <a href="/produtos/energia_solar">Usinas de energia solar</a>
                                                  </li>
                                                  <li className="dropdown-link">
                                                      <a href="/produtos/vidros_e_esquadrias">Vidros e esquadrias</a>
                                                  </li>
                                                  <li className="dropdown-link">
                                                      <a href="/produtos/pisos_e_revestimentos">Pisos e Revestimentos</a>
                                                  </li>
                                                  <li className="dropdown-link">
                                                      <a href="/produtos/terraplanagem_e_infraestrutura">Terraplangem e Galerias Pluviais e esgotos.</a>
                                                  </li>
                                                  {/* <li className="dropdown-link">
                                                      <a href="#">Mais <FaCaretDown /></a>
                                                      <div className="dropdown second">
                                                          <ul>
                                                              <li className="dropdown-link">
                                                                  <a href="#">Link 1</a>
                                                              </li>
                                                              <li className="dropdown-link">
                                                                  <a href="#">Link 2</a>
                                                              </li>
                                                              <li className="dropdown-link">
                                                                  <a href="#">Link 3</a>
                                                              </li>
                                                              <div className="arrow"></div>
                                                          </ul>
                                                      </div>
                                                  </li> */}
                                                  <div className="arrow"></div>
                                              </ul>
                                          </div>
                                      </li>
                                      <div className="arrow"></div>
                                  </ul>
                              </div>
                          </li>
                          <li className="nav-link">
                              <a href="/contato">Contato</a>
                          </li>
                      </ul>
                  </div>

                  {/* <div className="log-sign">
                      <a href="#" className="btn transparent">Log in</a>
                      <a href="#" className="btn solid">Sign up</a>
                  </div> */}
              </div>

              <div className="hamburger-menu-container">
                  <div className="hamburger-menu">
                      <div></div>
                  </div>
              </div>
          </div>
    </Container>
  )
}

export default Navbar
