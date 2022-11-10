import styled from "styled-components";

const Footer = () => {
  return (
    <section className="section-center">
      <Wrapper>
        <h5>
          &copy;
          {new Date().getFullYear()};<span>Brillzare </span>
        </h5>
        <p>All rights reserved.</p>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.footer`
  display: flex;
`;

export default Footer;
