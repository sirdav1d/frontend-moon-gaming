import styled, {keyframes} from "styled-components";
import { ContainerGeneral, Logo } from "../../components/styles";

export const ContainerThanks = styled(ContainerGeneral)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: conic-gradient(from 180deg at 50% 95%, black 0deg, #384D59 360deg);
    background-size: 210%;
    animation: backAnimation 8s ease-in-out infinite alternate;
    color: #f2f2f2;
    text-shadow: 0 2px 8px #262626;
    text-align :center;
    overflow: hidden;

    @keyframes backAnimation{
        from{
            background-position: left;
        }
        to{
            background-position: right;
        }
    }

    h2{
        margin: 24px 0 0;
        letter-spacing: 1px;
    }

    h3{
        margin:4px 0 24px;
        letter-spacing: .5px;
        font-weight: normal;
        font-size: 14px;
    }

`

export const LogoThanks = styled(Logo)`
    width: 260px;
    margin:0;
    padding: 0;

    filter: drop-shadow(0 0 6px white);
    z-index: 9999999;

`