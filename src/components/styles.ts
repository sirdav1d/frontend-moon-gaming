import { HiOutlineSearch } from "react-icons/hi";
import styled, { createGlobalStyle, keyframes } from "styled-components";



export const GlobalStyle = createGlobalStyle`

/* GENERAL STYLES */

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Kanit', sans-serif;
        border: none;

    }
`


export const Colors = {
    primary: '#05F2E7',
    secondary: '#7787A6',
    dark1: '#384D59',
    dark2: '#082040',
    darkBlue: '#0F2859',
}


// LOGIN STYLES

export const ContainerGeneral = styled.div`
    display: flex;
    max-width: 100vw;
    min-height: 100vh;
`

export const ButtonPattern = styled.a`
    background: ${Colors.primary};
    padding: 4px;
    width: 130px;
    border-radius: 16px;
    font-size: 16px;
    font-weight: bold;
    text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    color: #FFFFFF;
    text-align: center;
    cursor: pointer;
    letter-spacing: 1px;
    transition: all .4s ease;
    
    :hover{
        background: ${Colors.primary};
        filter: drop-shadow(0px 0px 10px ${Colors.primary});
    }
`

export const ButtonRegister = styled.a`
    background-color:transparent;
    color: #f2f2f2;
    border: 1.5px solid ${Colors.primary};
    padding: 4px;
    width: 130px;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 550;
    text-align: center;
    cursor: pointer;
    letter-spacing: 1px;
    transition: all .4s ease;
    text-decoration:none;


    :hover{
        background: ${Colors.primary};
        filter: drop-shadow(0px 0px 10px ${Colors.primary});
        color: #FFFFFF;
        font-weight: bolder;
    }
`

export const Logo = styled.img`
    width: 140px;
    height: 140px;
    object-fit: contain;
    margin: 40px auto 20px;

    filter: drop-shadow(0px 0px 4px #f2f2f2);

`;




export const AsideContainer = styled.aside`
    height: 100vh;
    width: 40%;
    background: conic-gradient(from 180deg at 50% 95%, black 0deg, #384D59 360deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;


    @media screen and (max-width: 700px) {
        width: 100%;
    }
     
`
export const ImgSectionLogin = styled.img`
    height: 100vh;
    object-fit: cover;
    transform: translateX(-100px);
    max-width: 100vw;   

`;

export const SectionLogin = styled.section`
    width: 60%;
    max-height: 100vh;
    overflow: hidden;

    @media screen and (max-width: 700px) {
        display:none;
    }

`

export const ContainerLogin = styled.div`
    background: ${Colors.dark1};
    width: 240px;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-radius: 16px;
    margin: 0 auto 12px;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
`
export const FormLogin = styled.form`
    width: 100%;
    height: 90%;
    background: transparent;

`

export const InputPattern = styled.input`
    border-bottom: 2px solid ${Colors.primary};
    background: ${props => props.value ? Colors.primary : "#384D59"};
    padding: 4px;
    margin: 4px 0 16px;
    outline: none;
    border-radius: 4px;
    width: 100%;
    transition: all .4s ease;
    font-weight: lighter;

    :focus{
        background: ${Colors.primary}
    }

`

export const LabelPattern = styled.label`
    font-size: 12px;
    font-weight: lighter;
    color: whitesmoke;

`
// REGISTER STYLES

