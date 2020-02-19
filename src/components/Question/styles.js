import styled from 'styled-components';

export const QuestionContainer = styled.div`
            width:auto;
            height:100%;
            padding: 20px 20%;

            
            .hide{
                display:none;
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
`
export const QuestionCard = styled.div`

        margin: 0 0;
        width: 100%;
        height: 539px;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
        border-radius: 8px;
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
        h2{
            width:80%;
            height:30%;
            padding:2px 5px;
            text-align: end;
            font-size: .6em;
            font-weight:500;
            font-family:Roboto, sans-serif;
        }
        h2, span{
            color:#343C58;
        }
        span{
            position:absolute;
            font-size:.2em;
            align-items: center;
            right: 45px;
            top: 5px;
        }
        p{
            font-family:Roboto, sans-serif;
            margin:30px 5px;
            font-weight: 400;

        }
        

`
export const QuestionAswer = styled.div`

            padding: 0 0 10px 50px;
            height: 375px;
            width: auto;

`
export const QuestionOption = styled.button`
        
        margin: 7px 0;
        width: 92%;
        height: 60px;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
        border-radius: 8px;
        outline: none;

        :focus{
            box-shadow: 0 0 1px 3px #0467DB;
        }

        p{
            margin: 0 5px;
            font-family:Roboto, sans-serif;
            font-weight: 400;
            font-size: 16px;
            text-align: start;

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
            background: #C9CCCF;

            /* .enabled{
            background: #0467DB;
            }

            .disabled{
            background: #C9CCCF;
            } */

`