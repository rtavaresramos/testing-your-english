import styled from 'styled-components';

export const FinalResultContainer = styled.div`

            width:auto;
            height:100%;
            padding: 20px 20%;
`
export const FinalResultCard = styled.div`

        margin: 0 0;
        width: 100%;
        height: 539px;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
        border-radius: 8px;

        .resultDescription1{
            width: 40%;
            height: 77px;
            margin: 5% 30%;
            font-family: Avenir, sans-serif;
            font-size: 28px;
            line-height: 36px;

            color: #343C58;

            /* Neutral / Primary */

            background: rgba(52,60,88, .08);
            border-radius: 10px;

        }

        .resultDescription1 h1{
            margin:10px 0 0 15px;
        }
        .resultDescription1 h1, p{
            font-weight:200;
            margin: 0 10px -5px 10px;
            text-align:center;
        }
        .resultDescription1 p{
            font-size:.7em;
        }
        .resultDescription2 h2{
            font-family: Avenir, sans-serif;
            font-weight:500;
            font-size: 1.5em;
            line-height: 20px;

        }
        .resultDescription2 h2, .resultP{
            margin: 0 0 0 65px;
            color: #343C58;
            text-align:start;
        }
        .resultDescription2 .resultP{
            font-family: Avenir, sans-serif;
            font-weight:200;
            line-height: 19px;
            letter-spacing: 0.44px;
            font-size:.9em;
        }
        .divisor{
            margin: 0 10px 0 30px;
            height: 50px;
            border-left: 1px solid #B8BED5;
        }
`
export const Header = styled.div`
        position:relative;
        margin: 0 0;
        width: 100%;
        height: 237px;
        background: #438DE4;
        border-radius: 8px 8px 0 0;

        img{
            margin: 10px 60px;
            width:200px;
            height: auto;
        }
        h1{ 
            position:absolute;
            top:15%;
            left:40%;
            color:#fff;
            font-family: Avenir, sans-serif;
            font-size: 2.5em;
            line-height: 48px;
            font-weight:200;
            width:100%;
            }

        h2{
            position:absolute;
            top:45%;
            left:40%;
            color:#fff;
            font-weight:100;
            font-family: Avenir, sans-serif;
            font-size: 1.5em;
            line-height: 24px;
            width:100%;

        }
        
`
export const InfoHeader = styled.div`

        position:absolute;
        margin: 7px 0;
        width: 92%;
        background: #FFFFFF;
        outline: none;
        width: 40%;
        height: 45px;
        left: 30%;
        top: 85%;
        padding: 0 0;
        text-align: start;
        /* Neutral / White */

        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        
        h1{
            position: absolute;
            left: 0;
            top: -2px;
            width: 100%;
            color: #000;
            font-family: Avenir;
            font-size: 1em;
            font-weight:500;
            line-height: 19px;
            text-align: center;
            color: #343C58;
        }
`
export const ResultButton = styled.button`

            margin:10px 40%;
            width: 149px;
            height: 44px;
            border-radius: 8px;
            color:#fff;
            font-family:Avenir, sans-serif;
            font-weight: 500;
            font-size: 16px;
            background: #0467DB;
            outline:none;
            text-align: center;

`