import styled from 'styled-components';

export const HomeContainer = styled.div`
    .hide{
        display:none;
    }

    h1{
        margin:50px 15px;
        font-size: 3.3em;
        font-weight:500;
        font-family:Roboto, sans-serif;
        width:100%;
        text-align:center;
    }

      /* // Extra small devices (portrait phones, less than 576px) */
      @media screen and (max-width: 575.98px){ 
        margin:0 0 0 0;

        h1{
            text-align:end;
            font-size:4em;
        }
      }
    /* // Small devices (landscape phones, less than 768px) */
    @media (min-width: 576px) and (max-width: 767.98px){
        h1{
            font-size:5em;
            text-align:end;
        }
    }
    @media (min-width: 768px) and (max-width: 1079.98px){
        h1{
            font-size:4em;
            text-align:end;
        }
    }
    @media (min-device-width: 313.98px) and (max-device-width: 413.98px){ 
        h1{
            text-align:start;
            font-size:2.7em;
        }
    }
`

export const CardSection = styled.div`

        padding: 0 6%;
        height: 110px;

        /* // Extra small devices (portrait phones, less than 576px) */
        @media screen and (max-width: 575.98px){ 
            padding: 0 8% 0 0;
        }
        @media (min-device-width: 313.98px) and (max-device-width: 413.98px){ 
            padding: 0 0;
            width:100%;
    }
`

