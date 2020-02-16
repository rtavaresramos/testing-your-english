import styled from 'styled-components';

export const Container = styled.div`

        /* Working on Body Styles */
        position: absolute;
        top: 10%;
        left: 0%;
        right: 0%;
        bottom: 0%;
        height: 100%;
        background: #E5E5E5;


        h1{
            margin: 5% 10%;
            font-family: Roboto, sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 4em;
            line-height: 56px;
            /* identical to box height, or 127% */

            display: flex;
            align-items: center;
            text-align: center;

            /* Neutrals / Ink */

            color: #1E2124;

        }

        

`
export const Card = styled.div`

            width: 239px;
            height: 104px;
            margin: 1% 1%;
            text-align: start;
            padding-top: 4.5%;
            padding-left:2%;

            /* Neutral / White */

            background: #FFFFFF;
            /* Box Border */

            border: 1px solid #E4E4E6;
            box-sizing: border-box;
            /* Z100 */

            box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
            border-radius: 8px;

            h2{
                font-family: Roboto, sans-serif;
                font-weight: 400;
                font-size: 1.3em;
            }


`
export const CardPlace = styled.div` 
            display: flex;
            flex-direction: row;
            margin: 0 9%;
            width: 1000px;
            height: auto;


`