export const ContainerRegister = styled(ContainerGeneral)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: conic-gradient(from 180deg at 50% 95%, black 0deg, #384D59 360deg);
    background-size: 210%;
    animation: backAnimation 8s ease-in-out 4s infinite alternate;
    max-width: 100vw;

    @keyframes backAnimation{
        from{
            background-position: left;
        }
        to{
            background-position: right;
        }
    }

    img{
        margin: -60px 0 30px;
        width: 120px
    }

    
`

export const FormRegister = styled(FormLogin)`
    background-color: ${Colors.dark1};
    height: 100%;
    width: 320px;
    padding: 16px;
    border-radius: 16px;
    margin-top: -50px;


    div.btn-group{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    input{
        padding: 2px
    }

`

export const ButtonBack = styled(ButtonRegister)`
    border: 1.5px solid red;
    font-size: 16px;
    width: 130px;
    padding: 4px;
    background-color: transparent;
    color: #f2f2f2;
    

     :hover{
        background-color: red;
        filter: drop-shadow(0px 0px 10px red);
}

`

// HOMEPAGE STYLES

export const ContainerHome = styled(ContainerGeneral)`
    display: flex;
    flex-direction: column;
    background: conic-gradient(from 180deg at 50% 95%, black 0deg, #384D59 360deg);
    background-size: 300%;
    animation: backAnimation 8s ease-in-out 4s infinite alternate;

    @keyframes backAnimation{
        from{
            background-position: left;
        }
        to{
            background-position: right;
        }
    }

`

export const Header = styled.div`
    width: 100%;
    height: 100px;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 9999;



    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    li{
        list-style: none;
        padding: 12px;
    }

`

export const ButtonHomeHeader = styled(ButtonPattern)`
    background: transparent;
    font-size: 13px;
    font-weight: normal;
    padding: 4px 12px;
    margin:0;
    border: 1px solid ${Colors.primary};

`


export const HomeContent = styled.main`

    width: 100%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        margin: 24px 0 24px 1000px;
    }

    >div{
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: center;
        padding: 12px;
        width: 100%;
        margin: 16px 0 0;
    }
    
`

export const InputHome = styled(InputPattern)`
    width: 320px;
    margin: 0 8px;
    background: ${props => props.value ? Colors.primary : "#0000"};
    border-radius:8px;
    padding: 4px 8px;

    ::placeholder{
        color: white;
        opacity: .8;
    }
`



export const CardContainer = styled.div`
    width: 160px;
    height: 250px;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 0 8px rgba(0,0,0,.5);
    position: relative;


   
        img{
        object-fit: cover;
        width: 160px;
        height: 250px;
        border-radius: 8px;
    
        
    }

   
    
` 



export const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    height: 250px;
    font-weight: bold;
    font-size: 12px;
    width:100%;
    z-index: 9;
    font-family: 'Kanit', sans-serif;
    background: linear-gradient(0deg, rgba(38, 38, 38, 0.9) 5%, rgba(2, 2, 2, 0.1) 30%);
    border-radius: 8px;
    opacity: 0;
    transition: all .4s ease;

    :hover{
        opacity: 1;
    }
    
    >div{

        position: absolute;
        bottom:0;
        color: #f2f2f2;
        width: 100%;
        text-align: center;
        padding: 12px;
    }

    >div>p{
        color: #f2f2f2;
        font-weight: bold;
        font-size: 16px;
        letter-spacing: .5px;
        line-height: 16px;
        margin:4px 0;
    }
`
export const ScoreCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    width: 100%;
    margin: 0 auto;
    font-weight: normal;
 
    

`

// CARDLIST STYLES

export const ContainerCardList = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding: 0px 100px;



`

export const Lupa = styled(HiOutlineSearch)`
    width: 20px;
    height: 20px;
    align-self: center;
    color: #f2f2f2;
    filter: drop-shadow( 0 2px 6px black);
`

export const CardListSearch = styled.div`
    margin: 40px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const GenderListContainer = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
padding: 4px;


`
export const GenderList = styled(ButtonPattern)`
    font-size: 12px;
    color: #f2f2f2;
    border: 1px solid ${Colors.primary};
    background-color: transparent;
    text-align: center;
    margin: 0 12px;
    border-radius: 16px;
    
`

export const Footer = styled.div`
    padding: 8px 0;
    background-color: rgba(0,0,0,0.5);
    border-top: 1px solid rgba(255,255,255, .2);
    backdrop-filter: blur(7px);
    width: 100%;
    color: whitesmoke;
    font-weight: bold;
    display: flex;
    justify-content: center;
    font-size: 12px;
    letter-spacing: .5px;
    margin-top: 28px;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
    
`