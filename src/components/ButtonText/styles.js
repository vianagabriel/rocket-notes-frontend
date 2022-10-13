import styled from 'styled-components';

export const Container = styled.button`
 background-color: transparent;
 //feito uma condicional recuperando a prop passada no index.jxs...
 color:  ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100 };
 border: none;
 font-size: 16px;
`;