import styled from 'styled-components';

export const FinalResultContainer = styled.div`

            width:auto;
            height:100%;
            padding: 20px 20%;
            overflow-x: hidden;
        .hide{
                display:none;
            }
        @media (max-device-width: 479.98px){ 
            padding: 5px 0;
            margin: 0 0;
            
        }
        
        @media screen and (max-width: 575.98px){ 
            padding: 20px 0;

        }
        @media (min-width: 575.98px) and (max-width: 879.98px){ 
            padding: 20px 0;

        }


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
        .resultDescription2 {
            display:flex;
            flex-direction: row;
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
        @media  (max-width: 400px){ 
            height: 720px;
            padding: 0 ;

        .resultDescription1{
        width: 75%;
        margin: 20% 5% 10px 15%;

        }

        .resultDescription2 {
            display:flex;
            flex-direction: column;
        }

        .resultDescription2 h2, .resultP{

            width: 300px;
        }
        .divisor{
            margin:15px 0;
            margin-left: -5px;
            width:100px;
            border-left: none;
            }
        }

        @media (min-device-width: 359px) and (max-device-width: 479.98px){ 
        
        height: 720px;
        padding: 0 ;

        .resultDescription1{
        width: 75%;
        margin: 20% 5% 10px 15%;

        }

        .resultDescription2 {
            display:flex;
            flex-direction: column;
            padding-left: 10%;



        }

        .resultDescription2 h2, .resultP{

            width: 300px;
        }
        .divisor{
            margin:15px 0;
            margin-left: -5px;
            width:100px;
            border-left: none;
            }
        }



        @media (min-width: 478px) and (max-width: 575.98px){ 
            height: 739px;

        

        .resultDescription1{
            width: 45%;
            margin: 10% 27%;
            }

        .resultDescription2 {
            width: 100%;
            display:flex;
            flex-direction: column;
            text-align:center;
            padding-left: 23%;
        }

        .resultDescription2 h2, .resultP{

            width: 300px;
        }

        .divisor{
            margin-top:15px;
            margin-left:-55px;
            width:100px;
            border-bottom: 1px solid #B8BED5;
            border-left: none;
            
            }
        }
        @media (min-width: 576px) and (max-width: 740px){ 
        overflow-x: hidden;
        height: 600px;
        

        .resultDescription1{
            width: 45%;
            margin: 10% 27%;
            }

        .resultDescription2 {
            width: 100%;
            display:flex;
            flex-direction: row;
            text-align:center;
            margin-left: -5%;
        }

        .resultDescription2 h2, .resultP{

            width: 300px;
        }

        .divisor{
            border-left: 1px solid #B8BED5;
            margin: 0 55px;
            
            }
        }

        @media (min-width:880px) and (max-width: 1079.98px){
        
        height: 600px;
        

        .resultDescription1{
            width: 45%;
            margin: 10% 27%;
            }

        .resultDescription2 {
            width: 100%;
            display:flex;
            flex-direction: row;
            text-align:center;
            margin-left: -7%;


        }

        .resultDescription2 h2, .resultP{

            width: 300px;
        }

        .divisor{
            border-left: 1px solid #B8BED5;
            margin: 0 55px;
            }
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

        @media (max-device-width: 479.98px){ 
            h1{ 
                top:15%;
                left:37%;
                font-size: 2em; 
            }

            h2{
                top:40%;
                left:32%;
                font-size: 1em;
            }
            img{
            margin: 30px 0;
            width:40%;
            height: auto;
            }
        }

        @media (min-width: 478px) and (max-width: 575.98px){ 
            img{
            margin: 10px 10px;
            width:40%;
            height: auto;
            }
        }
        @media (min-width: 576px) and (max-width: 740px){ 
            img{
            margin: 30px 40px;
            width:30%;
            height: auto;
            }
        }



        @media (min-width:880px) and (max-width: 1079.98px){
            img{
            margin: 30px 40px;
            width:30%;
            height: auto;
            }
        }
        
`
export const InfoHeader = styled.div`

        position:absolute;
        margin: 7px 0;
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

        @media (max-device-width: 479.98px){ 
            width: 85%;
            height:55px;
            left: 10%;
            }

        @media (min-width: 478) and (max-width: 575.98px){ 
        width: 65%;
        left: 17%;
        }
        @media (min-width: 576px) and (max-width: 740px){ 
            left: 17%;
            width: 65%;

        }
        @media (min-width:880px) and (max-width: 1179.98px){
            left: 17%;
            width: 65%;
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

            @media (max-device-width: 479.98px){ 
            margin:30px 10%;
            width: 80%;
            }

            @media screen and (max-width: 575.98px){
            margin:30px 10%;
            width: 80%;
             }

             @media (min-width: 576px) and (max-width: 740px){ 
            margin:30px 10%;
            width: 80%;

        }

            @media (min-width:880px) and (max-width: 1079.98px){
            margin:30px 10%;
            width: 80%;


             }


`