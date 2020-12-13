import React, { useRef } from 'react';

import { 
  Container, 
  Left, 
  Right, 
  Wrapper, 
  ProfileContainer, 
  Profile, 
  ProfileImg,
  ProfileText,
  ProfileName,
  ProfileUsername,
  GithubIcon,
  TicketEvent,
  NumberWrapper,
  TicketNumber 
} from './styles';

import { github, eventos } from '../../App/assets'

const Ticket: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  const mouseHandler = (event: { clientY: number; clientX: number; }): void => {
    if (!boxRef.current) return;

    const { x, y, width, height } = boxRef.current.getBoundingClientRect();
    const centerPoint = { x: x + width / 2, y: y + height / 2 };

    const degreeX = (event.clientY - centerPoint.y) * 0.008;
    const degreeY = (event.clientX - centerPoint.x) * -0.008;

    if (!boxRef.current) return;

    boxRef.current.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
  }

  return (
    <Container onMouseMove={mouseHandler} id="perspective" ref={boxRef}>
      <Left />
      <Right />
      <Wrapper>
        <ProfileContainer>
          <Profile>
            <ProfileImg
              src="https://avatars1.githubusercontent.com/u/54123248?s=460&u=1811954afc7282c97e753199ebc07000fb902e32&v=4"
              alt="lineuxyz"
            />
            <ProfileText>
              <ProfileName>Lineu Pastorelli</ProfileName>
              <ProfileUsername>
                <GithubIcon>
                  <img src={github} alt="" />
                </GithubIcon>
              lineuxyz
            </ProfileUsername>
            </ProfileText>
          </Profile>
          <TicketEvent>
            <img src={eventos} alt="" />
          </TicketEvent>
        </ProfileContainer>
        <NumberWrapper>
          <TicketNumber>№ 00000000</TicketNumber>
        </NumberWrapper>
      </Wrapper>
    </Container>
  )
}

export default Ticket;