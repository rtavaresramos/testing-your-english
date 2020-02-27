import styled from 'styled-components';

export const CardButton = styled.button`
        
        margin:10px 20px;
        width: 239px;
        height: 104px;
        background: #FFFFFF;


        border: 1px solid #E4E4E6;
        box-sizing: border-box;
        box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
        border-radius: 8px;
        outline: none;

       

        /* // Extra small devices (portrait phones, less than 576px) */
    @media screen and (max-width: 575.98px){ 
        margin:5px 10px;
        width: 180px;
        height: 170px;

        
        
        h1{
            width: 120px;
            margin: 80px 0 5px 5px;



        }

    }

    @media (min-width: 576px) and (max-width: 614.98px){
            margin:5px 10px;
            width: 200px;
            height: 170px;

            
            
            h1{
                width: 120px;
                margin: 80px 0 5px 5px;
            }
        }

    @media (min-width: 615px) and (max-width: 687.98px){

            margin: 5px 10px;
            width: 225px;
            height: 170px;
            h1{
                width: 120px;
            }
            }

    @media (min-width: 688px) and (max-width: 767.98px){

            margin: 5px 10px;
            width: 250px;
            height: 170px;
           

            }
    @media (min-width: 768px) and (max-width: 1079.98px){

            margin: 5px 10px;
            width: 200px;
            height: 170px;
            
            h1{
                width: 120px;

            }

            }

    @media (min-width: 1080px) and (max-width: 1169.98px){

            margin: 5px 10px;
            width: 210px;
            height: 170px;
            
            h1{
                width: 120px;

            }

            }

            /* Devices Width's */

    @media (min-device-width: 313.98px) and (max-device-width: 413.98px){ 
        margin:0 15px;
        width: 97%;
        height: 120px;

        h1{
            width: 120px;
            width: auto;
            margin: 50px 0 5px 5px;
            font-size:1.5em;
        }
    }


    @media (min-device-width: 414px) and (max-device-width: 479.98px){ 
        margin:0 15px;
        width: 150px;
        height: 150px;

        h1{
            width: 100px;
            width: auto;
            margin: 50px 0 5px 5px;
            letter-spacing:.7px
        }

    }

`
export const Title = styled.h2`

            width: 220px;
            height: auto;
            padding: 0 0;
            text-align: start;
            margin: 50px 0 5px 5px;
            font-size: 2em;
            font-family:Roboto, sans-serif;
            font-weight:500;



            @media screen and (max-width: 575.98px){ 

            width: 120px;
            margin: 80px 0 5px 5px;

    }

    @media (min-width: 576px) and (max-width: 614.98px){

                width: 120px;
                margin: 80px 0 5px 5px;
            
        }

    @media (min-width: 615px) and (max-width: 687.98px){

                width: 120px;
            
    }


    @media (min-width: 768px) and (max-width: 1079.98px){

                width: 120px;

            

    }

    @media (min-width: 1080px) and (max-width: 1169.98px){

                width: 120px;

            

            }

            /* Devices Width's */

    @media (min-device-width: 313.98px) and (max-device-width: 413.98px){ 

            width: 120px;
            width: auto;
            margin: 50px 0 5px 5px;
            font-size:1.5em;
        
    }


    @media (min-device-width: 414px) and (max-device-width: 479.98px){ 

            width: 100px;
            width: auto;
            margin: 50px 0 5px 5px;
            letter-spacing:.7px
        

    }


`