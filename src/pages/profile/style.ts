import { ContainerGeneral, Header, Logo, Colors } from "../../components/styles";
import styled, { createGlobalStyle, keyframes } from "styled-components";

export const ContainerProfile = styled(ContainerGeneral)`
     background: conic-gradient(from 180deg at 50% 95%, black 0deg, #384D59 360deg);
     flex-direction: column;
     
`

export const HeaderProfile = styled(Header)`
    height: 120px;
    display: flex;
    align-items: center;
    justify-content:space-evenly;

    >div{
        display: flex;
        width:120px;
        justify-content: space-between;
        

    }

    

    >div>a{
            color: ${Colors.primary};
            transition: all .3s ease;
             

              :hover{
        filter: drop-shadow(0px 0px 4px #05F2F2);
    }
       }

     

    >div>button{
         
        background-color: transparent;
        cursor: pointer;
        color: ${Colors.primary};
        transition: all .3s ease;
        

        :hover{
        filter: drop-shadow(0px 0px 4px #05F2F2);
    }
    }

`

export const ProfileLogo = styled(Logo)`
    width: 120px;
    height: auto;
     margin:0;



`

export const ProfileContent = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;

    span{
        height: 200px;
        border: 1px dashed ${Colors.primary};
        max-width: 200px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center
    }

    span>button{
        color: ${Colors.primary};
        width: auto;
        height: auto;
        background-color: transparent;
        cursor: pointer;
    }
`

export const ContainerProfileCard = styled.div`
    width: 160px;
    height: 200px;
    border-radius:8px;
    cursor: pointer;
    transition: all .3s ease;
    box-shadow: 0 0 8px rgba(0,0,0, .5);
    text-decoration:none;
    

    :hover{
        transform: scale(1.1);
    }

    a{
         text-decoration:none;
    }

    img{
        width: 160px;
        height: 200px;
        object-fit: cover;
        object-position: left;
        border-radius:8px;
    }

    p{
        text-align: center;
        color: ${Colors.primary};
        font-size: 24px;
        transition: all .3s ease;
        

        :hover{
            text-shadow: 0 0 8px ${Colors.primary};
            
        }
    }
`