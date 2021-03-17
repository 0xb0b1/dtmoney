import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        overflow: hidden;

        th {
            font-weight: 500;
            font-size: 1.2rem;
            color: var(--text-body);
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            background-color: var(--shape);
            padding: 1rem 2rem;
            border: 0;
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }
    }
`;
