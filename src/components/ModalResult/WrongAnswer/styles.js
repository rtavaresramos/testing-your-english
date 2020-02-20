import styled from 'styled-components';

export const ModalContainer = styled.div`


        position: fixed;
        z-index: 2;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        overflow: auto;
        background: rgba(30, 33, 36, .5);
        .hide{
        }
`;

export const ModalContent = styled.div `
        
        position: absolute;
        left: 35%;
        top: 30%;
        height: 228px;
        width: 328px;
        background: #fff;
        border: 3px solid #FF4F4F;
        box-sizing: border-box;
        box-shadow: 0px 3px 6px rgba(52, 60, 88, 0.4);
        border-radius: 8px;
        padding-top:20px;

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
            color: #FF4F4F;
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

`
