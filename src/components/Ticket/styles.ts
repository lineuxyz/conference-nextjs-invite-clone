import styled from 'styled-components';

export const Container = styled.div`
  width: 650px;
  height: 320px;
  margin: 100px auto;
  position: relative;
  transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;
  background: linear-gradient(
    to right,
    var(--salmon),
    var(--red),
    var(--yellow),
    var(--blue)
  );
  border-radius: 20px;
  padding: 5px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 130px;
    left: -30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--salmon);
    z-index: 2;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 130px;
    right: -30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--blue);
    z-index: 2;
  }
`;

export const Left = styled.div`
  position: absolute;
  top: 110px;
  left: -50px;
  width: 50px;
  height: 100px;
  background: var(--background);
  z-index: 4;
`;

export const Right = styled.div`
  position: absolute;
  top: 110px;
  right: -50px;
  width: 50px;
  height: 100px;
  background: var(--background);
  z-index: 4;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: var(--background);
  border-radius: 15px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 130px;
    left: -30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--background);
    z-index: 3;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 130px;
    right: -30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--background);
    z-index: 3;
  }
`;

export const ProfileContainer = styled.div`
  padding: calc(39px * var(--size)) calc(155px * var(--size))
  calc(39px * var(--size)) calc(58px * var(--size));
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfileImg = styled.img`
  width: calc(82px * var(--size));
  height: calc(82px * var(--size));
  border-radius: 50%;
`;

export const ProfileText = styled.div`
  margin: 0;
`;

export const ProfileName = styled.p`
  font-size: calc(32px * var(--size));
  margin: 10px 0 5px 20px;
  font-weight: 700;
`;

export const ProfileUsername = styled.p`
  margin: 0 0 5px 20px;
  color: #8a8f98;
  display: flex;
`;

export const GithubIcon = styled.span`
  img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
`;

export const TicketEvent = styled.div`
  margin-top: 25px;
  margin-left: -10px;
`;

export const NumberWrapper = styled.div`
  position: absolute;
  right: 35px;
  bottom: 0;
`;

export const TicketNumber = styled.div`
  transform: rotate(90deg) translateY(calc(100px * var(--size)));
  transform-origin: bottom right;
  font-size: calc(40px * var(--size));
  font-weight: 700;
  text-align: center;
  padding-bottom: 35px;
  width: calc(320px - 10px);
  border-bottom: 2px dashed #333;
`;