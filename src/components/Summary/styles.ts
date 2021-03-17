import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 2rem;
    margin-top: -10rem;

    div {
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        margin-bottom: 2rem;

        background: var(--shape);
        color: var(--text-title);

        border: 1px solid rgba(255, 255, 255, 0.18);

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

        &.highlight-background {
            background: var(--green);
            color: #fff;
        }

        header {
            font-size: 0.8rem;

            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
    }
`;
