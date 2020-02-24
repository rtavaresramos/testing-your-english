import styled from 'styled-components';

export const QuestionContainer = styled.div`
            width:auto;
            height:100%;
            padding: 20px 20%;

            .hide{
                display: none;
            }

            .show{
                display:block;
            }
            h1{
            font-size: 1.2em;
            font-weight:500;
            font-family:Roboto, sans-serif;
            width:100%;
            }
            a{
            text-decoration:none;
            font-size: 1em;
            font-weight:500;
            font-family:Roboto, sans-serif;
            width:100%;
            height: 15px;
            padding: 5px 0;
            }

            h1,h2,a{
                margin:0 0;
            }
            span, a{
                color: #53595F;
            }

            span{
                margin-right:5px;
            }

            .start{
                text-align: start;
            }

            .end{
                text-align: end;
            }
            
            @media screen and (max-width: 575.98px){
                padding: 20px 0;
             }
             @media screen and (max-width: 767.98px){
                padding: 20px 0;
             }

             @media screen and (max-width: 1119.98px){ 
                padding: 20px 10%;
             }

             @media (max-device-width: 479.98px){ 
                padding: 20px 0;
                margin-left: 0;
             }


`
export const QuestionCard = styled.div`

        margin: 0 0;
        width: 100%;
        height: 539px;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
        border-radius: 8px;
        
        @media (max-device-width: 479.98px){ 
                
                padding-right: 10px;
                padding-bottom: 15px;
                margin-left: -5px;
             }

`
export const QuestionHeader = styled.header`

        padding: 30px 20px 0 40px;


        .questionLevel{
            position: relative;
            text-align: center;
            float: right;
            width: 86px;
            height: 20px;
            font-size: 1.2em;
            font-weight:500;
            font-family:Roboto, sans-serif;
            background: rgba(52,60,88, .2);
            border-radius: 14px;
            margin-right: 30px;
        }
        @media (max-device-width: 479.98px){ 
            .questionLevel{
            margin-right: 0;
        }
        }
        h2{
            width:80%;
            height:30%;
            padding:2px 5px;
            text-align: end;
            font-size: .6em;
            font-weight:500;
            font-family:Roboto, sans-serif;
            text-transform: capitalize

        }
        h2, span{
            color:#343C58;
        }
        span{
            position:absolute;
            font-size:.2em;
            text-align: center;
            margin-right: 15px;
            right: 40px;
            top: 5px;
        }
        p{
            font-family:Roboto, sans-serif;
            margin:30px 5px;
            font-weight: 400;
            

        }
        @media (max-device-width: 479.98px){ 

        margin-left: -10px;
}

        

`
export const QuestionAnswer = styled.div`

            padding: 0 0 10px 50px;
            height: 375px;
            width: auto;

            .enabled{
            background: #0467DB;
            pointer-events: auto;
            
            }
            .disabled{
            pointer-events:none;
            background: #C9CCCF;
            }

            .selected{
            /* pointer-events: ; */
            border:4px solid #0467DB;
        }

`
export const QuestionOption = styled.button`
        
        margin: 7px 0;
        width: 92%;
        height: 60px;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
        border-radius: 8px;
        outline: none;



        

        p{
            margin: 0 5px;
            font-family:Roboto, sans-serif;
            font-weight: 400;
            font-size: 16px;
            text-align: start;

        }

        @media (max-device-width: 479.98px){ 

            margin-left: -12px;
            width:100%;
        }



`
export const AnswerButton = styled.button`
            
            margin:10px 230px;
            width: 149px;
            height: 44px;
            border-radius: 8px;
            color:#fff;
            font-family:Avenir, sans-serif;
            font-weight: 500;
            font-size: 16px;
            outline:none;


            
            @media (max-device-width: 479.98px){
                margin:10px 0;
                width: 92%;
                height: 34px;

            }

            @media (min-device-width:480px) and (max-device-width: 767.98px){
                
                margin:10px 0;
                width: 92%;
                height: 34px
            }

            @media (max-width: 575.98px){
               

                margin:10px 0;
                width: 92%;
                height: 34px;

             }

             @media (min-width: 576px) and (max-width: 767.98px){

                margin:10px 0;
                width: 92%;
                height: 34px;

             }
             @media (min-width: 768px) and (max-width: 1119.98px){ 

                margin:10px 0;
                width: 92%;
                height: 34px;

             }
             @media (min-width: 1120px) and (max-width: 1219.98px){ 

                margin:10px 200px;
                width: 149px;
                height: 44px;

             }

`

export const ModalContainer = styled.div`


        position: fixed;
        z-index: 2;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        overflow: auto;
        background: rgba(30, 33, 36, .5);

`

export const ModalContent = styled.div `
        .right{
            color:#32CB82;
        }

        .wrong{
            color: #FF4F4F;
        }
        .end{
            color:#438DE4;
        }
        position: absolute;
        left: 35%;
        top: 30%;
        height: 228px;
        width: 328px;
        background: #fff;
        border: ${ props =>`3px solid ${props.borderColor}`};
        box-sizing: border-box;
        box-shadow: 0px 3px 6px rgba(52, 60, 88, 0.4);
        border-radius: 8px;
        padding-top:20px;

        @media (max-device-width: 479.98px){

            height: 228px;
            width: 290px;
            h1{

                position:absolute;
                left: -2%;
                top: 40%
           

            }

            span{
                position:absolute;
                left: -7%;
                
                }

            }

            @media (min-device-width:480px) and (max-device-width: 767.98px){
                
                left: 25%;

            }


        @media  (max-width: 575.98px){
        left: 13%;
        }

        @media  (min-width: 576px)and (max-width: 767.98px){
        left: 25%;

        }


        h1{

        margin:0 0 0 0;
        font-size: 2em;
        font-weight:500;
        font-family:Roboto, sans-serif;
        width:100%;
        text-align:center;
        color: #343C58;

        }

            span{
            margin: 0 130px;
            height:300px;
            width:300px;
            font-size: 4em;
            }

        
        
`
export const ModalButton = styled.button `

            margin:20px 90px;
            width: 149px;
            height: 44px;
            border-radius: 8px;
            color:#fff;
            font-family:Avenir, sans-serif;
            font-weight: 500;
            font-size: 16px;
            background: #0467DB;
            border: none;
            outline: none;

            i{
                margin:0 10px;
            }


            @media (max-device-width: 479.98px){

            position:absolute;
            left: -5%;
            top: 65%

            }
          
`
