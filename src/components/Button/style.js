import styled from 'styled-components';

export const StyledButton = styled.button`
    width: ${props => props.full ? '100%' : null};
    min-width: 64px;
    border: 0;
    border-radius: 4px;
    padding: 8px 16ex;
    outline: none;
    background: #f9c802;
    color: #fff;
    font-weight: 600;
    line-height: 1.5;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        background: #cc7722;
    }
`